import Account from "./Account";
import Styles from "../assets/styles/Nav.module.css"
import LogoBg from "../assets/images/logo-bg.png"
import { Link } from "react-router-dom";

export default function Nav(){
	return(

		<nav className={Styles.nav}>
			<ul>
				<li>
					<Link to="/" className={Styles.brand}>
						<img src={LogoBg} alt="Learn with Sumit Logo" />
						<h3>Learn with Sumit</h3>
					</Link>
				</li>
			</ul>
			<Account/>
		</nav>

	);
}