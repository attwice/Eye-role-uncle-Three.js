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
//stickey
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 86) {
      setSticky(true);
    } else if (window.scrollY < 85) {
      setSticky(false);
    }
  }  

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <div className="navBg">
        <div className="container d-flex justify-content-between aligncenter">        
          <div>
            <div className="navlogo ">
              <a href="https://opensea.io" target="_blank">
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
            <a href="https://twitter.com/frogzverse" className="iconbet">
              <FontAwesomeIcon icon={faTwitter} color="#000000"/>
            </a>
            <a href="https://discord.com/invite/frogverse" className="iconbet">
              <FontAwesomeIcon icon={faDiscord} color="#000000"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;