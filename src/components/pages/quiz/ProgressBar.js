
import Styles from "../../../assets/styles/ProgressBar.module.css"
import Button from "../../Button";
import { Link } from "react-router-dom";

export default function ProgressBar(){
	return(
		<div className={Styles.progressBar}>
          <div className={Styles.backButton}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={Styles.rangeArea}>
            <div className={Styles.tooltip}> 24% Cimplete! </div>
            <div className={Styles.rangeBody}>
              <div className={Styles.progress} style={{ width: "20%" }}></div>
            </div>
          </div>
          <Link to="/result">
            <Button className={Styles.next}>
              <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
          </Link>
        </div>
	)
}