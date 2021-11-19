import React from 'react';


const Roadmap = () => {
  return (
		<div className="siteBg pt-8"  style={{ backgroundImage: "url('./imgs/Rectangle 4.png')"}}>
			<div className="roadtlt">
				<p>ROADMAP</p>
			</div>
			<div className="d-flex justify-content-between roadgap">
				<div className="w50"></div>
				<div className="ellipse">
					<img src="./imgs/Ellipse 1.png" className="logo" alt="eyeroll"/>
				</div>
				<div className="w50">
					<div className="roadtxt">
						<h2>10% Sold</h2>
						<p>
							10 Eye-Roll Uncle NFT will be airdropped to 10 collectors in the community
						</p>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-between roadgap">
				<div className="w50">
					<div className="roadtxt-1">
						<h2>25% Sold</h2>
						<p>
							25 Eye-Roll Uncle NFT will be airdropped to random holders.	
						</p>
					</div>
				</div>
				<div className="ellipse">
					<img src="./imgs/Ellipse 1.png" className="logo" alt="eyeroll"/>
				</div>
				<div className="w50"></div>
			</div>
			<div className="d-flex justify-content-between roadgap">
				<div className="w50"></div>
				<div className="ellipse">
					<img src="./imgs/Ellipse 1.png" className="logo" alt="eyeroll"/>
				</div>
				<div className="w50">
					<div className="roadtxt">
						<h2>50% Sold</h2>
						<p>
							DAO will be established.
						</p>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-between roadgap">
				<div className="w50">
					<div className="roadtxt-1">
						<h2>75% Sold</h2>
						<p>
							1 ETH will be airedropped to a random holder.
						</p>
					</div>
				</div>
				<div className="ellipse">
					<img src="./imgs/Ellipse 1.png" className="logo" alt="eyeroll"/>
				</div>
				<div className="w50"></div>
			</div>
			<div className="d-flex justify-content-between roadgap pb-10">
				<div className="w50"></div>
				<div className="ellipse">
					<img src="./imgs/Ellipse 1.png" className="logo" alt="eyeroll"/>
				</div>
				<div className="w50">
					<div className="roadtxt">
						<h2>100% Sold</h2>
						<p>
							FriedChicken coin will be created for the community.
						</p>
					</div>
				</div>
			</div>
    </div>

  );
};

export default Roadmap;