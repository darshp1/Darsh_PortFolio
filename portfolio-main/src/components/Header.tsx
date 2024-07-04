import { BsFillMoonStarsFill } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLine } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { BiNotepad } from "react-icons/bi";
import { BsFillLightbulbFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import Link from "next/link";
import { PageSocial } from "./PageSocial";
import Image from "next/image";
import personalInfo from "../config/personal_info.json";

const DarkModeToggleButton = () => {
	return <BsFillMoonStarsFill className="w-6 h-6 text-primary" />;
};

const drawerStyle = {
	backgroundColor: '#312f30',
};

export const Sidebar = () => {
	return (
		<div className="drawer-side">
			<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
			<div className="pt-8 w-60 bg-base-100 text-base-content menu ">
			
				<ul>
					{navLinks.map((data, index) => (
						<li key={index}>
							<Link href={data.link} className="px-6">
								{data.icon}
								{data.name}
							</Link>
						</li>
					))}
				</ul>
				<label htmlFor="my-drawer-3" className="absolute right-2 top-2 cursor-pointer">
					<RiCloseLine className="w-5 h-5" />
				</label>
				<div className="absolute bottom-0 w-full flex justify-center py-4 bg-base-200">
					<PageSocial />
				</div>
			</div>
		</div>
	);
};

export const Navbar = () => {
	return (
		<div className="sticky top-0 z-30 flex h-16 w-full justify-center text-base-content">
			<div className="w-full navbar shadow lg:px-12 px-4 ustom-drawer-bg" style={drawerStyle}>
			
				<div className="flex-1 text-primary font-bold text-2xl">
					<Link href="/">
						<Image src={"/" + personalInfo.logoImage} height={100} width={60} alt="Logo Image"  priority={true} />
					</Link>
				</div>
				<div className="flex-none hidden lg:block font-bold">
					<ul className="menu menu-horizontal">
						{navLinks.map((data, index) => (
							<li key={index}>
								<Link href={data.link}>{data.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex-none lg:hidden">
					<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
						<TfiMenu className="w-6 h-6" />
					</label>
				</div>
			</div>
		</div>
	);
};

type NavLinksArrayType = Array<{
	name: string;
	link: string;
	icon: JSX.Element;
}>;

const navLinks: NavLinksArrayType = [
	{
		name: "Home",
		link: "/",
		icon: <ImHome />,
	},
	{
		name: "About",
		link: "/about",
		icon: <MdSchool />,
	},
	
	{
		name: "Projects",
		link: "/projects",
		icon: <BsFillLightbulbFill />,
	},
];
