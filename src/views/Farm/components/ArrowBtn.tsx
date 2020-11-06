import React from 'react'
import zuoArrow from "../../../assets/img/zouArrow.png"
import youArrow from "../../../assets/img/youzhuan.png"
import  './ArrowBtn.css'
interface ArrowBtnProps {
  children?: React.ReactNode,
  leftArrow?:boolean,
  rightArrow?:boolean,
  disabed?:boolean,
  onClick?: () => void,
  
  
}

const ArrowBtnProps: React.FC<ArrowBtnProps> = ({
  children,
  leftArrow,
  rightArrow,
  disabed,
  onClick
}) => {
  

   
  return (
       <span onClick={onClick} className={`arrowDefault ${rightArrow?"rightArrow":"leftArrow"} ${disabed?"disabed":""}`}><img src={leftArrow?zuoArrow:youArrow}/></span>
  )
}



export default ArrowBtnProps