import Nav from "./Nav"
import Styles from '../assets/styles/Layout.module.css';


export default function Layout({children}){
	return(
		<>
			<Nav></Nav>

			<main className={Styles.main}>
				<div className={Styles.container}>
					{children}
				</div>
			</main>
		</>
		
	)
}