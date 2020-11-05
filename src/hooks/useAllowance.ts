import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from '../pot/useWallet'

import { getAllowance } from '../utils/erc20'

const useAllowance = (lpContract: any) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { tronWeb, account, master } = useWallet()

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      tronWeb,
      lpContract,
      master,
      account,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, master, lpContract])

  useEffect(() => {
    if (account && master && lpContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, master, lpContract])

  return allowance
}

export default useAllowance
