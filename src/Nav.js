import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll", handleShow);
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				src="https://res.cloudinary.com/ayotheinspired/image/upload/v1620819859/random-images/Logonetflix_bqzef0.png"
				alt="Netflix Logo"
				className="nav__logo"
			/>

			{/* <div className="nav__now-showing">
				<h3 className="now__showing__title">
					Now Showing: <IoGMdEventSeatlasses />
				</h3>
				<h3 className="now__showing__text">In Progress</h3>
			</div> */}

			{/* <img src="" alt="" className="nav__avatar" /> */}
		</div>
	);
}

export default Nav;
