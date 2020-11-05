import { Col, Row,} from 'antd'
import React from 'react'
import HomeCard from '../../components/HomeCard'
import StatisticsCard  from '../../components/StatisticsCard'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div>
      <Row className="home_box1">
          <Col  span={5} offset={2}>
             <h3 className="home_title">XP当前总量</h3>
             <p className="current_num">10，000，000</p>
          </Col>
          <Col span={15} >
            
       
             <h3 className="home_title">XP TOKEN燃烧及奖池数量</h3>
              
             <div className="Jackpot_box">
                 <HomeCard icon="fireIcon"  title="GAS燃放" num="10，000" probability="0.00001%"></HomeCard>
                 <HomeCard icon="fireIcon"  title="GAS燃放" num="10，000" probability="0.00001%"></HomeCard> 
                 <HomeCard icon="fireIcon"  title="GAS燃放" num="10，000" probability="0.00001%"></HomeCard>
             </div>
          </Col>
      </Row>
      <Row className="home_box1">
      <Col  span={5} offset={2}>
         <div className="cruent_box"> 
           <h3 className="home_title">XP 当前价格</h3>
            <p className="current_price">$ 5.0</p>
         </div>
         <div className="cruent_box"> 
           <h3 className="home_title">XP 当前市值</h3>
            <p className="current_city_price">$ 1，338，938，937</p>
         </div>
         <div className="cruent_box"> 
           <h3 className="home_title">XP 持币地址数</h3>
            <p className="current_city_price">16，283，737</p>
         </div>
         <div className="cruent_box"> 
           <h3 className="home_title">LP资金</h3>
            <p className="current_city_price">1，839，368，847 TRX</p>
         </div>
      </Col>
      <Col span={15} >
        
      
        <StatisticsCard title="博弈奖池发放统计" text1="累计发放数量" num1="1，792，839" text2="累计发放次数" num2="12，838
"/>
 <StatisticsCard title="博弈奖池发放统计" text1="累计发放数量" num1="1，792，839" text2="累计发放次数" num2="12，838
"/>
 <StatisticsCard title="博弈奖池发放统计" text1="累计发放数量" num1="1，792，839" text2="累计发放次数" num2="12，838
"/>
 <StatisticsCard title="博弈奖池发放统计" text1="累计发放数量" num1="1，792，839" text2="累计发放次数" num2="12，838
"/>
          
        
      </Col>
  </Row>
  </div>
  )
}



export default Home
