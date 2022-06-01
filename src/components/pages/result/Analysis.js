import Styles from "../../../assets/styles/ResultAnalysis.module.css"
import ResultQuestion from "./Question"


export default function ResultAnalysis(){
	return(
		<div className={Styles.analysis}>
          <h1>Question Analysis</h1>
          <h4>You answerd 5 out of 10 questions correctly</h4>

          <ResultQuestion/>

        </div>
	)
}