import { useCallback } from 'react'

import { useWallet } from '../pot/useWallet'

import { harvest } from '../pot/utils'

const useReward = (pid: number) => {
  const { account, master } = useWallet()

  const handleReward = useCallback(async () => {
    const txHash = await harvest(master, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, master])

  return { onReward: handleReward }
}

export default useReward
