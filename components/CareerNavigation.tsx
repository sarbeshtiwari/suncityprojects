'use client';

import Link from 'next/link';
import React from 'react';

interface CareerNavigationProps {
	activePage: 'why-suncity' | 'life-at-suncity' | 'explore-career';
}

const CareerNavigation: React.FC<CareerNavigationProps> = ({ activePage }) => {
	return (
		<div className="w-100 pt-5">
			<div className="container-lg">
				<div className="row g-4 justify-content-center" data-aos="fade-in">
					<div className="col-sm-3 col btns">
						<Link href="/why-suncity" className={`inner d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${activePage === 'why-suncity' ? 'active' : ''}`}>
							<i className="fa-solid fa-arrow-up-right-dots"></i>
							<small className="text-uppercase ls-1">Why Suncity</small>
						</Link>
					</div>
					<div className="col-sm-3 col btns">
						<Link href="/life-at-suncity" className={`inner d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${activePage === 'life-at-suncity' ? 'active' : ''}`}>
							<i className="fa-solid fa-people-line"></i>
							<small className="text-uppercase ls-1">Life At Suncity</small>
						</Link>
					</div>
					<div className="col-sm-3 col btns">
						<Link href="/explore-career" className={`inner d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${activePage === 'explore-career' ? 'active' : ''}`}>
							<i className="fa-solid fa-clipboard-list"></i>
							<small className="text-uppercase ls-1">Explore Careers</small>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareerNavigation;
