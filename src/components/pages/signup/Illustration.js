import Styles from "../../../assets/styles/Illustration.module.css"
import SignupSvg from "../../../assets/images/signup.svg"

export default function Illustration(){
	return (
		<div className={Styles.illustration}>
			<img src={SignupSvg} alt="Signup" />
		</div>
	)
}