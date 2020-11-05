import React from 'react'
import chef from '../../assets/img/chef.png'

interface YamIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const YamIcon: React.FC<YamIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <img src={chef} height={size} />
)

export default YamIcon
