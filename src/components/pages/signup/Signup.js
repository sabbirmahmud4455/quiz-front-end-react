import Styles from "../../../assets/styles/Signup.module.css"
import Form from "./Form"
import Illustration from "./Illustration"
import TextInput from "../../TextInput"
import Checkbox from "../../Checkbox"
import Button from "../../Button"
import {Link} from "react-router-dom"

export default function Signup(){
	return (
		<>
			<h1>Create an account</h1>
			<div className="column">
				<Illustration></Illustration>


				<Form className={`${Styles.signup}`} action="#">
					<TextInput type="text" placeholder="Enter Name" icon="person" />

					<TextInput type="email" placeholder="Enter Email" icon="email" />
					
					<TextInput type="password" placeholder="Enter password" icon="password" />
					
					<TextInput type="password" placeholder="Confirm password" icon="password" />
					
					<Checkbox type="checkbox" value="hello" text="I agree to the Terms &amp; Conditions" />

					<Button>
						<span>Submit Now</span>
					</Button>

					<div class="info">
					Already have an account? <Link to="/login">Login</Link> instead.
					</div>

				</Form>

			</div>
		</>
	)
}