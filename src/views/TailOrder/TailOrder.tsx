import React from 'react'
import NoTimeContent  from './components/NoTimeContent';
import HomeCard from '../../components/HomeCard'
import kaiJiangImg from '../../assets/img/kaijiang/kaijiang.png'
import "./TailOrder.css"

const TailOrder: React.FC = () => {

  return (
       <div className="TailOrder_main">
           <div className="tailOrder_main_content">
                  <h2>Fomo发奖倒计时</h2>
                 <NoTimeContent endTime="1704598853000"/>

          <div className="fomo_card_box">
             <HomeCard icon="starIcon"  title="FOMO最小参与数量" num="1，000 XP" ></HomeCard>
             <HomeCard icon="huojiangIcon"  title="FOMO最小参与数量" num="1，000 XP" ></HomeCard>
             <HomeCard icon="fenhongIcon"  title="FOMO最小参与数量" num="1，000 XP" ></HomeCard>
          </div>
             <p className="last_title">当前最后一名转账地址：<span className="last_adress">Nfwfnwomdpasmkasfnwhfolafkm</span></p>
            <div className="wait_box">
                 <div className="kaijiang_box">
                     <img src={kaiJiangImg}/>
                     <p className="wait_kaijiang_title">等待开奖</p>
                  </div>
            </div>
           
           </div>
       </div>
  )
}

export default TailOrder
