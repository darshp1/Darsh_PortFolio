import { DefaultLayout } from "layouts/Default";
import { BlogCard } from "components/SchoolCard";
import { PageTitle } from "components/PageTitle";
import { getBlogPostsListData } from "utils/blog";
import { BlogPost } from "types/School";
import { InferGetStaticPropsType } from "next";
import { SEO } from "components/SEO";
import { Container } from "components/Container";

export default function About({
	blogPostsListData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<DefaultLayout>
			<Container maxWidth="max-w-6xl">
				<SEO title="Darsh Patel's Blog" />
				<PageTitle title="About" />	
				<div className="mb-5 text-center"> Education: </div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w mx-auto lg:mb-3 mb-7 ">
					<div>
						{blogPostsListData.map((blogPost, key) => (
							<BlogCard key={key} blogPost={blogPost} />
						))}
					</div>
					<div>
						{blogPostsListData.map((blogPost, key) => (
							<BlogCard key={key} blogPost={blogPost} />
						))}
					</div>
				</div>

				<div className="mt-5 mb-5 text-center"> Work Experience: </div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w mx-auto lg:mb-3 mb-7 ">
					<div>
						{blogPostsListData.map((blogPost, key) => (
							<BlogCard key={key} blogPost={blogPost} />
						))}
					</div>
				</div>

				<div className="mt-5 mb-5 text-center"> Skills: </div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w mx-auto lg:mb-3 mb-7 ">
					<div>
						{blogPostsListData.map((blogPost, key) => (
							<BlogCard key={key} blogPost={blogPost} />
						))}
					</div>
				</div>

				<div className="mt-5 mb-5 text-center"> Certification: </div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w mx-auto lg:mb-3 mb-7 ">
					<div>
						{blogPostsListData.map((blogPost, key) => (
							<BlogCard key={key} blogPost={blogPost} />
						))}
					</div>
				</div>
			</Container>
		</DefaultLayout>
	);
}

export const getStaticProps = async () => {
	const blogPostsListData: BlogPost[] = getBlogPostsListData();
	return { props: { blogPostsListData } };
};
