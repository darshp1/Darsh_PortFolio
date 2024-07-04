export type PaginationBlogPost = {
	slug: string;
	title: string;
};

export type BlogPost = {
	template: string;
	slug: string;
	title: string;
	summary: string;
	date: string;
	seoDescription: string;

	previousBlogPostData: PaginationBlogPost | null;
	nextBlogPostData: PaginationBlogPost | null;
	images: string;
	content?: string;
	GPAS: string[];
	Names: string[];
	Courses: string[];
	Grad: string[];
};

export type jobs = {
	shortDescription: string;
	skills: string[];
	time: string;
	year: string;
}

export type Jobs = jobs[];