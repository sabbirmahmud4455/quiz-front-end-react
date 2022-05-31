import Styles from "../../../assets/styles/ResultSummary.module.css"
import ImageSuccess from "../../../assets/images/success.png"

export default function ResultSummary(){
	return(
		<div className={Styles.summary}>
          <div className={Styles.point}>
            {/* <!-- progress bar will be placed here --> */}
            <p className={Styles.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={Styles.badge}>
            <img src={ImageSuccess} alt="Success" />
          </div>
        </div>
	)
}