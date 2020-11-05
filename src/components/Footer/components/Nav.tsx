import React from 'react'
import styled from 'styled-components'
import useModal from '../../../hooks/useModal'
import { contractAddresses } from '../../../pot/constant'
import WechatModal from '../../WechatModal/WechatModal'

const Nav: React.FC = () => {
  const [ openModal ] = useModal(<WechatModal />)

  return (
    <StyledNav>
      <StyledLink href="#" onClick={openModal}>
        Wechat
      </StyledLink>
      <StyledLink target="_blank" href="https://0.plus/uppotato">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/TpotatoPo">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href={`https://tronscan.org/#/contract/${contractAddresses.master}/code`}>
        Contract
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/mypot0918/potato">
        Github
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
