'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Project {
	_id: string;
	projectName: string;
	slug: string;
	projectLocation: {
		name: string;
		city: string;
		state: string;
	};
	type: string;
}

const Header: React.FC = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState<Project[]>([]);
	const [isSearching, setIsSearching] = useState(false);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const lastClickTime = useRef<number>(0);
	const searchOpenTime = useRef<number>(0);
	const searchTimeout = useRef<NodeJS.Timeout | null>(null);
	const router = useRouter();


	const slideUp = (element: HTMLElement, duration: number = 300) => {
		const $ = (window as any).jQuery || (window as any).$;
		if ($ && $.fn && $.fn.slideUp) {
			$(element).slideUp(duration);
		} else {
			// Fallback vanilla JS implementation
			element.style.height = element.scrollHeight + 'px';
			element.style.overflow = 'hidden';
			element.style.transition = `height ${duration}ms ease-in-out`;
			element.offsetHeight; // Force reflow
			element.style.height = '0px';
			setTimeout(() => {
				element.style.display = 'none';
				element.style.height = '';
				element.style.overflow = '';
				element.style.transition = '';
			}, duration);
		}
	};

	const slideDown = (element: HTMLElement, duration: number = 300) => {
		const $ = (window as any).jQuery || (window as any).$;
		if ($ && $.fn && $.fn.slideDown) {
			$(element).slideDown(duration);
		} else {
			// Fallback vanilla JS implementation
			element.style.display = 'block';
			element.style.height = '0px';
			element.style.overflow = 'hidden';
			element.style.transition = `height ${duration}ms ease-in-out`;
			element.offsetHeight; // Force reflow
			element.style.height = element.scrollHeight + 'px';
			setTimeout(() => {
				element.style.height = 'auto';
				element.style.overflow = '';
				element.style.transition = '';
			}, duration);
		}
	};

	// Pure jQuery-based menu toggle handler (matching original custom.js)
	const handleMenuToggle = () => {
		const $ = (window as any).jQuery || (window as any).$;
		if ($) {
			// Use jQuery exactly like the original working code
			$(".menuBtn").toggleClass('closeMenuBtn');
			$(".header").toggleClass('headerActive');
			$('.mbMenuContainer').slideToggle(300).toggleClass('active');
			$('body').toggleClass('overflow-hidden');
		} else {
			// Fallback vanilla JS implementation
			const menuBtn = document.querySelector('.menuBtn') as HTMLElement;
			const header = document.querySelector('.header') as HTMLElement;
			const mbMenuContainer = document.querySelector('.mbMenuContainer') as HTMLElement;
			
			if (menuBtn && header && mbMenuContainer) {
				const isMenuOpen = menuBtn.classList.contains('closeMenuBtn');
				
				if (isMenuOpen) {
					// Close menu
					menuBtn.classList.remove('closeMenuBtn');
					header.classList.remove('headerActive');
					slideUp(mbMenuContainer, 300);
					mbMenuContainer.classList.remove('active');
					document.body.classList.remove('overflow-hidden');
				} else {
					// Open menu
					menuBtn.classList.add('closeMenuBtn');
					header.classList.add('headerActive');
					slideDown(mbMenuContainer, 300);
					mbMenuContainer.classList.add('active');
					document.body.classList.add('overflow-hidden');
				}
			}
		}
	};

	const handleSearchToggle = () => {
		const now = Date.now();
		// Prevent rapid clicking (debounce for 300ms)
		if (now - lastClickTime.current < 300) {
			return;
		}
		lastClickTime.current = now;
		
		
		if (!isSearchOpen) {
			// Opening search - use jQuery fadeIn like PHP version
			setIsSearchOpen(true);
			searchOpenTime.current = Date.now();
			document.body.classList.add('overflow-hidden');
			
			// Use jQuery fadeIn like PHP version
			const $ = (window as any).jQuery || (window as any).$;
			if ($) {
				$('.searchContainer').fadeIn(300);
				setTimeout(() => {
					$('.searchForm').addClass('active');
					$('#search-input').focus();
				}, 350);
			} else {
				// Fallback if jQuery not available
				const searchContainer = document.querySelector('.searchContainer');
				if (searchContainer) {
					searchContainer.classList.remove('d-none');
					searchContainer.classList.add('d-block');
				}
			}
		} else {
			// Closing search - use closeSearch function
			closeSearch();
		}
		
		// Close menu if open (matching custom.js behavior)
		const $ = (window as any).jQuery || (window as any).$;
		if ($) {
			$(".menuBtn").removeClass('closeMenuBtn');
			$(".header").removeClass('headerActive');
			$('.mbMenuContainer').slideUp(300).removeClass('active');
			$('body').removeClass('overflow-hidden');
		}
	};

	const closeSearch = () => {
		setIsSearchOpen(false);
		setSearchQuery('');
		setSearchResults([]);
		setShowSuggestions(false);
		document.body.classList.remove('overflow-hidden');
		
		// Use jQuery fadeOut like PHP version
		const $ = (window as any).jQuery || (window as any).$;
		if ($) {
			$('.searchContainer').fadeOut(300);
			$('.searchForm').removeClass('active');
			// Reset form
			const searchForm = document.querySelector('.searchForm') as HTMLFormElement;
			if (searchForm) {
				searchForm.reset();
			}
		} else {
			// Fallback if jQuery not available
			const searchContainer = document.querySelector('.searchContainer');
			if (searchContainer) {
				searchContainer.classList.remove('d-block');
				searchContainer.classList.add('d-none');
			}
		}
	};

	// Search functionality
	const searchProjects = async (query: string) => {
		if (query.length < 2) {
			setSearchResults([]);
			setShowSuggestions(false);
			return;
		}

		setIsSearching(true);
		try {
			// Normalize query for suggestions to unify Gurugram/Gurgaon and partials
			const normalizeSearchTerm = (term: string) => {
				return term
					.replace(/\bgur[a-z]*\b/gi, 'Gurgaon')
					.replace(/\bugram\b/gi, 'Gurgaon')
					.replace(/\bugra\b/gi, 'Gurgaon')
					.replace(/\bgra\b/gi, 'Gurgaon')
					.replace(/\bram\b/gi, 'Gurgaon')
					.replace(/\bgram\b/gi, 'Gurgaon');
			};

			const normalizedQuery = normalizeSearchTerm(query.trim());
			const response = await fetch(`/api/projects/search?q=${encodeURIComponent(normalizedQuery)}`);
			const data = await response.json();
			
			if (response.ok) {
				setSearchResults(data.projects || []);
				setShowSuggestions(true);
			}
		} catch (error) {
			setSearchResults([]);
		} finally {
			setIsSearching(false);
		}
	};

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
		setSearchQuery(query);

		// Clear existing timeout
		if (searchTimeout.current) {
			clearTimeout(searchTimeout.current);
		}

		// Set new timeout for debounced search
		searchTimeout.current = setTimeout(() => {
			searchProjects(query);
		}, 300);
	};

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			// Normalize known aliases and partials so both inputs yield the same results
			// Map tokens related to Gurugram to Gurgaon to unify results
			const normalizeSearchTerm = (term: string) => {
				return term
					.replace(/\bgur[a-z]*\b/gi, 'Gurgaon')
					.replace(/\bugram\b/gi, 'Gurgaon')
					.replace(/\bugra\b/gi, 'Gurgaon')
					.replace(/\bgra\b/gi, 'Gurgaon')
					.replace(/\bram\b/gi, 'Gurgaon')
					.replace(/\bgram\b/gi, 'Gurgaon');
			};

			const normalizedSearch = normalizeSearchTerm(searchQuery.trim());
			// Navigate to projects listing page with normalized search query
			router.push(`/projects?search=${encodeURIComponent(normalizedSearch)}`);
			closeSearch();
		}
	};

	const handleSuggestionClick = (project: Project) => {
		router.push(`/projects/${project.slug}`);
		closeSearch();
	};

	const handleViewAllResults = () => {
		// Navigate to projects listing page with normalized search query
		const normalizeSearchTerm = (term: string) => {
			return term
				.replace(/\bgur[a-z]*\b/gi, 'Gurgaon')
				.replace(/\bugram\b/gi, 'Gurgaon')
				.replace(/\bugra\b/gi, 'Gurgaon')
				.replace(/\bgra\b/gi, 'Gurgaon')
				.replace(/\bram\b/gi, 'Gurgaon')
				.replace(/\bgram\b/gi, 'Gurgaon');
		};

		const normalizedSearch = normalizeSearchTerm(searchQuery.trim());
		router.push(`/projects?search=${encodeURIComponent(normalizedSearch)}`);
		closeSearch();
	};

	// Cleanup search timeout on unmount
	useEffect(() => {
		return () => {
			if (searchTimeout.current) {
				clearTimeout(searchTimeout.current);
			}
		};
	}, []);

	// Dropdown functionality from custom.js - using jQuery
	useEffect(() => {
		const $ = (window as any).jQuery || (window as any).$;
		if ($) {
			// Use jQuery exactly like the original working code
			$(".hasChild").click(function(this: HTMLElement) {
				$(".dropdown").slideUp(300);
				if($(this).find(".dropdown").is(':hidden') === true) {
					$(this).find(".dropdown").slideDown(300);
				}
			});
		} else {
			// Fallback vanilla JS implementation
			const lis = Array.from(document.querySelectorAll<HTMLLIElement>('.mbMenuContainer .hasChild'));

			const cleanups: Array<() => void> = [];
			lis.forEach((li) => {
				const toggler = li.querySelector<HTMLAnchorElement>(":scope > a");
				if (!toggler) return;
				const handler = (e: Event) => {
					e.preventDefault();
					e.stopPropagation();
					
					// Close all dropdowns
					const allDropdowns = document.querySelectorAll('.mbMenuContainer .dropdown');
					allDropdowns.forEach(dropdown => {
						slideUp(dropdown as HTMLElement, 300);
					});
					
					// Open current dropdown if hidden
					const currentDropdown = li.querySelector(':scope > .dropdown') as HTMLElement;
					if (currentDropdown && (currentDropdown.style.display === 'none' || !currentDropdown.style.display)) {
						slideDown(currentDropdown, 300);
					}
				};
				toggler.addEventListener('click', handler);
				cleanups.push(() => toggler.removeEventListener('click', handler));
			});

			return () => cleanups.forEach((f) => f());
		}
	}, []);

	// Dropdown li click handler from custom.js - using jQuery
	useEffect(() => {
		const $ = (window as any).jQuery || (window as any).$;
		if ($) {
			// Use jQuery exactly like the original working code
			$(".dropdown li").click(function() {
				$(".menuBtn").removeClass('closeMenuBtn');
				$(".header").removeClass('headerActive');
				$('.mbMenuContainer').slideUp(300).removeClass('active');
				$('body').removeClass('overflow-hidden');
			});
		} else {
			// Fallback vanilla JS implementation
			const dropdownLis = Array.from(document.querySelectorAll<HTMLLIElement>('.mbMenuContainer .dropdown li'));

			const cleanups: Array<() => void> = [];
			dropdownLis.forEach((li) => {
				const handler = () => {
					// Close menu when dropdown item is clicked
					const menuBtn = document.querySelector('.menuBtn') as HTMLElement;
					const header = document.querySelector('.header') as HTMLElement;
					const mbMenuContainer = document.querySelector('.mbMenuContainer') as HTMLElement;
					
					if (menuBtn) menuBtn.classList.remove('closeMenuBtn');
					if (header) header.classList.remove('headerActive');
					if (mbMenuContainer) {
						slideUp(mbMenuContainer, 300);
						mbMenuContainer.classList.remove('active');
					}
					document.body.classList.remove('overflow-hidden');
				};
				li.addEventListener('click', handler);
				cleanups.push(() => li.removeEventListener('click', handler));
			});

			return () => cleanups.forEach((f) => f());
		}
	}, []);

	// Click outside menu handler from custom.js - using jQuery
	useEffect(() => {
		const $ = (window as any).jQuery || (window as any).$;
		if ($) {
			// Use jQuery exactly like the original working code
			$(".mbMenuContainer").mouseup(function (e: any) {
				var menuModal = $(".mbMenu");
				var menuModalWrapper = $(".mbMenuContainer");
				
				// Check if the click is outside the menu container
				if (!menuModal.is(e.target) && menuModal.has(e.target).length === 0) {
					if (menuModalWrapper.hasClass('active')) {
						menuModalWrapper.slideUp(300).removeClass('active');
						$(".header").removeClass('headerActive');
						$(".menuBtn").removeClass('closeMenuBtn');
						$('body').removeClass('overflow-hidden');
					}
				}
			});
		} else {
			// Fallback vanilla JS implementation
			const handleClickOutside = (e: MouseEvent) => {
				const menuModal = document.querySelector('.mbMenu');
				const menuModalWrapper = document.querySelector('.mbMenuContainer') as HTMLElement;
				
				// Check if the click is outside the menu container
				if (menuModal && menuModalWrapper && menuModalWrapper.classList.contains('active')) {
					if (!menuModal.contains(e.target as Node)) {
						// Close menu when clicking outside
						const menuBtn = document.querySelector('.menuBtn') as HTMLElement;
						const header = document.querySelector('.header') as HTMLElement;
						
						if (menuBtn) menuBtn.classList.remove('closeMenuBtn');
						if (header) header.classList.remove('headerActive');
						slideUp(menuModalWrapper, 300);
						menuModalWrapper.classList.remove('active');
						document.body.classList.remove('overflow-hidden');
					}
				}
			};

			document.addEventListener('mouseup', handleClickOutside);
			return () => document.removeEventListener('mouseup', handleClickOutside);
		}
	}, []);

	// Initialize Bootstrap modals with proper cleanup - same as Explore Career
	useEffect(() => {
		const initBootstrapModals = () => {
			if (typeof window !== 'undefined' && (window as any).bootstrap) {
				try {
					// Initialize all modals in header
					const modals = document.querySelectorAll('.modal');
					modals.forEach((modal, index) => {
						try {
							const modalInstance = new (window as any).bootstrap.Modal(modal);
							
							// Add event listeners to track modal events
							modal.addEventListener('hidden.bs.modal', function () {
								// Ensure backdrop is removed
								const backdrop = document.querySelector('.modal-backdrop');
								if (backdrop) {
									backdrop.remove();
								}
								// Remove modal-open class from body
								document.body.classList.remove('modal-open');
							});
							
						} catch (error) {
						}
					});
				} catch (error) {
					console.error('Header: Error during modal initialization:', error);
				}
			} else {
				setTimeout(initBootstrapModals, 500);
			}
		};

		// Start modal initialization
		initBootstrapModals();
	}, []);


	// Close menu on link click, and smooth scroll for same-page hash links
	useEffect(() => {
		const container = document.querySelector('.mbMenu') as HTMLElement | null;
		if (!container) return;
		const links = Array.from(container.querySelectorAll<HTMLAnchorElement>('a'));
		const off: Array<() => void> = [];
		links.forEach((a) => {
			const handler = (e: Event) => {
				const href = (a.getAttribute('href') || '').trim();
				// Skip parent togglers like javascript:;
				if (href.startsWith('javascript:')) return;
				
				// Always close menu when navigating to a real destination or in-page anchor
				const $ = (window as any).jQuery || (window as any).$;
				if ($) {
					$(".menuBtn").removeClass('closeMenuBtn');
					$(".header").removeClass('headerActive');
					$('.mbMenuContainer').slideUp(300).removeClass('active');
					$('body').removeClass('overflow-hidden');
				} else {
					// Fallback vanilla JS
					const menuBtn = document.querySelector('.menuBtn') as HTMLElement;
					const header = document.querySelector('.header') as HTMLElement;
					const mbMenuContainer = document.querySelector('.mbMenuContainer') as HTMLElement;
					
					if (menuBtn) menuBtn.classList.remove('closeMenuBtn');
					if (header) header.classList.remove('headerActive');
					if (mbMenuContainer) {
						slideUp(mbMenuContainer, 300);
						mbMenuContainer.classList.remove('active');
					}
					document.body.classList.remove('overflow-hidden');
				}
				
				// Smooth scroll for same-page anchors
				if (href.startsWith('#') || (href.includes('#') && href.split('#')[0] === window.location.pathname)) {
					e.preventDefault();
					const id = href.startsWith('#') ? href.slice(1) : href.split('#')[1];
					const el = document.getElementById(id);
					if (el) {
						el.scrollIntoView({ behavior: 'smooth' });
					}
				}
			};
			a.addEventListener('click', handler);
			off.push(() => a.removeEventListener('click', handler));
		});
		return () => off.forEach((f) => f());
	}, []);

	// Handle ESC key and click outside for search
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isSearchOpen) {
				closeSearch();
			}
		};

		const handleClickOutside = (e: MouseEvent) => {
			if (isSearchOpen) {
				// Prevent immediate closing after opening (wait at least 200ms)
				const now = Date.now();
				if (now - searchOpenTime.current < 200) {
					return;
				}
				
				const searchContainer = document.querySelector('.searchContainer');
				const searchForm = document.querySelector('.searchForm');
				const target = e.target as Node;
				
				// Check if click is on search container but not on search form (like PHP version)
				if (searchContainer && searchContainer.contains(target) && 
					searchForm && !searchForm.contains(target)) {
					closeSearch();
				}
			}
		};

		const handleSearchFormClick = (e: Event) => {
			e.stopPropagation();
		};

		document.addEventListener('keyup', handleKeyPress);
		document.addEventListener('click', handleClickOutside);
		
		// Add click handler to search form to prevent closing
		const searchForm = document.querySelector('.searchForm');
		if (searchForm) {
			searchForm.addEventListener('click', handleSearchFormClick);
		}
		
		return () => {
			document.removeEventListener('keyup', handleKeyPress);
			document.removeEventListener('click', handleClickOutside);
			if (searchForm) {
				searchForm.removeEventListener('click', handleSearchFormClick);
			}
		};
	}, [isSearchOpen]);

	// Handle scroll to add/remove fixed class (matches PHP behavior)
	useEffect(() => {
		const handleScroll = () => {
			const wScroll = window.pageYOffset || document.documentElement.scrollTop;
			const header = document.querySelector('.header');
			const buttonTop = document.querySelector('.button-top');
			
			if (wScroll > 1) {
				header?.classList.add('fixed');
				buttonTop?.classList.add('fixed');
			} else {
				header?.classList.remove('fixed');
				buttonTop?.classList.remove('fixed');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			{/* Main Header */}
			<div className="header" data-aos="fade-down">
				<div className="container-lg d-flex align-items-center justify-content-between position-relative">
					<div className="logo">
						<Link href="/">
							<img src="../images/logo.svg" alt="Suncity Projects" />
						</Link>
					</div>
					<div className="topHead leftHead d-flex gap-3 align-items-center">
						<a href="https://api.whatsapp.com/send?phone=+918447737045&text=Hi, I am interested, please share the details." className="whatsappBtn">
							<i className="icon">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<g id="phone_chat">
										<path d="m16 1c-8.2709961 0-15 6.7285156-15 15 0 2.9101563.8344727 5.7158203 2.418457 8.1523438l-2.3374023 5.4541016c-.1611328.375-.0771484.8115234.2119141 1.1005859.1914062.1914062.4472656.2929687.7070312.2929687.1328125 0 .2670898-.0263672.394043-.0810547l5.4541016-2.3378906c2.4360351 1.5849609 5.2416992 2.4189453 8.1518554 2.4189453 8.2714844 0 15-6.7285156 15-15s-6.7285156-15-15-15zm7.6992188 20.3691406s-1.2470703 1.5996094-2.1484375 1.9736328c-2.2910156.9482422-5.5253906 0-9.2099609-3.6835938-3.6835938-3.6845703-4.6323242-6.9189453-3.6835938-9.2099609.3740234-.9023437 1.9736328-2.1484374 1.9736328-2.1484374.4335938-.3378906 1.1074219-.2958984 1.4960938.0927734l1.8095703 1.8095703c.3886719.3886719.3886719 1.0253906 0 1.4140625l-1.1357422 1.1347656s-.4599609 1.3808594 2.3027344 4.1445313c2.7626953 2.7626953 4.1445313 2.3027344 4.1445313 2.3027344l1.1347656-1.1357422c.3886719-.3886719 1.0253906-.3886719 1.4140625 0l1.8095703 1.8095703c.3886718.3886719.430664 1.0615234.0927734 1.4960937z"></path>
									</g>
								</svg>
							</i>
						</a>
						<button className="btn border-0 p-0 searchBtn" onClick={handleSearchToggle}>
							<i className="icon">
								<svg x="0px" y="0px" viewBox="0 0 24 24">
									<path d="M18.3,17.3c-0.3,0.3-0.6,0.7-1,1l5.5,5.5C23,24,23.2,24,23.3,24c0.1,0,0.3,0,0.5-0.2c0.2-0.2,0.2-0.4,0.2-0.5
										c0-0.1,0-0.3-0.2-0.5L18.3,17.3L18.3,17.3z" />
									<circle cx="10.3" cy="10.3" r="10" />
								</svg>
							</i>
						</button>
						<Link href="/projects" className="topHead-item projectBtn d-none d-lg-block">
							<span>Projects</span> <i className="fa fa-chevron-right"></i>
						</Link>
						<button role="button" className="menuBtn" onClick={handleMenuToggle}>
							<span className="bar"></span>
						</button>
					</div>
				</div>
			</div>

			{/* Enquiry Wrapper */}
			<div className="enquiryWrapper" data-aos="fade-up">
				<a href="#formModal" className="enquiryBtn" data-bs-toggle="modal">
					<i className="icon text-primary" data-toggle="tooltip" data-bs-placement="left" data-bs-title="Enquire Now">
						<svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path d="m422.782 161.813h-37.23v-39.665c0-22.73-8.552-44.383-24.081-60.968-2.887-3.084-7.727-3.242-10.809-.355-3.083 2.887-3.242 7.726-.355 10.808 12.865 13.741 19.951 31.681 19.951 50.515v39.665h-155.612c-49.195 0-89.218 40.024-89.218 89.219v27.358h-11.978c-4.765 0-9.246 1.856-12.617 5.226l-40.588 40.588v-40.83c0-6.255-3.349-12.133-8.742-15.339-22.334-13.279-36.209-37.637-36.209-63.568v-82.319c0-40.762 33.162-73.924 73.924-73.924h207.116c9.554 0 18.847 1.793 27.621 5.331 3.917 1.577 8.373-.317 9.952-4.233 1.579-3.917-.316-8.373-4.233-9.952-10.599-4.274-21.817-6.44-33.34-6.44h-207.116c-49.195 0-89.218 40.023-89.218 89.218v82.319c0 31.298 16.74 60.693 43.687 76.714.78.464 1.264 1.304 1.264 2.194v44.522c0 5.587 3.335 10.578 8.497 12.717 3.445 1.656 10.479 1.417 15.001-2.983l43.198-43.199c.482-.482 1.122-.747 1.803-.747h11.978v39.665c0 12.042 2.36 23.727 7.014 34.731 1.645 3.889 6.132 5.706 10.022 4.064 3.89-1.645 5.709-6.132 4.065-10.022-3.852-9.108-5.806-18.788-5.806-28.772v-82.318c0-40.763 33.162-73.925 73.924-73.925h208.135c40.762 0 73.924 33.162 73.924 73.925v82.318c0 26.032-13.311 49.66-35.608 63.206-5.255 3.193-8.52 9.02-8.52 15.206v49.876l-49.138-49.139c-3.37-3.37-7.851-5.226-12.617-5.226h-176.177c-18.551 0-36.29-6.9-49.951-19.428-3.112-2.853-7.949-2.645-10.805.467-2.855 3.113-2.646 7.95.467 10.805 16.489 15.123 37.899 23.451 60.288 23.451h176.176c.671 0 1.328.272 1.802.747l51.749 51.749c3.996 3.071 7.902 5.445 15 2.983 5.162-2.139 8.497-7.13 8.497-12.717v-53.569c0-.879.448-1.698 1.168-2.135 26.903-16.343 42.963-44.857 42.963-76.277v-82.318c0-49.195-40.023-89.219-89.218-89.219z"></path>
								<path d="m297.13 344.186c-4.484-6.336-12.653-10.584-21.97-10.584-14.127 0-25.619 9.765-25.619 21.768 0 12.002 11.493 21.767 25.619 21.767 12.396 0 22.761-7.519 25.116-17.471 11.28-4.751 20.16-14.218 24.014-26.195 11.168-2.543 19.531-12.547 19.531-24.475v-27.575c0-11.515-7.794-21.237-18.382-24.185-2.492-15.359-10.04-29.452-21.611-40.103-12.911-11.885-29.691-18.43-47.249-18.43-34.551 0-63.45 24.887-68.867 58.534-10.584 2.95-18.375 12.671-18.375 24.183v27.575c0 13.844 11.263 25.107 25.107 25.107s25.107-11.263 25.107-25.107v-27.575c0-10.795-6.849-20.02-16.429-23.56 4.958-25.335 27.105-43.863 53.457-43.863 26.018 0 48.444 18.852 53.437 43.871-9.57 3.545-16.409 12.764-16.409 23.552v27.575c0 10.204 6.122 19 14.884 22.923-2.431 5.224-6.43 9.491-11.361 12.268zm-21.97 17.658c-6.085 0-10.325-3.411-10.325-6.473s4.24-6.474 10.325-6.474 10.326 3.412 10.326 6.474-4.242 6.473-10.326 6.473zm-70.903-52.847c0 5.411-4.402 9.813-9.813 9.813s-9.813-4.402-9.813-9.813v-27.575c0-5.411 4.402-9.813 9.813-9.813s9.813 4.402 9.813 9.813zm104.644-27.575c0-5.411 4.402-9.813 9.813-9.813s9.813 4.402 9.813 9.813v27.575c0 5.411-4.402 9.813-9.813 9.813s-9.813-4.402-9.813-9.813z"></path>
								<path d="m363.692 242.043h60.911c4.223 0 7.647-3.423 7.647-7.647s-3.424-7.647-7.647-7.647h-60.911c-4.223 0-7.647 3.423-7.647 7.647s3.424 7.647 7.647 7.647z"></path>
								<path d="m363.692 276.276h46.967c4.223 0 7.647-3.423 7.647-7.647s-3.424-7.647-7.647-7.647h-46.967c-4.223 0-7.647 3.423-7.647 7.647s3.424 7.647 7.647 7.647z"></path>
								<circle cx="75.233" cy="132.953" r="11.401"></circle>
								<circle cx="109.763" cy="132.953" r="11.401"></circle>
								<circle cx="144.09" cy="132.953" r="11.401"></circle>
							</g>
						</svg>
					</i>
				</a>
				<a href="tel:+918447737045" className="callBtn" data-toggle="tooltip" data-bs-placement="left" title="Call Now">
					<i className="icon text-primary">
						<svg viewBox="0 0 511.99984 511" xmlns="http://www.w3.org/2000/svg">
							<path d="m510.628906 229.679688c-6.046875-58.140626-32.1875-112.964844-73.597656-154.375-48.238281-48.238282-112.527344-74.804688-181.023438-74.804688-68.5 0-132.789062 26.566406-181.027343 74.804688-48.351563 48.355468-74.980469 112.644531-74.980469 181.023437 0 68.382813 26.628906 132.671875 74.980469 181.023437 48.355469 48.355469 112.644531 74.984376 181.027343 74.984376 4.199219 0 7.601563-3.40625 7.601563-7.605469s-3.402344-7.601563-7.601563-7.601563c-64.320312 0-124.789062-25.046875-170.269531-70.53125-45.484375-45.480468-70.53125-105.949218-70.53125-170.269531 0-64.316406 25.046875-124.789063 70.53125-170.269531 45.363281-45.367188 105.832031-70.351563 170.269531-70.351563 64.433594 0 124.902344 24.984375 170.269532 70.351563 38.949218 38.953125 63.535156 90.515625 69.226562 145.195312 5.609375 53.90625-7.214844 108.628906-36.113281 154.089844-6.078125 9.5625-16 15.753906-27.21875 16.988281-8.542969.9375-16.960937-1.121093-23.992187-5.710937l17.363281-17.367188c5.011719-5.007812 7.769531-11.667968 7.769531-18.75 0-7.082031-2.757812-13.742187-7.765625-18.75l-51.503906-51.511718c-5.007813-5.007813-11.667969-7.765626-18.75-7.765626s-13.742188 2.757813-18.75 7.765626l-25.683594 25.683593c-4.992187 4.992188-11.628906 7.742188-18.695313 7.742188-7.058593 0-13.699218-2.75-18.691406-7.742188l-77.066406-77.066406c-10.304688-10.304687-10.304688-27.078125-.003906-37.378906l25.6875-25.6875c5.007812-5.007813 7.765625-11.667969 7.765625-18.75 0-7.085938-2.757813-13.742188-7.765625-18.753907l-51.507813-51.5c-5.007812-5.007812-11.667969-7.765624-18.75-7.765624s-13.742187 2.757812-18.753906 7.765624l-19.6875 19.691407c-.011719.011719-.027344.023437-.039063.035156-.015624.015625-.03125.035156-.046874.050781-22.316407 22.339844-34.605469 52.027344-34.605469 83.605469 0 31.601563 12.308593 61.3125 34.65625 83.65625l80.457031 80.457031c2.972656 2.96875 7.785156 2.96875 10.753906 0 2.972656-2.96875 2.972656-7.78125 0-10.753906l-80.457031-80.457031c-19.476563-19.472657-30.203125-45.363281-30.203125-72.902344 0-24.988281 8.832031-48.617187 25.019531-67.328125l18.972657 18.972656c1.484374 1.484375 3.433593 2.226563 5.378906 2.226563 1.945312 0 3.890625-.742188 5.375-2.226563 2.972656-2.96875 2.972656-7.785156 0-10.753906l-19.167969-19.167969 14.351563-14.351562c2.132812-2.136719 4.972656-3.3125 7.996093-3.3125 3.019531 0 5.859375 1.175781 7.996094 3.3125l51.507813 51.503906c2.136718 2.136719 3.316406 4.976563 3.316406 7.996094s-1.175782 5.859375-3.316406 7.996093l-14.351563 14.351563-23.132813-23.128906c-2.96875-2.972657-7.785156-2.972657-10.753906 0-2.96875 2.96875-2.96875 7.78125 0 10.753906l23.132813 23.128906-.578125.578125c-16.234375 16.234375-16.234375 42.65625 0 58.890625l77.066406 77.066407c7.867188 7.863281 18.324219 12.195312 29.449219 12.195312s21.582031-4.332031 29.441406-12.191406l.578125-.578125 67.292969 67.292969c-11.257813 9.707031-24.515625 16.925781-38.753907 21.015624-36.082031 10.359376-74.960937.320313-101.464843-26.191406l-18.839844-18.839844c-2.96875-2.96875-7.785156-2.96875-10.753906 0s-2.96875 7.785157 0 10.753907l18.839843 18.839843c22.496094 22.5 52.746094 34.65625 83.730469 34.65625 10.90625 0 21.910157-1.507812 32.6875-4.601562 15.238281-4.382812 29.496094-11.871094 41.824219-21.886719 10.527344 8.042969 23.695312 11.777344 37.085938 10.300781 15.828124-1.738281 29.820312-10.46875 38.386718-23.945312 30.730469-48.339844 44.371094-106.519531 38.40625-163.820312zm-163.332031 71.316406c2.136719-2.136719 4.976563-3.3125 7.996094-3.3125 3.023437 0 5.859375 1.175781 7.996093 3.3125l51.503907 51.511718c2.136719 2.136719 3.3125 4.976563 3.3125 7.996094 0 3.019532-1.175781 5.859375-3.3125 7.996094l-14.351563 14.347656-67.496094-67.496094zm0 0"></path>
						</svg>
					</i>
				</a>
			</div>

			{/* Search Container */}
			<div className="searchContainer" style={{display: 'none'}}>
				<button className="btn p-0 border-0 searchClose" onClick={closeSearch}>
					<i className="fa fa-times icon-circular bg-danger text-white"></i>
				</button>
				<div className="container-lg h-100 d-flex align-items-center justify-content-center">
					<div className="col-lg-8 px-0 position-relative">
						<form onSubmit={handleSearchSubmit} className="searchForm">
							<input 
								type="text" 
								id="search-input" 
								className="form-control bg-white" 
								placeholder="Search by project name or location..." 
								value={searchQuery}
								onChange={handleSearchInput}
								autoComplete="off"
							/>
							<button type="submit" className="btn">
								{isSearching ? (
									<i className="fa fa-spinner fa-spin"></i>
								) : (
									<i className="fa fa-search"></i>
								)}
							</button>
						</form>
						
						{/* Search Suggestions Dropdown */}
						{showSuggestions && searchResults.length > 0 && (
							<div className="search-suggestions">
								<div className="suggestions-list">
									{searchResults.slice(0, 5).map((project) => (
										<div 
											key={project._id}
											className="suggestion-item"
											onClick={() => handleSuggestionClick(project)}
										>
											<div className="suggestion-content">
												<h6 className="mb-1 text-primary">{project.projectName}</h6>
												<p className="mb-0 text-muted small">
													<i className="fa fa-map-marker-alt me-1"></i>
													{project.projectLocation?.name || project.projectLocation?.city || 'Location not available'}
													{project.projectLocation?.state && `, ${project.projectLocation.state}`}
													<span className={`badge ms-2 ${project.type === 'Residential' ? 'bg-primary' : project.type === 'Commercial' ? 'bg-success' : 'bg-info'}`}>
														{project.type}
													</span>
												</p>
											</div>
										</div>
									))}
									{searchResults.length > 5 && (
										<div className="suggestion-item view-all" onClick={handleViewAllResults}>
											<div className="suggestion-content text-center">
												<strong>View all {searchResults.length} results for "{searchQuery}"</strong>
											</div>
										</div>
									)}
								</div>
							</div>
						)}
						
						{/* No Results Message */}
						{showSuggestions && searchResults.length === 0 && searchQuery.length >= 2 && !isSearching && (
							<div className="search-suggestions">
								<div className="suggestions-list">
									<div className="suggestion-item no-results">
										<div className="suggestion-content text-center">
											<p className="mb-0 text-muted">No projects found for "{searchQuery}"</p>
											<button 
												className="btn btn-sm btn-outline-primary mt-2"
												onClick={() => {
													router.push('/projects');
													closeSearch();
												}}
											>
												View All Projects
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Mobile Menu Container */}
			<div className="mbMenuContainer">
				<div className="mbMenu">
					<ul className="list-inline">
						<li><Link href="/">Home</Link></li>
						<li className="hasChild"><a href="javascript:;">About Us <i className="fa fa-plus"></i></a>
							<div className="dropdown">
								<ul className="list-inline">
									<li><Link href="/about-us#overview">Overview</Link></li>
									<li><Link href="/about-us#mission-vision">Mission/ Vision</Link></li>
									<li><Link href="/about-us#team">Management Team</Link></li>
									<li><Link href="/about-us#csr">CSR</Link></li>
									<li><Link href="/about-us">Suncity Milestones</Link></li>
								</ul>
							</div>
						</li>
						<li className="hasChild"><a href="javascript:;">Projects <i className="fa fa-plus"></i></a>
							<div className="dropdown">
								<ul className="list-inline">
									<li><Link href="/residential-projects">Residential</Link></li>
									<li><Link href="/commercial-projects">Commercial</Link></li>
									<li><Link href="/retail-projects">Retail</Link></li>
									<li><Link href="/education-projects">Education</Link></li>
									<li><Link href="/delivered-projects">Delivered Projects</Link></li>
								</ul>
							</div>
						</li>
						<li className="hasChild"><a href="javascript:;">NRI Corner <i className="fa fa-plus"></i></a>
							<div className="dropdown">
								<ul className="list-inline">
									<li><Link href="/nri-corner#loan-for-nri">Loan For NRI</Link></li>
									<li><Link href="/nri-corner#nri-faq">NRI FAQs</Link></li>
								</ul>
							</div>
						</li>
						<li className="hasChild"><a href="javascript:;">Media <i className="fa fa-plus"></i></a>
							<div className="dropdown">
								<ul className="list-inline">
									<li><Link href="/in-the-news">In the News</Link></li>
									<li><Link href="/press-release">Press Release</Link></li>
									<li><Link href="/events">Events</Link></li>
									<li><Link href="/awards">Awards</Link></li>
									<li><Link href="/blogs">Blogs</Link></li>
								</ul>
							</div>
						</li>
						<li><Link href="/construction-updates">Construction Updates</Link></li>
						<li><Link href="/channel-partner-registration">Channel Partner Registration</Link></li>
						<li><Link href="/why-suncity">Careers</Link></li>
						<li><Link href="/contact-us">Contact Us</Link></li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;