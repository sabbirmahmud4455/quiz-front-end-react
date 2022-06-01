
import Styles from "../assets/styles/Answers.module.css"
import CheckBox from "./Checkbox"

export default function Answers(){
	return(
		<div className={Styles.answers}>

          <div className={Styles.answer}>
            <CheckBox type="checkbox" text="A New Hope 1" />
          </div>
          

          {/* <!-- Option 4 --> */}
          <label className={`${Styles.answer} ${Styles.wrong}`} for="option4">
            <input type="checkbox" id="option4" />
            A New Hope 2
          </label>


          {/* <!-- Option 7 --> */}
          <label className={`${Styles.answer} ${Styles.correct}`} for="option7">
            <input type="checkbox" id="option7" />
            A New Hope 3
          </label>

          {/* <!-- Option 10 --> */}
          <label className={Styles.answer} for="option10">
            <input type="checkbox" id="option10" />
            A New Hope 4
          </label>
        </div>
	)
}