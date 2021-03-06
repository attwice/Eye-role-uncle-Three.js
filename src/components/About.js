import React from 'react';

const About = () => {
  return (
    <div className="siteBg">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="abouttxt">
            <h2>ABOUT <br />EYE-ROLL UNCLE</h2>
            <p>
              The Eye-Roll Uncle is a collection of 10000 uncles who live in different parallel world. They have different personalities and outlook but all of them now reunite and get chill in metaverse.
            </p>
          </div>
          <div>
            <img className="uncleimg" src="./imgs/UncleGif.gif" alt=""></img>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="collectxt">
            <p>THE COLLECTION</p>
          </div>
          <div className="btnmt">
            <a href="https://opensea.io/collection/frogverse" className="iconbet">
              <button className="showbtn">SHOW MORE</button>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <img className="uncleimg" src="./imgs/Uncle1.png" alt=""></img>
          </div>
          <div>
            <img className="uncleimg" src="./imgs/Uncle2.png" alt=""></img>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <img className="uncleimg" src="./imgs/Uncle3.png" alt=""></img>
          </div>
          <div>
            <img className="uncleimg" src="./imgs/Uncle4.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;