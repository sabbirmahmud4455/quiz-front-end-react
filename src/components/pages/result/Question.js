import Styles from '../../../assets/styles/ResultQuestion.module.css';
import Answers from '../../Answers';

export default function ResultQuestion(){
	return(
		<div className={Styles.question}>
            <div className={Styles.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <Answers/>

          </div>
	)
}