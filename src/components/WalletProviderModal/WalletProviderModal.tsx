import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from '../../pot/useWallet'

import metamaskLogo from '../../assets/img/metamask-fox.svg'
import walletConnectLogo from '../../assets/img/wallet-connect.svg'
import tronLinkLogo from '../../assets/img/icon.png'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'

import WalletCard from './components/WalletCard'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect } = useWallet()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Modal>
      <ModalTitle text="Select a wallet provider." />

      <ModalContent>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={tronLinkLogo} style={{ height: 32 }} />}
              onConnect={() => connect()}
              title="TronLink"
            />
          </StyledWalletCard>
      </ModalContent>

      <ModalActions>
        <Button text="Cancel" variant="secondary" onClick={onDismiss} />
      </ModalActions>
    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

export default WalletProviderModal
