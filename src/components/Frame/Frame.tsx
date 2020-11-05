import React, {useState, ReactNode} from 'react'
import { Layout, Menu, Avatar, Dropdown, Input } from 'antd';
import menuObj,{IFMenuBase} from '../../routes/config'
import './Frame.css'
import zg from '../../assets/img/zhongguo-2@2x.png'
import tg from '../../assets/img/taiguoyuanjiao.png'
import yg from '../../assets/img/yingguo.png'
import { withRouter,RouteComponentProps} from 'react-router-dom';
import MenuIcon from '../../components/MenuIcon'
const { Header, Content, Sider } = Layout;
const {menus}=menuObj
const countryList = {
  zg, tg, yg
}

type PageProps=RouteComponentProps<any>&{
  children?: ReactNode;

}

const CancelClickSearch = () => {

}

 function Frame(props: PageProps) {

  const [avatar, setAvatar] = useState(countryList['zg'])

  const avatarMenuClick = ({ key }: any) => {
    setAvatar(countryList[key])
  }
  const getAvatar = () => {
    return <Menu onClick={avatarMenuClick}>
      <Menu.Item key="tg">
        <Avatar src={tg} className="Avatar" />
      </Menu.Item>
      <Menu.Item key="yg">
        <Avatar src={yg} className="Avatar" />
      </Menu.Item>
    </Menu>
  } 

  const menuClick=({key}:any)=>{ 
      props.history.push(key);  
    }
    
  return (
    <Layout>
      <Header className="header" >
        <div className="logo">
          <span>XP</span>ROJECT
    </div>
        <div className="seach_box">
          <Input
            className="seach_input"
            suffix={
              <span onClick={CancelClickSearch} className="search_out">退出</span>
            }
          />
          <Dropdown overlay={getAvatar} placement="bottomCenter">
            <Avatar src={avatar} className="Avatar" />
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider className="Sider" width={"16.5vw"}>
          <Menu  className="Menu" onClick={menuClick} selectedKeys={[props.location.pathname]}>
            {menus.map((item:IFMenuBase)=>{
              return(<Menu.Item  className="menu_item" key={item.key}>
                 <MenuIcon iconName={item.icon} selected={item.key===props.location.pathname?true:false}/>{item.title}
            </Menu.Item>)

            })}
          </Menu>
        </Sider>
        <Content style={{ padding: '20px 0', minHeight: "calc(100vh - 85px)", background: '#fff', margin: '0 0px 0 0px' }}>{props.children}</Content>

      </Layout>

    </Layout>
  )
}

export default withRouter(Frame)
