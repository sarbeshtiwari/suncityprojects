'use client'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Amenity {
  _id?: string;
  heading?: string;
  subHeading?: string;
  image?: string;
  caption?: string;
}

interface Props {
  amenities: Array<string | Amenity>;
}

export default function AmenitiesSlider({ amenities }: Props) {
  if (!amenities || !amenities.length) return null;

  return (
    <div className="w-100 padding overflow-hidden position-relative amenities-section">
      <p className="hidden-title" data-position="left">Amenities</p>
      <div className="container-lg">
        <div className="heading mx-auto text-center">
          <h4 className="fw-light text-primary">
            World-class amenities for unmatched comfort and lifestyle.
          </h4>
          <h2 className="title-xxl mb-0">Beyond Expectations</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop
          className="amenity-slider"
        >
          {amenities.map((amenity, index) => {
            const isObject = typeof amenity === 'object' && amenity !== null && 'image' in amenity;
            const amenityData = amenity as Amenity;

            return (
              <SwiperSlide key={index} className="amenBox">
                <figure>
                  <div className="img-fluid">
                    <img
                      src={isObject ? amenityData.image : '/images/icons/amenity-default.svg'}
                      alt={isObject ? amenityData.caption : (amenity as string)}
                    />
                  </div>
                  <figcaption>{isObject ? amenityData.caption : (amenity as string)}</figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
