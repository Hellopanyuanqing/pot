import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from '../pot/useWallet'

import { getEarned, getFarms } from '../pot/utils'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { tronWeb, account, pools, master, block } = useWallet()
  const farms = getFarms(pools)

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(tronWeb, master, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, master, pools])

  useEffect(() => {
    if (account && master && pools) {
      fetchAllBalances()
    }
  }, [account, block, master, setBalance, pools])

  return balances
}

export default useAllEarnings
