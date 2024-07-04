import Link from "next/link";
import { TagList } from "./TagList";
import { jobs } from "types/School";
import { convertDateToReadableFormat } from "utils/common";
import Image from "next/image";

export const JobCard = ({ jobPost }: { jobPost: jobs }) => {
	const {  shortDescription, skills, time, year } = jobPost;
	return (
		// <div className="card md:max-w-full max-w-md bg-base-200 shadow-xl p-4 border border-gray-700 gap-8 mx-auto lg:min-w-[520px] min-w-full">
		// 	<div className="flex justify-center items-center">
		
		// 			<Image 
		// 				src={"/" + images}
		// 				alt="College Logo"
		// 				width={150}
		// 				height={150}
		// 				priority={true} 
		// 				className="rounded-xl"
		// 			/>
				
		
			
		// 	</div>
			
		// 	<div className="flex flex-col items-center">
	
		// 		{Names.map((name, index) => (
		// 			<span key={index} className="block lg:text-3xl">{name}</span>
		// 		))}

		// 		{Courses.map((name, index) => (
		// 			<span key={index} className="block lg:text-xl text-xs">{name}</span>
		// 		))}
		// 	</div>

		// 	<div className="grid lg:grid-cols-2 lg:gap-4 ">
		// 		<span className="flex flex-col w-full items-center">
			
		// 				<span>
		// 					<strong className="lg:text-base text-sm">GPA: </strong>
		// 					{GPAS.map((gpa, index) => (
		// 						<span key={index} className="lg:text-base text-sm">{gpa} </span>
		// 					))}
		// 				</span>
					
		
				
		// 		</span>
		// 		<span className="flex flex-col w-full items-center">
			
		// 			<span>
		// 			<strong className="lg:text-base text-sm">Graduation: </strong>
		// 				{Grad.map((gpa, index) => (
		// 					<span key={index} className="lg:text-base text-sm">{gpa}</span>
		// 				))}
		// 			</span>
				
		// 		</span>
		// 	</div>
			
		// </div>
        <div></div>
	);
};
