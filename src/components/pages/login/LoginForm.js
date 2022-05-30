import Styles from "../../../assets/styles/Form.module.css"


export default function LoginForm({className, children, ...rest}){
	return (

		<form className={`${className} ${Styles.form}`} {...rest}>
			{children}
		</form>
	)
}