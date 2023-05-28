import HomePage from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<main className="main_container">
			<div className="child">
				<HomePage />
			</div>
			<div className="child">
				<About />
			</div>
			<div id="projects" className="child">
				<Projects />
			</div>
			<div id="contact" className="child">
				<Contact />
			</div>
		</main>
	);
}
