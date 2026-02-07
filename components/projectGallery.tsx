'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface GalleryImage {
  original: string;
  desktop?: string;
  altText?: string;
}

interface Props {
  galleryImages: GalleryImage[];
  projectName: string;
  projectLogo: string;
}

export default function ProjectGallery({
  galleryImages,
  projectName,
  projectLogo,
}: Props) {
  if (!galleryImages?.length) return null;

  return (
    <div className="gallery-slider position-relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        loop
        className="swiper"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <div className="galBox">
              <a
                href={image.original}
                data-magnify="magnify"
                data-group="gal"
                data-caption={image.altText || projectName}
                className="inner"
              >
                <img
                  src={image.desktop || image.original}
                  alt={image.altText || projectName}
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Center overlay controls */}
      <div className="gallery-logo bg-white d-flex align-items-center justify-content-center col-md-4 position-absolute start-50 top-50 h-100 translate-middle pointer-events-none">
        <div className="swiper-button-prev pointer-events-auto"></div>
        <div className="swiper-button-next pointer-events-auto"></div>
        <div className="swiper-pagination pointer-events-auto"></div>

        <div className="project-logo mx-auto d-none d-md-block mb-0">
          <img src={projectLogo} alt={projectName} />
        </div>
      </div>
    </div>
  );
}
