import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from '../pot/useWallet'

import { getBalance } from '../utils/erc20'

const useTokenBalance = (lpContract: any) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { tronWeb, account, block } = useWallet()

  const fetchBalance = useCallback(async () => {
    const balance = await getBalance(tronWeb, lpContract, account)
    setBalance(new BigNumber(balance))
  }, [account, lpContract])

  useEffect(() => {
    if (account && lpContract) {
      fetchBalance()
    }
  }, [account, lpContract, setBalance, block])

  return balance
}

export default useTokenBalance
