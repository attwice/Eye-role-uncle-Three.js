import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";

const Navbar = () => {
  const [walletAddress, setWallet] = useState(""); 

  useEffect(() => {    
    async function fetchData() {
      const {address} = await getCurrentWalletConnected();
      setWallet(address);    
      addWalletListener(); 
    }
    fetchData();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);          
        } else {
          setWallet("");          
        }
      });
    } else {
         
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();    
    setWallet(walletResponse.address);
  };

  return (
    <div className="navBg">
      <div className="container d-flex justify-content-between aligncenter">        
        <div>
          <div className="navlogo ">
            <a href="/">
              <img src="./imgs/NFT 1 emoji-EYES ONLY 1 1.png" className="logo" alt="eyeroll"/>
            </a>            
          </div>
          <div className="text-center">
            <p className="logotxt">Eye-Roll<b>uncle</b></p>
          </div>
        </div>              
        <div className="navicon d-flex flex-row-reverse">              
          <button className="connetbtn" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? (                    
              "" +
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
              ) : (
                <span>Connect</span>
              )
            }   
          </button>        
          <a href="/#" className="iconbet">
            <FontAwesomeIcon icon={faTwitter} color="#000000"/>
          </a>
          <a href="/#" className="iconbet">
            <FontAwesomeIcon icon={faDiscord} color="#000000"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;