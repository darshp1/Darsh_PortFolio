import Image from "next/image";
import { TagList } from "./TagList";
import { Project } from "types/project";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: Project }) => {
	const { name, description, tags, githubLink, projectImage, liveLink, demoLink,reportLink } = project;

	const fitImage = {
		width: "500px",
		height: "200px",
		objectFit: "cover",
		borderRadius: "0.75rem"
	};

	return (
		<div className="card bg-base-300 shadow-xl max-w-md p-5 gap-8 border border-gray-700">
			<figure className="w-full h-52 relative ">
				<Image
					src={projectImage}
					alt="Project image"
					width={500}
					height={200}
					className="w-full h-full rounded-xl"
				/>
			</figure>
			<div className="card-body p-0">
				<TagList tagList={tags} />
				<h2 className="card-title mt-6 text-2xl mb-2 font-extrabold">{name}</h2>
				<p className="mb-8 leading-relaxed font-extralight"> {description}</p>
				<div className="grid grid-cols-2 items-center text-center gap-3">
					<Link
						href={githubLink}
						className="btn btn-outline btn-warning"
						rel="noreferrer"
						target="_blank"
					>
						Source Code
					</Link>
					{liveLink && (
						<Link href={liveLink} className="btn btn-info" rel="noreferrer" target="_blank">
							Live
						</Link>
					)}

					{reportLink && (
						<Link href={reportLink} className="btn btn-info" rel="noreferrer" target="_blank">
							Report
						</Link>
					)}

					{demoLink && (
						<Link href={demoLink} className="btn btn-info" rel="noreferrer" target="_blank">
							Project Video 
						</Link>
					)}

				
				</div>
			</div>
		</div>
	);
};
