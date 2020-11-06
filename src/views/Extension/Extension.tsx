import { Table ,Modal} from 'antd'
import React ,{useState}from 'react'

import "./Extension.css"



const Extension: React.FC = () => {
     const [modalvisible, setmodalvisible]=useState(true)
     const dataSource:any=[];
     const columns:any=[
        {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            align:"center",
          },{
            title: '邀请地址',
            dataIndex: 'adress',
            key: 'adress',
            align:"center",
          }
     ];
 const modalOnCancel=()=>{
    setmodalvisible(false)
 }
  return (
       <div className="extension_main">
           <div className="extension_main_content">
                  <h1>推广返佣</h1>
               <div className="my_extension">
                    <p className="my_extension_title">我的邀请返佣</p>
                    <p className="my_extension_data"><span>8,000,000 XP</span><span>$ 129,389,390</span></p>
               </div>
              
               <p className="last_title">绑定邀请地址：<span className="last_adress">Nfwfnwomdpasmkasfnwhfolafkm</span></p>
                <div className="my_tab_box">
                     <p className="my_tab_title">我的邀请记录</p>
                     <Table 
                     dataSource={dataSource} 
                      columns={columns} 
                    
                     />
                </div>
           </div>
           <Modal  
               visible={modalvisible}
               footer={null}
               onCancel={modalOnCancel}
           />
       </div>
  )
}

export default Extension
