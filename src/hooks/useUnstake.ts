import { useCallback } from 'react'

import { useWallet } from '../pot/useWallet'

import { unstake } from '../pot/utils'

const useUnstake = (pid: number) => {
  const { account, master } = useWallet()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(master, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, master],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
