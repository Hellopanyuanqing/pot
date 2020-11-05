import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from '../../../pot/useWallet'

import useTokenBalance from '../../../hooks/useTokenBalance'
import {
  getDisplayBalance,
  getBalanceNumber,
} from '../../../utils/formatBalance'

import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Label from '../../Label'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Separator from '../../Separator'
import Spacer from '../../Spacer'
import Value from '../../Value'
import { contractAddresses } from '../../../pot/constant'

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const sushiBalance = useTokenBalance(contractAddresses.token)

  return (
    <Modal>
      <ModalTitle text="My Account" />
      <ModalContent>
        <Spacer />

        <div style={{ display: 'flex' }}>
          <StyledBalanceWrapper>
            <CardIcon>
              <img src={require('../../../assets/img/chef.png')} alt="pot" height={55} />
            </CardIcon>
            <StyledBalance>
              <Value value={getBalanceNumber(sushiBalance)} />
              <Label text="POT Balance" />
            </StyledBalance>
          </StyledBalanceWrapper>
        </div>

        <Spacer />
        <Button
          href={`https://tronscan.org/#/address/${account}`}
          text="View on Tronscan"
          variant="secondary"
        />
        <Spacer />
        <Button
          onClick={handleSignOutClick}
          text="Sign out"
          variant="secondary"
        />
      </ModalContent>
      <ModalActions>
        <Button onClick={onDismiss} text="Cancel" />
      </ModalActions>
    </Modal>
  )
}

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

export default AccountModal
