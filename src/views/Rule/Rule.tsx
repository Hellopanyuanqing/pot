import React from 'react'
import styled from 'styled-components'

import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const FAQ: React.FC = () => {
  return (
    <Page>
      <Container>
        <Card>
          <CardContent>
            <Contentbox>
            <p>A total of 120000 pots will be distributed in the form of yfi: no private placement, no pre excavation, no reservation, equal opportunities for all, 100% driven and managed by the community.</p>
            <p>
            When you open the website, this website will try to connect with tronlink. After tronlink is updated, the updated number will be displayed on the website.
            </p>
            <p>Ore pool</p>
            <p>SUN 5000</p>
            <p>JST 5000</p>
            <p>ZEUS 10000</p>
            <p>JFI 5000</p>
            <p>ZEUS/TRX LP 15000</p>
            <p>POT/TRX LP 10000</p>
            <p>ROSE 5000</p>
            <p>ROSE/TRX LP 5000</p>
            <p>Adding more ore pools will depend on the community vote.</p>
            <p>POT</p>
            <p>Smart contract address : TKDEghGVnk3y8nkN8jiBL7Z28HfuaUY6Rj</p>
            <p>SUN</p>
            <p> Token address : TKkeiboTkxXKJpbmVFbv4a8ov5rAfRDMf9</p>
            <p>JST</p>
            <p>Token address : TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9</p>
            <p>ZEUS</p>
            <p>Token address : TFos1WyKT1wG8HCciLdBcAM9NfEBCYoLhA</p>
            <p>JFI</p>
            <p>Token address : TN7zQd2oCCguSQykZ437tZzLEaGJ7EGyha</p>
            <p> ROSE</p>
            <p>Token address : TViUaFXuuCMgBy4iuf8L8UtbzjhwtM6oYw</p>
            <p>ZEUS/TRX LP</p>
            <p>Mine pool address：</p>
            <p>POT/TRX LP</p>
            <p>Mine pool address：</p>
            <p>ROSE/TRX LP</p>
            <p>Mine pool address：</p>

            <p>Token Mining Schedule</p>
            <p>Since the start-up, each pool has 10 days of mining time.</p>
            </Contentbox>
          </CardContent>
        </Card>
      </Container>
    </Page>
  )
}

const StyledHeading = styled.h2`
  margin-bottom: 0;
  margin-top: ${(props) => props.theme.spacing[5]}px;
`
const StyledList = styled.ul`
  margin: 0;
  padding: 0 ${(props) => props.theme.spacing[6]}px;
`
const StyledListItem = styled.li`
  margin-top: ${(props) => props.theme.spacing[3]}px;
`
const Contentbox = styled.p`
p{
  margin:10px;
  padding:0px;
}
`

const StyledText = styled.p`
  font-style: italic;
  line-height: 2;
  text-indent: ${(props) => props.theme.spacing[4]}px;
`

export default FAQ
