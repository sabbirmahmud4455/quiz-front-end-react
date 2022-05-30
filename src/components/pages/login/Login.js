import LoginForm from "./LoginForm"
import LoginIllustration from "./LoginIllustration"
import Styles from "../../../assets/styles/Login.module.css"
import TextInput from "../../TextInput"
import Button from "../../Button"



export default function Login(){
	return(
		<>
			<h1>Login to your account</h1>
			<div class="column">
				<LoginIllustration/>


				<LoginForm className={Styles.login} action="#">

					<TextInput type="email" icon="email" placeholder="Enter Email" />

					<TextInput type="password" icon="lock" placeholder="Enter Email" />

					<Button>
						<span>Submit now</span>
					</Button>

					<div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>

				</LoginForm>

				
			</div>
		</>
	)
}