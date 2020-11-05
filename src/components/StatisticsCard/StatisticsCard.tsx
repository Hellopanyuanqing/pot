import React from 'react'
import arrow from '../../assets/img/youzhuan.png'
import "./StatisticsCard.css"

interface CardProps {
  children?: React.ReactNode,
  title: string,
  text1:string,
  num1:string,
  text2?:string,
  num2?:string,
  icon?:string
}

const StatisticsCard: React.FC<CardProps> = ({
  children,
  title,
  text1,
  num1,
  text2,
  num2,
  icon,

}) => {
  
   
  return (
      <div className="Statis_card_box">
          <div className="card_left">
               <p className="Statis_card_title">{title}</p>
                <div className="Statis_data_box"> 
                  <p className="card_num_title">{text1}:{num1}</p>
                  <p className="card_num_title">{text2}:{num2}</p>
                </div>
          </div>
          <div className="card_right">
              <span className="arrow_box"><img src={arrow}/></span>
          </div>
      </div>
  )
}



export default StatisticsCard