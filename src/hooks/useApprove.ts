import { useCallback } from 'react'

import { useWallet } from '../pot/useWallet'

import { approve } from '../pot/utils'

const useApprove = (lpContract: any) => {
  const { account, master } = useWallet()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, master, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, master])

  return { onApprove: handleApprove }
}

export default useApprove
