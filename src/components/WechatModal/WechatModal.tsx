import React from 'react'
import Button from "../Button"
import Modal, { ModalProps } from "../Modal"
import ModalActions from "../ModalActions"
import ModalContent from "../ModalContent"
import ModalTitle from "../ModalTitle"
import wechat from '../../assets/img/wechat.png'
import styled from 'styled-components'

const WechatModal: React.FC<ModalProps> = ({onDismiss}) => {
  return (
    <Modal>
      <ModalTitle text="Wechat: wxid_bbxxcgl7xuea12" />
      <ModalContent>
        <StyledContent>
          <img src={wechat} alt="wechat" />
        </StyledContent>
      </ModalContent>
      <ModalActions>
        <Button text="OK" variant="default" onClick={onDismiss} />
      </ModalActions>
    </Modal>
  )
}

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
`

export default WechatModal