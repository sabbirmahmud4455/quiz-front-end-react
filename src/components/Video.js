import Styles from "../assets/styles/Video.module.css"
import { Link } from "react-router-dom";
import Image3 from "../assets/images/3.jpg"

export default function Video(){
	return(
		<Link to="/quiz">
            <div className={Styles.video}>
              <img src={Image3} alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className={Styles.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
        </Link>
	)
}