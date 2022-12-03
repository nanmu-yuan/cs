import { useEffect } from "react";
import { useState } from "react"
import {SwitchTransition,CSSTransition} from 'react-transition-group'
import "../../flipdown/flipdown.css"
import BButton from "../core/B-button/B-button";
/**
 * SwitchTransition + CSSTransition
 */
const Cs=()=>{
    const [isOn,setOn] = useState(false);
    const change=()=>{
        setOn(state =>{
           return !state
        })
       console.log(isOn)
    }
    const add=()=>{
        console.log(123)
    }
    // useEffect(()=>{
    //    var FlipDown = window.FlipDown;
    //         document.addEventListener('DOMContentLoaded',()=>{
    //             console.log(123456798)
    //         })
    //         let date = getZoneTime(8);
    //         function getZoneTime(offset){
    //           // 取本地时间
    //           var localtime = new Date();  
    //           // 取本地毫秒数
    //           var localmesc = localtime.getTime(); 
    //           // 取本地时区与格林尼治所在时区的偏差毫秒数
    //           var localOffset = localtime.getTimezoneOffset() * 60000; 
    //           // 反推得到格林尼治时间
    //           var utc = localOffset + localmesc; 
    //           // 得到指定时区时间
    //           var calctime = utc + (3600000*offset);  
          
    //           var nd = new Date(calctime);  
    //           // return nd.toDateString()+" "+nd.getHours()+":"+nd.getMinutes()+":"+nd.getSeconds(); 
    //           //只需要获取hour值
    //           return nd.getTime();
    //         }
          
    //         // Unix timestamp (in seconds) to count down to
    //        var futureDay = new Date('2022-12-1 23:25:00')/1000+5000;
          
    //         // Set up FlipDown
    //         new FlipDown(futureDay)
      
          
    //           // Start the countdown
    //           .start()
          
    //           // Do something when the countdown ends
    //           .ifEnded(() => {
    //             console.log('The countdown has ended!');
    //           });
    //         return()=>{
    //             console.log('卸载成功')
    //         }
          
    // },[])
    return(
        <div className="Cs">
            <div>
                <div>{`${isOn}`}</div>
                <SwitchTransition mode={'out-in'}>
                    <CSSTransition classNames={'btn'} timeout={500} key={isOn?"on":"off"}>
                       {
                        isOn?<div className="bb1">12312</div>:<div className="bb2">789</div>
                       }
                    </CSSTransition>
                </SwitchTransition>
                <button onClick={change} >
                                {isOn?'on':'off'}
                </button>
                <BButton change={change}>button131</BButton>
                <BButton change={add}>Add button</BButton>
            </div>
        </div>
    )
}
export default Cs
