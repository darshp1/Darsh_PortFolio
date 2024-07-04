import { Container } from "components/Container";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";
import personalInfo from "../config/personal_info.json";
import React from "react"
import Tilt from "react-parallax-tilt";

export const HomeSection = () => {
	const animationSequence = personalInfo.occupations.flatMap((data) => [data, 1000]);

	return (
		<section className="relative pb-36">
			<Container maxWidth="max-w-6xl">
				<div className="hero min-h-[98vh]">
					<div className="hero-content flex flex-col lg:flex-row-reverse  px-0">
						{/* 					
					<Image
						src="/assets/home_page_coder.svg"
						className="hidden lg:block" // Hidden on small screens, visible on large screens
						alt="Programmer"
						width={480}
						height={100}
					/> */}
						<Tilt
							tiltMaxAngleX={25}
							tiltMaxAngleY={25}
							scale={1.05}
							className="hidden lg:flex justify-center items-center"

						>
							<Image
								src="/assets/home_page_coder.svg"
								alt="Programmer"
								width={650}
								height={400}
							/>
						</Tilt>
						<div className="w-full">
							<div className="space-y-5">
								<span className="text-4xl bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">
									Hi, I&lsquo;m
								</span>
								<div className="text-5xl md:text-6xl font-bold">{personalInfo.name}</div>

								<TypeAnimation
									sequence={animationSequence}
									speed={45}
									className="text-lg md:text-3xl bg-gradient-to-b from-yellow-400 to-blue-400 text-transparent bg-clip-text"
									wrapper="h2"
									repeat={Infinity}
								/>
							</div>
							<Tilt
								tiltMaxAngleX={25}
								tiltMaxAngleY={25}
								scale={1.05}
								className="lg:hidden block mx-auto mb-10 mt-10 lg:mb-0 lg:mt-0" // Visible on small screens, centered

							>
								<Image
									src="/assets/home_page_coder.svg"

									alt="Programmer"
									width={300}
									height={50}
								/>
							</Tilt>
							<p className="py-6 prose">{personalInfo.shortDescription}</p>
							<div>
								<Link
									href={"mailto:" + personalInfo.emailId}
									target="_blank"
									rel="noreferrer"
									className="btn btn-outline btn-info btn-md mb-2 mr-2 lg:mb-0" >

									Hire me
								</Link>
								<Link
									href="https://drive.google.com/file/d/1azycqdlpkP81_7j8ApKP_-lg9DNDu3dI/view?usp=sharing"
									download="Darsh_Patel_Resume.pdf"
									target="_blank"
									rel="noreferrer"
									className="btn btn-outline btn-warning btn-md mt-2 ml-2 lg:mt-0 " >
									my resume
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="relative block h-[150px] md:h-[200px] w-[calc(100%+1.3px)]"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="fill-base-300"
					></path>
				</svg>
			</div>
		</section>
	);
};
