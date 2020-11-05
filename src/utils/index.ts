import BigNumber from 'bignumber.js'

export { default as formatAddress } from './formatAddress'

export const bnToDec = (bn: BigNumber): number => {
  return bn.div('1000000000000000000').toNumber()
}

export const decToBn = (dec: number) => {
  return new BigNumber(dec).times('1000000000000000000')
}
