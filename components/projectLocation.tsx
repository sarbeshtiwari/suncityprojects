'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import { Navigation } from 'swiper/modules';

const LocationSection = ({ project }: any) => {
  return (
    <div className="w-100 padding overflow-hidden position-relative location-section bg-light">
      <p className="hidden-title" data-position="right">Location</p>
      <div className="container-lg">
        <div className="heading mx-auto text-center">
          <h4 className="fw-light text-primary">Locations that promise value today and tomorrow.</h4>
          <h2 className="title-xxl mb-0">At the Heart of Growth</h2>
        </div>

        <div className="mapBox mb-4 position-relative">
          <div className="mapIcon">
            <img src={project.projectLogo} alt={project.projectName} />
          </div>

          {project.locationType === 'iframe' && project.locationIframe ? (
            <iframe
              src={project.locationIframe}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : project.locationImage ? (
            <img
              src={project.locationImage}
              alt={project.locationAltText || project.projectName}
              className="w-100"
              style={{ height: '450px', objectFit: 'cover' }}
            />
          ) : null}
        </div>

        {project.nearbyLocations && project.nearbyLocations.length > 0 && (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="connectivity-slider"
          >
            {project.nearbyLocations.map((location: { image: string | Blob | undefined; altText: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; distance: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; unit: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
              <SwiperSlide key={index} className="location-icon">
                <div className="in">
                  <div className="img-fluid p-0">
                    <img src={location.image} alt={location.altText || location.name} />
                  </div>
                  <div className="location-text">
                    <p>
                      <span className="h4">{location.distance}</span>
                      <small>{location.unit} <br />Drive From</small>
                    </p>
                    <p className="mb-0">{location.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev bg-primary start-0"></div>
            <div className="swiper-button-next bg-primary end-0"></div>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default LocationSection;
