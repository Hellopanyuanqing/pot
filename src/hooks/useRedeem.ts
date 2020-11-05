import { useCallback } from 'react'

import { useWallet } from '../pot/useWallet'

import { redeem } from '../pot/utils' 

const useRedeem = (masterChefContract: any) => {
  const { account } = useWallet()

  const handleRedeem = useCallback(async () => {
    const txHash = await redeem(masterChefContract, account)
    console.log(txHash)
    return txHash
  }, [account, masterChefContract])

  return { onRedeem: handleRedeem }
}

export default useRedeem
