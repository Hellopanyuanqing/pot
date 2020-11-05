import React from 'react'
import iconList from './iconConfig'
import './MenuIcon.css'


interface IconProps {
  children?: React.ReactNode,
  selected: boolean,
  iconName:string,
}

const MenuIcon: React.FC<IconProps> = ({
  children,
  selected,
  iconName
}) => {
  
  
  return (
     <span className="icon_box"><img src={selected?iconList[iconName+'Select']:iconList[iconName]}/></span>
  )
}



export default MenuIcon