'use client';

import Link from "next/link";

interface MediaNavigationProps {
	activePage: 'in-the-news' | 'press-release' | 'events' | 'awards' | 'blogs';
}

export default function MediaNavigation({ activePage }: MediaNavigationProps) {
	return (
		<div className="w-100 pt-5">
			<div className="container-lg">
				<div className="page-sub-menu">
					<div className="row g-4 justify-content-center">
						<div className="col btns">
							<Link href="/in-the-news" className={`inner d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${activePage === 'in-the-news' ? 'active' : ''}`}>
								<i className="fa-solid fa-newspaper"></i>
								<small className="text-uppercase ls-1">In the News</small>
							</Link>
						</div>
						<div className="col btns">
							<Link href="/press-release" className={`inner d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${activePage === 'press-release' ? 'active' : ''}`}>
								<i className="fa-solid fa-rectangle-ad"></i>
								<small className="text-uppercase ls-1">Press Release</small>
							</Link>
						</div>
						<div className="col btns">
							<Link href="/events" className={`inner d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${activePage === 'events' ? 'active' : ''}`}>
								<i className="fa-solid fa-calendar-check"></i>
								<small className="text-uppercase ls-1">Events</small>
							</Link>
						</div>
						<div className="col btns">
							<Link href="/awards" className={`inner d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${activePage === 'awards' ? 'active' : ''}`}>
								<i className="fa-solid fa-trophy"></i>
								<small className="text-uppercase ls-1">Awards</small>
							</Link>
						</div>
						<div className="col btns">
							<Link href="/blogs" className={`inner d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${activePage === 'blogs' ? 'active' : ''}`}>
								<i className="fa-solid fa-blog"></i>
								<small className="text-uppercase ls-1">Blogs</small>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
