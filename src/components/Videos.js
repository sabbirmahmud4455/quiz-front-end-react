import Styles from "../assets/styles/Videos.module.css"
import Video from "./Video"
import {Link} from "react-router-dom"

export default function Videos(){
	return (
		<div className={Styles.videos}>
			<Link to="/quiz">
				<Video/>
			</Link>
			<Link to="/quiz">
				<Video/>
			</Link>
			<Link to="/quiz">
				<Video/>
			</Link>
			<Link to="/quiz">
				<Video/>
			</Link>
			<Link to="/quiz">
				<Video/>
			</Link>
			<Link to="/quiz">
				<Video/>
			</Link>
			<Link to="/quiz">
				<Video/>
			</Link>
			<Link to="/quiz">
				<Video/>
			</Link>
        </div>
	)
}