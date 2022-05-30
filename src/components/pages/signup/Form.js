import Styles from "../../../assets/styles/Form.module.css"

export default function Form({children, className, ...rest}){
	return(
		<form className={`${className} ${Styles.form}`} {...rest} >
			{children}
		</form>
	)
}