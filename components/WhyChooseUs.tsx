"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function WhyChooseUs() {
	useEffect(() => {
		const items = Array.from(document.querySelectorAll<HTMLLIElement>('.whyChoose-list-item'));
		const videos = Array.from(document.querySelectorAll<HTMLElement>('.whyChoose-video'));

		const handleEnter = (el: Element | null) => {
			if (!el) return;
			document.querySelector('.whyChoose-list-item.active')?.classList.remove('active');
			el.classList.add('active');
			const target = el.getAttribute('data-target');
			videos.forEach(v => v.style.display = 'none');
			const video = document.getElementById(`whyChoose-video-${target}`);
			if (video) video.style.display = 'block';
			try { (window as any).AOS && (window as any).AOS.refresh && (window as any).AOS.refresh(); } catch {}
		};

		const listeners: Array<{ el: HTMLLIElement; fn: (e: Event) => void }> = [];
		items.forEach(item => {
			const onEnter = () => handleEnter(item);
			item.addEventListener('mouseenter', onEnter);
			listeners.push({ el: item, fn: onEnter });
		});

		// Initial state
		const initial = document.querySelector('.whyChoose-list-item[data-target="sustainability"]') as Element | null;
		handleEnter(initial || items[0] || null);

		return () => {
			listeners.forEach(({ el, fn }) => {
				el.removeEventListener('mouseenter', fn);
			});
		};
	}, []);

	return (
		<div className="w-100 overflow-hidden position-relative section-whyChooseUs">
			<div className="bgs">
				<video src="/videos/sustainability2.mp4" autoPlay loop muted poster="/images/sustainablity-video-th.webp" id="whyChoose-video-sustainability" className="whyChoose-video h-100 object-cover active"></video>
				<video src="/videos/technology.mp4" autoPlay loop muted poster="/images/technology-video-th.webp" id="whyChoose-video-technology" className="whyChoose-video h-100 object-cover"></video>
				<video src="/videos/community.mp4" autoPlay loop muted poster="/images/community-video-th.webp" id="whyChoose-video-community" className="whyChoose-video h-100 object-cover"></video>
			</div>
			<div className="container-lg h-100">
				<ul className="list-unstyled whyChoose-list d-flex flex-wrap h-100">
					<li className="whyChoose-list-item active position-relative bg-image" data-target="sustainability" style={{ backgroundImage: 'url(/images/sustainability.jpg)' }}>
						<div className="inner h-100">
							<article className="details">
								<h2 className="mb-3 mb-md-4 fw-lighter text-white">Sustainability</h2>
								<div className="hide">
									<p className="mb-0 small">Suncity Projects is committed to building a greener future by incorporating sustainable practices in every development. By applying for a gold rating through IGBC, our projects ensure eco-friendly designs, energy efficiency, and healthier living environments for generations to come.</p>
									<div className="viewmore"><Link href="/sustainability" className="button text-white fw-light">Read More</Link></div>
								</div>
							</article>
						</div>
					</li>
					<li className="whyChoose-list-item position-relative bg-image" data-target="technology" style={{ backgroundImage: 'url(/images/technology.jpg)' }}>
						<div className="inner h-100">
							<article className="details">
								<h2 className="mb-3 mb-md-4 fw-lighter text-white">Technology</h2>
								<div className="hide">
									<p className="mb-0 small">At Suncity Projects, we embrace advanced construction methods like MIVAN Technology, ensuring precision, durability, and faster delivery. This cutting-edge technique guarantees superior quality structures, stronger foundations, and enhanced safety, while maintaining efficiency and excellence in every project we create.</p>
									<div className="viewmore"><Link href="/technology" className="button text-white fw-light">Read More</Link></div>
								</div>
							</article>
						</div>
					</li>
					<li className="whyChoose-list-item position-relative bg-image" data-target="community" style={{ backgroundImage: 'url(/images/community.jpg)' }}>
						<div className="inner h-100">
							<article className="details">
								<h2 className="mb-3 mb-md-4 fw-lighter text-white">Community</h2>
								<div className="hide scroller">
									<p className="mb-0 small">Suncity Projects takes pride in building not just homes, but thriving communities. Over the years, we've connected countless families, offering togetherness and warmth, especially for those away from loved ones. Here, every festival, every moment, becomes a shared celebration of belonging.</p>
									<div className="viewmore"><Link href="/community" className="button text-white fw-light">Read More</Link></div>
								</div>
							</article>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}


