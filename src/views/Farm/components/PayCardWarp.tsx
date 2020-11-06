import React,{useState}from 'react'
import PayCard from './PayCard'
import Arrbtn from './ArrowBtn'
import './PayCardWarp.css'

interface PayCardWarpProps {
  children?: React.ReactNode,
  
}

const PayCardWarp: React.FC<PayCardWarpProps> = ({
  children,
}) => {
  
    const [cardSelect, setcardSelect] = useState(0)
    const [cardnum, setcardnum] = useState(5)
    const data=[{
        id:1,
    },{
        id:2,
    },{
        id:3,
    },{
        id:4,
    },{
        id:5,
    },{
        id:6,
    }]
    const leftbtnClick=()=>{
       
        if(cardSelect>0){
            setcardSelect(cardSelect-1)
         } 
        
    }
   const rightbtnClick=()=>{
     if(cardSelect<cardnum){
        setcardSelect(cardSelect+1)
     } 
    }
  return (
      <div className="pay_card_warp">
            <Arrbtn leftArrow onClick={leftbtnClick} disabed={0===cardSelect?true:false}/>
          <div className="pay_card_content"> 
                {data.map((item,index)=>{
                     return (<PayCard key={index} selected={cardSelect===index?true:false}/>)
                })}
         </div>
         <Arrbtn rightArrow onClick={rightbtnClick} disabed={cardnum===cardSelect?true:false}/>
      </div>
  )
}



export default PayCardWarp