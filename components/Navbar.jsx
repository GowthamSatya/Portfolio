import {
	RiInstagramFill,
	RiLinkedinBoxFill,
	RiGithubFill,
} from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="fixed flex px-[5rem] py-[2rem] items-center justify-between top-0 w-full">
			<div className="">
				<span>Gowtham Satya</span>
			</div>
			<nav className="flex gap-5">
				<a href="#about">
					<span className="nav_link">About</span>
				</a>
				<a href="#projects">
					<span className="nav_link">Projects</span>
				</a>
				<a href="#contact">
					<span className="nav_link">Contact</span>
				</a>
			</nav>
			<div className="flex gap-3 items-center justify-center">
				<a href="" target="_blank">
					<RiInstagramFill size={28} />
				</a>
				<a href="" target="_blank">
					<RiLinkedinBoxFill size={30} />{" "}
				</a>
				<a href="" target="_blank">
					<RiGithubFill size={30} />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
