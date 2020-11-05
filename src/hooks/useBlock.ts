import { useCallback, useEffect, useState } from 'react'
import { useWallet } from '../pot/useWallet'
// import debounce from 'debounce'

const useBlock = () => {
  const [block, setBlock] = useState(0)
  const { tronWeb }: {tronWeb: any} = useWallet()

  useEffect(() => {
    // const setBlockDebounced = debounce(setBlock, 300)
    if (!tronWeb) return

    // const subscription = new Web3(ethereum).eth.subscribe(
    //   'newBlockHeaders',
    //   (error, result) => {
    //     if (!error) {
    //       setBlockDebounced(result.number)
    //     }
    //   },
    // )

    const interval = setInterval(async () => {
      const latestBlockNumber = (await tronWeb.trx.getCurrentBlock())?.block_header?.raw_data?.number
      if (latestBlockNumber && block !== latestBlockNumber) {
        setBlock(latestBlockNumber)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [tronWeb])

  return block
}

//export default useBlock
