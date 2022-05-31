import Styles from "../assets/styles/Button.module.css"

export default function Button({className ,children}){
	return(
		<div className={`${className} ${Styles.button}`}>
			{children}
		</div>
	)
}