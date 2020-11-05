import BigNumber from 'bignumber.js'
import { Contracts } from './lib/contracts.js'
import { Account } from './lib/accounts.js'
import { EVM } from './lib/evm.js'

import { contractAddresses } from './lib/constants'

export class Sushi {
  constructor(tronWeb) {

    this.contracts = new Contracts(tronWeb)
    this.sushiAddress = contractAddresses.sushi
    this.masterChefAddress = contractAddresses.masterChef
  }

  toBigN(a) {
    return BigNumber(a)
  }
}
