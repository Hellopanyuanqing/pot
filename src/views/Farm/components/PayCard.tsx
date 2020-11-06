import React from 'react'
import "./PayCard.css"

interface CardProps {
  children?: React.ReactNode,
  selected?:boolean
  
}

const PayCard: React.FC<CardProps> = ({
  children,
  selected,

}) => {
  

   
  return (
      <div className={`pay_card_box ${selected?"selected":""}`}>
          <p className="pay_title ">XP-trx lp</p>
          <div className="xp_box">
              <p className="xp_title">xp_box</p>
              <p className="xp_title">获得XP</p>
          </div>
          <button className="chiose_btn">选择</button>
          <p className="total_title">累计质押<span>18,338.00</span></p>
          <p className="total_title">APY<span>3000.00%</span></p>

      </div>
  )
}



export default PayCard