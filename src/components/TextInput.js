import Styles from "../assets/styles/TextInput.module.css"

export default function TextInput({icon, ...rest}){
	return (
		<div className={Styles.textInput}>
			<input {...rest} />
			<span className="material-icons-outlined"> {icon} </span>
		</div>
	)
}