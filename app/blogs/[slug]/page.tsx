import { notFound } from 'next/navigation';
import BlogDetailClient from './client';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  altText: string;
  author: string;
  publishedDate: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const res1 = await fetch(`https://suncityprojects.com/api/blogs/${slug}`, {
    cache: 'no-store',
  });
  const blog = await res1.json();

  if (!blog) {
    notFound();
  }

  const res2 = await fetch(`https://suncityprojects.com/api/blogs`, {
    cache: 'no-store',
  });

  const recentBlogs = await res2.json();
  const recent = recentBlogs.data.filter((b: Blog) => b.slug !== slug).slice(0, 5);

  return (
    <BlogDetailClient blog={blog.data} recentBlogs={recent} />
  );
}
