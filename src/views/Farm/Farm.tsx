import { Col, Row } from 'antd'
import React from 'react'
 import PayCardWarp from './components/PayCardWarp'
import './Farm.css'


const Farm: React.FC = () => {
  

  return (
      <Row>
         <Col span="18" offset="3">
               <div className="head_box">
                  <h1>选择您最喜欢的矿池 开始挖矿吧！</h1>
                  <div className="head_adress_box">
                      <p className="head_adress_title">XP-trx智能合约地址：hudndehfbjo</p>
                      <button className="pay_btn">购买并提供流动性</button>
                  </div>
               </div>
               <PayCardWarp/>
               
         </Col>
      </Row>
  )
}



export default Farm
