import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from '../pot/useWallet'

import { getFarms, getTotalStaking } from '../pot/utils'

export interface StakedValue {
  tokenAmount: BigNumber
  // wethAmount: BigNumber
  // totalWethValue: BigNumber
  // tokenPriceInWeth: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { tronWeb, account, pools, master, block } = useWallet()
  const farms = getFarms(pools)
  //const wethContact = getWethContract(yam)

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          lpContract,
        }: {
          lpContract: any
        }) =>
          getTotalStaking(
            tronWeb,
            master,
            lpContract,
          ),
      ),
    )

    setBalance(balances)
  }, [account, master, pools])

  useEffect(() => {
    if (account && master && pools) {
      fetchAllStakedValue()
    }
  }, [account, block, master, setBalance, pools])

  return balances
}

export default useAllStakedValue
