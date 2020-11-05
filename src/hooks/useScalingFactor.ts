import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'

import { bnToDec, decToBn } from '../utils'
// import { getScalingFactor } from '../pot/utils'

const useScalingFactor = () => {
  // const [scalingFactor, setScalingFactor] = useState(decToBn(1))

  // useEffect(() => {
  //   async function fetchScalingFactor() {
  //     const sf = await getScalingFactor(yam)
  //     setScalingFactor(sf)
  //   }
  //   if (yam) {
  //     fetchScalingFactor()
  //   }
  // }, [yam])

  // return bnToDec(scalingFactor)
}

export default useScalingFactor
