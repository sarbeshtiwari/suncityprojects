'use client';

import Link from 'next/link';

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
}

interface Props {
  blog: Blog;
  recentBlogs: Blog[];
}

export default function BlogDetailClient({ blog, recentBlogs }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();

    const suffix =
      day >= 11 && day <= 13
        ? 'th'
        : ['st', 'nd', 'rd'][day % 10 - 1] || 'th';

    return `${month} ${day}${suffix}, ${year}`;
  };

  return (
    <main>
      <div className="emptyBox"></div>

      {/* Breadcrumb */}
      <div className="breadcrumbWrapper">
        <div className="container-lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item">Media</li>
            <li className="breadcrumb-item"><Link href="/blogs">Blogs</Link></li>
            <li className="breadcrumb-item active">{blog.title}</li>
          </ol>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-100 padding bg-white news-section">
        <div className="container-lg">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-8 blogs-archive">
              <div className="inner pe-lg-5">
                <div className="heading">
                  <h1 className="h2 fw-light text-primary">{blog.title}</h1>
                  <div className="d-flex gap-3 small text-muted">
                    <span><i className="fa fa-calendar-day"></i> {formatDate(blog.publishedDate)}</span>
                    <span><i className="fa fa-user"></i> {blog.author}</span>
                    <span><i className="fa fa-tag"></i> {blog.category.replace('-', ' ')}</span>
                  </div>
                </div>

                <figure>
                  <img className="w-100 shadow-sm" src={blog.image} alt={blog.altText} />
                </figure>

                <article className="blog-content-body">
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </article>

                {blog.tags?.length > 0 && (
                  <div className="mt-4">
                    <h6 className="text-muted">Tags</h6>
                    <div className="d-flex gap-2 flex-wrap">
                      {blog.tags.map((tag, i) => (
                        <span key={i} className="badge bg-light text-dark">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="readmore mt-4">
                  <Link href="/blogs" className="button button-sm">Back</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 inside-blogs-aside">
              <div className="blog-asideBox">
                <div className="heading mb-3">
                  <span className="h5 fw-light text-primary">Recent Posts</span>
                </div>

                {recentBlogs.map(blog => (
                  <div key={blog._id} className="recentBlogs-box">
                    <Link href={`/blogs/${blog.slug}`}>
                      <div className="img-fluid">
                        <img src={blog.image} alt={blog.title} />
                      </div>
                      <span>{blog.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
