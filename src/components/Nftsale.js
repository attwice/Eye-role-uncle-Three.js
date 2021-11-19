import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CHANGE_TIME } from '../constants/actionTypes';

const Nftsale = () => {
  const dispatch = useDispatch();
  const mintInfo = useSelector(state => state.mint);

  let year = new Date().getFullYear();
  const difference = +new Date(`20 November ${year} 20:00:00 UTC`) - +new Date(); 
   
  let initialDays = 0;
  let initialHours = 0; 
  let initialMinutes = 0;
  let initialSeconds = 0;

  if (difference > 0) {
    initialDays = Math.floor(difference / (1000 * 60 * 60 * 24));              
    initialHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    initialMinutes = Math.floor((difference / 1000 / 60) % 60);
    initialSeconds = Math.floor((difference / 1000) % 60);      
  } 
    
  const [ day, setDays ] = useState(initialDays);
  const [ hour, setHours ] = useState(initialHours);
  const [ minute, setMinutes ] = useState(initialMinutes);
  const [ second, setSeconds ] =  useState(initialSeconds);
  

  useEffect(() => {    
    let myInterval = setInterval(() => {
      if (second > 0) {
        setSeconds(second - 1);
      }

      if (second === 0) {
        if (minute === 0) {
          if(hour === 0) {
            if(day === 0) {    
              dispatch({type: CHANGE_TIME, payload: true})            
              clearInterval(myInterval);              
            } else {
              setDays(day - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }            
          } else {
            setHours(hour - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minute - 1);
          setSeconds(59);
        }
      } 
    }, 1000)

    return ()=> {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="nftBg" style={{ backgroundImage: "url('./imgs/Rectangle 4 (1).png')"}}>
      <div className="d-flex justify-content-center"> 
        <div className="eyeimsize">
          <img className="eyeimfit" src="./imgs/eye-1-rolling 1.png" alt="" />
        </div>
        <div className="text-center eyepan" style={{ backgroundImage: "url('./imgs/Frame2 1.png')"}}>
          <p className="eyetext">EYE-ROLL UNCLE<br/>10K NFT SALE</p>
          <p className="eyetext-s">STARTS IN</p>
          <div className="eyecal d-flex justify-content-between">
            <div className="eyetext-n">
              <p>{day}</p>
              <p className="eyetext-d">days</p>
            </div>
            <div className="eyetext-n">
              <p>{hour}</p>
              <p className="eyetext-d">hours</p>
            </div>
            <div className="eyetext-n">
              <p>{minute}</p>
              <p className="eyetext-d">minutes</p>
            </div>
            <div className="eyetext-n">
              <p>{second}</p>
              <p className="eyetext-d">seconds</p>
            </div>
          </div>
          <a href="#nft-bg" className={mintInfo.publicsale ? 'mintbtn' : 'mintbtn disabled'}>MINT</a>
        </div>
        <div className="eyedown eyeimsize">
          <img className="eyeimfit" src="./imgs/eye-2-rolling 1.png" alt="" />
        </div>       
      </div>
    </div>
  );
};

export default Nftsale;