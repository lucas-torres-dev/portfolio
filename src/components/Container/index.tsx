import { Link } from "react-router-dom";
import "./styles.scss";

const Container = () => {
	return (
		<div>
			<h1>LVCXS</h1>
			<h2>On the path to modernization</h2>
			<img src="#" alt="Profile Photo" />
			<ul>
				<li>
					<Link
						to="https://www.linkedin.com/in/dev-lucastorres/"
						target="_blank"
						aria-label="Linkedin Profile"
					></Link>
				</li>
				<li>
					<Link
						to="https://github.com/lucas-torres-dev/"
						target="_blank"
						aria-label="Github Profile"
					></Link>
				</li>
				<li>
					<Link
						to="https://x.com/l_v_c_a_x/"
						target="_blank"
						aria-label="x.com Profile"
					></Link>
				</li>
			</ul>
			<h3>My Projects</h3>
			<div>
				<div>
					<h4>Project One</h4>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div>
					<h4>Project Two</h4>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div>
					<h4>Project Three</h4>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div>
					<h4>Project Four</h4>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>
	);
};

export default Container;
