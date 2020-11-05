import { useCallback } from 'react'

import { useWallet } from '../pot/useWallet'

import { stake } from '../pot/utils'

const useStake = (pid: number) => {
  const { account, master } = useWallet()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        master,
        pid,
        amount,
        account,
      )
    },
    [account, pid, master],
  )

  return { onStake: handleStake }
}

export default useStake
