import React, {useState} from "react";
import { NavLink } from 'react-router-dom';

import "./nav.css";
import "./../../styles/main.css";
import "./../../styles/reset.css";

import logo from './../../img/LogoImg/logo.png';
import logo2 from './../../img/LogoImg/logo2.png';




const Navbar = () => {

	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsDropDownOpen(true);
	}


	const [activeItem, setActiveItem] = useState(0);

	const handleClick = (e) => {
		setActiveItem(parseInt(e.target.id));
	}


	const handleMouseLeave = () => {
		setTimeout(() => {
		  setIsDropDownOpen(false);
		},300);
	}

    return(
      <div>
			<nav className="nav">
				<div className="nav__container">
					<div className="nav-row">
						<div className={activeItem === 0 ? "logo active" : "logo"}>
						<div className="logo__container">
							<div className="main__logo">
								<NavLink to='/home'><img  src={logo}  width={170} alt="" /></NavLink>
							</div>
							<div className="sub__logo">
								<img src={logo2} alt="" />
							</div>
							</div>
						</div>
						<div className="nav__list">
							<ul className="nav__list-items">
							<li>
								<NavLink to="/cinemas" className=
								{activeItem === 1 ? "nav__list-item__cinema " : "nav__list-item__cinema"} id="1" 
								onClick={() => handleClick}>Кинотеатры
								</NavLink>
							</li>

							<li>
								<NavLink to={'/schedule'}  className=
								{activeItem === 2 ? "nav__list-item__list " : "nav__list-item__list"} id="2"
								 onClick={() => handleClick}

								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								 >Расписание
								</NavLink>
					
								{isDropDownOpen && (
								<ul className="dropdown__menu">
								<li className="sub-nav">
									<NavLink to="/Event">События</NavLink>
								</li>
								</ul>
								)}
								</li>
								
								<li>
								<NavLink to='/history' className=
								{ activeItem === 3 ? "nav__list-item__info " : "nav__list-item__info"}id="3" 
								onClick={() => handleClick}>О "35 мм"
								</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
      </div>
    )
}

export default Navbar;

