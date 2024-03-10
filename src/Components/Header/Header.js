import React from "react";

import "./header.css";
import './../../styles/main.css';
import './../../styles/reset.css';

import Pushkin from "./../../img/HeaderImg/3pushkina 1.png";
import logo from './../../img/LogoImg/logo.png';
import headerLine from './../../img/icons/Mask group .svg';
import headerLine2 from './../../img/icons/Mask group3.svg';
import headerLine3 from './../../img/icons/Mask group 4.svg';
import headerLine4 from './../../img/icons/Mask group 5.svg';




const Header = () => {
    return(
      <div>
			<header className="header">
				<div className="header__wrapper">
					<div className="header__line">
						<img src={headerLine} alt="" />
					</div>

					<div className="header__sub-line">
						<img src={headerLine2} alt="" />
					</div>
					<div className="header__middle__sub">
						<img src={headerLine3} alt="" />
					</div>
					<div className="header__last__sub">
						<img src={headerLine4} alt="" />
					</div>

					<div className="main__header-img">
						<img className="pushkin__main" src={Pushkin} alt="" />
						<img className="sub__35" src={logo} alt="" />
					</div>
					<div className="header__sub-container">
						<div className="sub__header">
							<div className="header__title">
								<h1>Смотри кино</h1><span>БЕСПЛАТНО</span>
							</div>
							<div className="header__text">
								<p>по пушкинской карте</p>
							</div>
						</div>
					</div>
				</div>
		</header>
      </div>
    )
}

export default Header 