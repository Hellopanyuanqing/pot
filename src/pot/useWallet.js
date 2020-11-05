import React, { createContext, useContext, useEffect, useState } from 'react'
import { contractAddresses, supportedPools } from './constant'
import tokenABI from './abi/token.json'
import masterABI from './abi/master.json'
import ERC20ABI from './abi/ERC20.json'
import LPABI from './abi/LP.json'

export const UseWalletContext = createContext({
  tronWeb: null,
  account: null,
  master: null,
  token: null,
  pools: null,
  connect: null,
  reset: null,
  block: 0,
})

export const UseWalletProvider = ({children}) => {
  const [tronWeb, setTronWeb] = useState(null)
  const [account, setAccount] = useState(null)
  const [master, setMaster] = useState(null)
  const [token, setToken] = useState(null)
  const [pools, setPools] = useState(null)
  const [block, setBlock] = useState(0)
  useEffect(() => {
    const interval = setInterval(async () => {
      if (!tronWeb) {
        return
      }
      const latestBlockNumber = (await tronWeb.trx.getCurrentBlock())?.block_header?.raw_data?.number
      if (latestBlockNumber && block !== latestBlockNumber) {
        setBlock(latestBlockNumber)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [tronWeb])
  const connect = () => {
    if (window.tronWeb?.defaultAddress?.base58) {
      setTronWeb(window.tronWeb)
      setAccount(window.tronWeb.defaultAddress.base58)
      setMaster(window.tronWeb.contract(masterABI, contractAddresses.master))
      setToken(window.tronWeb.contract(tokenABI, contractAddresses.token))
      const ps = supportedPools.map(pool => {
        if (pool.LP) {
          return Object.assign(pool, {
            lpContract: window.tronWeb.contract(LPABI, pool.lpAddress)
          })
        }
        return Object.assign(pool, {
          lpContract: window.tronWeb.contract(ERC20ABI, pool.lpAddress)
        })
      })
      setPools(ps)
    }
  }
  const reset = () => {
    setTronWeb(undefined)
    setAccount(undefined)
    setMaster(undefined)
    setToken(undefined)
    setPools([])
  }

  return (
    <UseWalletContext.Provider value={{tronWeb, account, master, token, pools, block, connect, reset}}>
      {children}
    </UseWalletContext.Provider>
  )
}

export const useWallet = () => {
  const ctx = useContext(UseWalletContext)
  return ctx
}