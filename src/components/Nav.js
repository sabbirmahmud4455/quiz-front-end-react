import Account from "./Account";
import Styles from "../assets/styles/Nav.module.css"
import LogoBg from "../assets/images/logo-bg.png"

export default function Nav(){
	return(

		<nav className={Styles.nav}>
			<ul>
				<li>
					<a href="index.html" className={Styles.brand}>
						<img src={LogoBg} alt="Learn with Sumit Logo" />
						<h3>Learn with Sumit</h3>
					</a>
				</li>
			</ul>
			<Account/>
		</nav>

	);
}