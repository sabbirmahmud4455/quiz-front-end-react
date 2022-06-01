import Styles from '../assets/styles/Account.module.css'
import { Link } from "react-router-dom";

export default function Account(){
	return(
		<div className={Styles.account}>
			<span className="material-icons-outlined" title="Account">
			account_circle
			</span>
			<Link to="/signup">Signup</Link>
			{/*  <span class="material-icons-outlined" title="Logout"> logout </span> */}
		</div>
	)
}