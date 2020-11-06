import React, {useState,useEffect} from 'react'
import "./NoTimeContent.css"
interface NoTimeContentProps {
    endTime: string 
  }
const NoTimeContent: React.FC<NoTimeContentProps> = ({endTime}) => {
      
    const [time, setTime] = useState({day: 0,hour: 0,minute1: 0,minute2: 0,second1: 0,second2:0})
   
    useEffect(()=>{
        let endTim = endTime.replace(/-/g, "/");
          countFun(endTim);
    },[])
    const countFun = (end:any) => {
 
        let now_time = Date.parse(new Date().toString());
        var remaining = end - now_time;
       const timer = setInterval(() => {
            //防止出现负数
         if (remaining > 1000) {
            remaining -= 1000;
            let day = Math.floor((remaining / 1000 / 3600) / 24);
            let hour:any = Math.floor((remaining / 1000 / 3600) % 24);
            let minute1:any = Math.floor((remaining / 1000 / 60) % 60/10);
            let minute2:any = Math.floor((remaining / 1000 / 60) % 60)%10;
            let second1:any = Math.floor(remaining / 1000 % 60/10);
            let second2:any = Math.floor(remaining / 1000 % 60)%10;
             
            
            setTime({
                day:day,
                hour:hour < 10 ? "0" + hour : hour,
                minute1:minute1,
                minute2:minute2,
                second1:second1,
                second2:second2,
            })
         } else {
           clearInterval(timer);
            //倒计时结束时触发父组件的方法
            //this.props.timeEnd();
         }
       }, 1000);
      }

  return (
       <div className="notime_box">
         <p className="noTime"><span className="time_span">{time.minute1}</span><span className="time_span">{time.minute2}</span><span className="time_icon">:</span><span className="time_span">{time.second1}</span><span className="time_span">{time.second2}</span></p>
       </div>
  )
}

export default NoTimeContent
