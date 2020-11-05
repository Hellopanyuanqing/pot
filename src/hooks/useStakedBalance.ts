import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from '../pot/useWallet'

import { getStaked } from '../pot/utils'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, master, block } = useWallet()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(master, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, master])

  useEffect(() => {
    if (account && master) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, master])

  return balance
}

export default useStakedBalance
