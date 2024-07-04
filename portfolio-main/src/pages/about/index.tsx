import { DefaultLayout } from "layouts/Default";
import { BlogCard } from "components/SchoolCard";
import { PageTitle } from "components/PageTitle";
import { getBlogPostsListData } from "utils/blog";
import { BlogPost } from "types/School";
import { InferGetStaticPropsType } from "next";
import { SEO } from "components/SEO";
import { Container } from "components/Container";
import schoolInfo from "config/schoolinfo.json";

export default function About({
	blogPostsListData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<DefaultLayout>
			<Container maxWidth="max-w-6xl">
				<SEO title="Darsh Patel's Blog" />
				<PageTitle title="About" />	
				<div className="mb-5 text-center"> Education: </div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w mx-auto lg:mb-3 mb-7">
				{schoolInfo.images.map((image, index) => (
					<BlogCard
					key={index}
					blogPost={{
						template: "", // Example: Provide actual values or placeholders
						slug: `school-${index}`,
						title: "Title Placeholder",
						summary: "Summary Placeholder",
						date: new Date().toISOString(),
						seoDescription: "", // Example: Provide actual values or placeholders
						previousBlogPostData: null, // Example: Provide actual values or placeholders
						nextBlogPostData: null, // Example: Provide actual values or placeholders
						images: image,
						GPAS: schoolInfo.GPAS[index],
						Names: schoolInfo.Names[index],
						Courses: schoolInfo.Courses[index],
						Grad: schoolInfo.Grad[index],
					}}
					/>
				))}
				</div>
			
			</Container>
		</DefaultLayout>
	);
}

export const getStaticProps = async () => {
	const blogPostsListData: BlogPost[] = getBlogPostsListData();
	return { props: { blogPostsListData } };
};
