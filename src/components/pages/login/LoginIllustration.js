import Styles from "../../../assets/styles/Illustration.module.css"
import LoginSvg from "../../../assets/images/login.svg"

export default function LoginIllustration(){
	return(
		<div class={Styles.illustration}>
            <img src={LoginSvg} alt="Login" />
          </div>
	)
}