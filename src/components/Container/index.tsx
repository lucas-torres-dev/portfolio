import "./styles.scss";

const Container = () => {
	return (
		<div className="container">
			<h1>Hello, I'm lvcxs</h1>
			<h2 id="subtitle">On the path to modernization</h2>
			<img className="profile-photo" src="./user.png" alt="Profile Photo" />
			<ul className="link-wrapper">
				<li className="social-list">
					<a
						id="linkedin"
						className="btn-social"
						href="https://www.linkedin.com/in/dev-lucastorres/"
						target="_blank"
						aria-label="Linkedin Profile"
					></a>
				</li>
				<li className="social-list">
					<a
						id="github"
						className="btn-social"
						href="https://github.com/lucas-torres-dev/"
						target="_blank"
						aria-label="Github Profile"
					></a>
				</li>
				<li className="social-list">
					<a
						id="x"
						className="btn-social"
						href="https://x.com/l_v_c_a_x/"
						target="_blank"
						aria-label="x.com Profile"
					></a>
				</li>
			</ul>
			<h3 id="cards-header">My Projects</h3>
			<div className="cards">
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
