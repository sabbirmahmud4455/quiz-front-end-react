
import Styles from "../../../assets/styles/MiniPlayer.module.css"
import Image3 from "../../../assets/images/3.jpg"

export default function MiniPlayer(){
	return(
		<div className={`${Styles.miniPlayer} ${Styles.floatingBtn}`}>
          <span className={`${Styles.open} material-icons-outlined`}> play_circle_filled </span>
          <span className={`${Styles.close} material-icons-outlined`}> close </span>
          <img src={Image3} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
	)
}