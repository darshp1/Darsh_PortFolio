import { Container } from "components/Container";
import Image from "next/image";
import personalInfo from "../config/personal_info.json";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export const AboutSection = () => {
	return (
		<section className="bg-base-300 relative pb-64 pt-36">
			<Container maxWidth="max-w-6xl">
				<div className="place-items-start hero ">
					<div className="hero-content gap-20 flex-col-reverse lg:flex-row-reverse px-0">
						<div className="avatar lg:block mx-auto">
							<div className="rounded-xl max-w-xs lg:max-w-xl">
								<Image src="/assets/my_picture.jpeg" alt="Darsh Patel" width={450} height={100} />
							</div>
						</div>
						<div className="w-full mb-6">
							<div className="flex space-x-4">
								<h2 className="text-4xl font-bold mb-6 whitespace-nowrap">About me</h2>
								<div className="divider w-full" />
							</div>
			
							
							<div className="prose max-w-full">
								{personalInfo.aboutMe.split("\n").map((data, index) => (
									<p key={index}>{data}</p>
								))}
							<Tabs>
								<TabList>
									<Tab>Skills</Tab>
									<Tab>Education</Tab>
									<Tab>Certification</Tab>
								</TabList>

								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<TabPanel>
										Here are some of the technologies I’ve worked with:
											<ul className="grid grid-cols-2 marker:text-base marker:content-['▹'] marker:text-accent marker:pr-8 pl-2 text-sm">
												{personalInfo.skills.map((skill, index) => (
													<li key={index} className="pl-4">
														{skill}
													</li>
												))}
											</ul>
									</TabPanel>
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<TabPanel>
										<ul className="grid grid-cols-1 marker:text-base marker:content-['▹'] marker:text-accent marker:pr-8 pl-2 text-sm">
											{personalInfo.university.map((school, index) => (
												<li key={index} className="pl-4 cols-2">
													{school}
												</li>
											))}
										</ul>
									</TabPanel>
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<TabPanel>
										<ul className="grid lg:grid-cols-2 marker:text-base marker:content-['▹'] marker:text-accent marker:pr-8 pl-2 text-sm">
											<li  className="pl-4 cols-2 mr-2">
												<a href="https://www.coursera.org/account/accomplishments/certificate/QVE4VQ8HWXZB" target="_blank"> Fake News Detection with Machine Learning </a>
											</li>
											<li  className="pl-4 cols-2">
												<a href="https://www.udemy.com/certificate/UC-8e82b66e-1654-4be3-83ee-f9852a4cc14a/" target="_blank"> MERN Stack on Azure using CI/CD Pipeline </a>
											</li>
											<li  className="pl-4 cols-2 mr-2">
												<a href="https://www.udemy.com/certificate/UC-b2cd619b-9310-4951-b479-b122eb91f21e/" target="_blank"> NodeJS with express, socket io and MongoDB </a>
											</li>
											<li  className="pl-4 cols-2">
												<a href="https://www.coursera.org/account/accomplishments/certificate/RYXV7R4SUDKA" target="_blank">  Building Web Applications in PHP </a>
											</li>
											<li  className="pl-4 cols-2 mr-2">
												<a href="https://www.coursera.org/account/accomplishments/certificate/NYCFE4S6K7SG" target="_blank">  Blockchain Basics </a>
											</li>
											
											<li  className="pl-4 cols-2">
												<a href="https://www.coursera.org/account/accomplishments/certificate/32JY3CGKRQSJ" target="_blank"> Introduction to Blockchain Technologies </a>
											</li>
											<li  className="pl-4 cols-2 mr-2" >
												<a href="https://www.udemy.com/certificate/UC-5889f1cf-6547-4970-9edf-31c43d81d7f3/" target="_blank"> Machine learning & AI with 3 Projects </a>
											</li> 
											<li  className="pl-4 cols-2">
												<a href="https://www.coursera.org/account/accomplishments/certificate/KMSXXBZ2D7DH" target="_blank">  Python Data Structures </a>
											</li>
											<li  className="pl-4 cols-2">
												<a href="https://www.udemy.com/certificate/UC-5ac3520e-473c-4e17-b4b8-177b20ca8e6c/" target="_blank"> JQuery </a>
											</li>
										</ul>
									</TabPanel>
								</motion.div>
							</Tabs>
								
							</div>
							
						</div>
					</div>
				</div>
			</Container>
			<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="relative block h-[150px] md:h-[200px] w-[calc(100%+1.3px)]"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="fill-bgc"
					></path>
				</svg>
			</div>
		</section>
	);
};
