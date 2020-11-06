import React from 'react'
import iconList from './config'
import './HomeCard.css'

interface CardProps {
  children?: React.ReactNode,
  icon:string
  title: string,
  num:string,
  probability?: string

}

const HomeCard: React.FC<CardProps> = ({
  children,
  icon,
  title,
  num,
  probability
}) => {
  
   console.log(iconList);
   
  return (
      <div className="card_box">
          <div className="card_img_box">
              <img src={iconList[icon]}/> 
          </div>
           <div className="card_content">
            <p className="card_title">{title}</p>
             <p className="card_num">{num}</p>
             <p className="probability">{probability}</p>
             {children}
           </div>
      </div>
  )
}



export default HomeCard