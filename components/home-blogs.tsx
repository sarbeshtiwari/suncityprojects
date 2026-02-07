'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  altText: string;
  // author: string;
  publishedDate: string;
  // category: string;
  // tags: string[];
}

export default function HomeBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.data);
      } else {
        console.error('API returned error:', data.error);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    
    const getOrdinalSuffix = (day: number) => {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    
    return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
  };

  return (
    <>
    <div className="w-100 position-relative padding overflow-hidden bg-white section-blogs" style={{ minHeight: '500px' }}>
        <div className="container-lg">
            <div className="heading mx-auto text-center" data-aos="fade-in">
                <h2 className="h2 fw-light text-primary mb-0">Latest Blogs</h2>
            </div>
        </div>
        {loading ? (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading blogs...</p>
            </div>
        ) : blogs.length === 0 ? (
            <div className="text-center py-5">
                <div className="alert alert-info" role="alert">
                    <h4 className="alert-heading">No Blogs Found</h4>
                    <p>There are no blog posts available at the moment.</p>
                    <p className="small text-muted">Check the console for API response details.</p>
                </div>
            </div>
        ) : (
        <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay
            loop
            breakpoints= {{
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 40
              }
            }}
        >
            {blogs.map(blog => (
                <SwiperSlide key={blog._id}>
                    <div className="card blog-card h-100 rounded-0 border-0">
                        <Link href={`/blogs/${blog.slug}`}>
                            <div className="blog-image position-relative overflow-hidden">
                                <img src={blog.image} alt={blog.altText} className="card-img rounded-0" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center text-golden">
                                        <svg xmlns="http:www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check-icon lucide-calendar-check me-1" style={{width: '1rem', height: '1rem'}}>
                                            <path d="M8 2v4" />
                                            <path d="M16 2v4" />
                                            <rect width="18" height="18" x="3" y="4" rx="2" />
                                            <path d="M3 10h18" />
                                            <path d="m9 16 2 2 4-4" />
                                        </svg>
                                        <span className="small">{formatDate(blog.publishedDate)}</span>
                                    </div>
                                </div>
                                <h6 className="card-title fw-light text-primary mb-3 truncate">{blog.title}</h6>
                                <small className="truncate" style={{'--line-clamp': '3'} as React.CSSProperties}>{blog.excerpt}</small>
                                <div className="viewmore"><span className="button sm">Read More</span></div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        )}
    </div> 
    </>
  );
}