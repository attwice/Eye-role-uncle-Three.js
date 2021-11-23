import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getCurrentWalletConnected } from '../utils/interact';

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../contract-abi.json");
const contractAddress = "0x4Cac6E69914AFbA5f85640e966A7CF4ea9cdb95C";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contract = new web3.eth.Contract(contractABI, contractAddress); 

const mintNFT = async(amount, price) => {  
  const {address} = await getCurrentWalletConnected();
  if (address === "") {
    return {
      success: false, 
      status: "❗Please make sure wallet connected.",           
    }
  }  
  else {      
    contract.methods.mint(amount).send({from: address, gasPrice: 8000000000, gas: 160000*amount, value: (amount * price)})
    .on("confirmation", function () {      
    })
    .on('error', async function (error, receipt) {
      console.log(error);      
    }); 

    return {
      status: "",
    }   
    
  }
}  

const Mint = () => {
  const mintInfo = useSelector(state => state.mint);
  const [status, setStatus] = useState("");
  const [tokenNumber, setTokenNumber] = useState(1);
  const publicsale_price = 30000000000000000;
  const price = 0.03;

  const [supply, setSupply] = useState(0);

  const decreaseTokenNumber = () => {
    if (tokenNumber === 1) {
      return;
    }
    setTokenNumber(tokenNumber - 1);
  }

  const onMintHandle = () => {       
    setStatus("Mint not allowed!");
  };

  const onMintPressed = async () => {          
    const { status } = await mintNFT(tokenNumber, publicsale_price); 
      setStatus(status);         
  };

  useEffect(() => {    
    async function fetchData() {
      // const {address} = await getCurrentWalletConnected();      
      contract.methods.totalSupply().call().then((_supply) => {        
        setSupply(_supply);
      }).catch((err) => console.log(err))      
    }
    fetchData();
  }, []);

  return (
    <div id="nft-bg" className="nftBg pt-20" style={{ backgroundImage: "url('./imgs/Rectangle 4 (2).png')"}}>
      <div className="minttxt">
        <p>EYE-Roll UNCLE SERIES</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="mintbox">
          <div className="amount">
            <div className="d-flex justify-content-between">
              <p className="amtxt">Amount</p>
              <div className="d-flex justify-content-between">
                <button className="calbtn calbtn-minus" onClick={decreaseTokenNumber}>-</button>
                <div className="display d-flex justify-content-center items-center">
                  <p>{tokenNumber}</p>
                </div>
                <button className="calbtn calbtn-plus" onClick={() => setTokenNumber(tokenNumber + 1)}>+</button>
              </div>
            </div>
          </div>
          <div className="subtotal">
            <div className="d-flex justify-content-between aligncenter">
              <p className="amtxt">SUB-TOTAL</p>
              <div className="d-flex justify-content-between">									
                <div className="display1 d-flex justify-content-center items-center">
                  <p>{tokenNumber * price + "ETH"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ratiotxt"><p>{supply}/10000</p></div>
          {status ? <div className="text-center ratiotxt text-white">{status}</div> 
            : <div></div>
          }
          {(!mintInfo.publicsale) ? <button className="minbtn" onClick={onMintHandle}>MINT NOW</button> 
            : [(supply >= 10000)? <button className="minbtn mint-disabled text-uppercase" disabled>Sold out</button> : <button className="minbtn mint-active" onClick={onMintPressed}>MINT NOW</button>]
          }			
          <div className="amtxt"> MINT LIMIT is 15 PER TRANSACTION</div>
          <div className="d-flex justify-content-center"><p className="black-bar"></p></div>
		    </div>
      </div>
    </div>
  );
};

export default Mint;