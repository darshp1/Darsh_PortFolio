import React, { useState } from 'react';
import { DefaultLayout } from 'layouts/Default';
import { BlogCard } from 'components/SchoolCard';
import { PageTitle } from 'components/PageTitle';
import { getBlogPostsListData } from 'utils/blog';
import { BlogPost } from 'types/School';
import { InferGetStaticPropsType } from 'next';
import { SEO } from 'components/SEO';
import { Container } from 'components/Container';
import schoolInfo from 'config/schoolinfo.json';
import jobInfo from 'config/job_info.json';
import SimpleModal from './SimpleModal'; 
import { Jobs } from "types/School";

export default function About({
  blogPostsListData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close
  const [selectedModalIndex, setSelectedModalIndex] = useState<number | undefined>(undefined); // State to store selected modal index
  
  const openModal = (index: number) => {
    setSelectedModalIndex(index); // Set selected index
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedModalIndex(undefined); // Clear selected index
  };

  const animationSequence = jobInfo.Time.flatMap((time, index) => [
    {
      shortDescription: jobInfo.shortDescription[index],
      skills: jobInfo.skills[index],
      time: time,
      year: jobInfo.Year[index],
    },
    1000,
  ]);
  
  return (
    <DefaultLayout>
      <Container maxWidth="max-w-6xl">
        <SEO title="Darsh Patel's Blog" />
        <PageTitle title="About" />
        <div className="mb-5 text-center"> Education: </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w mx-auto lg:mb-3 mb-7">
          {schoolInfo.images.map((image, index) => (
            <div key={index} onClick={() => openModal(index)} className="cursor-pointer">
              <BlogCard
                blogPost={{
                  template: '', // Example: Provide actual values or placeholders
                  slug: `school-${index}`,
                  title: 'Title Placeholder',
                  summary: 'Summary Placeholder',
                  date: new Date().toISOString(),
                  seoDescription: '', // Example: Provide actual values or placeholders
                  previousBlogPostData: null, // Example: Provide actual values or placeholders
                  nextBlogPostData: null, // Example: Provide actual values or placeholders
                  images: image,
                  GPAS: schoolInfo.GPAS[index],
                  Names: schoolInfo.Names[index],
                  Courses: schoolInfo.Courses[index],
                  Grad: schoolInfo.Grad[index],
                }}
              />
            </div>
          ))}
        </div>
        {/* Render SimpleModal component conditionally */}
        {isModalOpen && selectedModalIndex !== undefined && (
          <SimpleModal onClose={closeModal} isOpen={isModalOpen} index={selectedModalIndex} />
        )}


		<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w mx-auto lg:mb-3 mb-7">
		{animationSequence.map((item, index) =>
            typeof item === 'object' ? (
              <span key={index}>
                <strong>Description:</strong> {item.shortDescription}<br />
                <strong>Skills:</strong> {item.skills.join(', ')}<br />
                <strong>Time:</strong> {item.time}<br />
                <strong>Year:</strong> {item.year}
              </span>
            ) : null
          )}
        
        </div>
      </Container>
    </DefaultLayout>
  );
}

export const getStaticProps = async () => {
  const blogPostsListData: BlogPost[] = getBlogPostsListData();
  return { props: { blogPostsListData } };
};

// Type definitions
export type jobs = {
  shortDescription: string;
  skills: string[];
  time: string;
  year: string;
}
