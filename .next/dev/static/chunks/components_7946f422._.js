(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Header = ()=>{
    _s();
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastClickTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const searchOpenTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const searchTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const slideUp = (element, duration = 300)=>{
        const $ = window.jQuery || window.$;
        if ($ && $.fn && $.fn.slideUp) {
            $(element).slideUp(duration);
        } else {
            // Fallback vanilla JS implementation
            element.style.height = element.scrollHeight + 'px';
            element.style.overflow = 'hidden';
            element.style.transition = `height ${duration}ms ease-in-out`;
            element.offsetHeight; // Force reflow
            element.style.height = '0px';
            setTimeout(()=>{
                element.style.display = 'none';
                element.style.height = '';
                element.style.overflow = '';
                element.style.transition = '';
            }, duration);
        }
    };
    const slideDown = (element, duration = 300)=>{
        const $ = window.jQuery || window.$;
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
            setTimeout(()=>{
                element.style.height = 'auto';
                element.style.overflow = '';
                element.style.transition = '';
            }, duration);
        }
    };
    // Pure jQuery-based menu toggle handler (matching original custom.js)
    const handleMenuToggle = ()=>{
        const $ = window.jQuery || window.$;
        if ($) {
            // Use jQuery exactly like the original working code
            $(".menuBtn").toggleClass('closeMenuBtn');
            $(".header").toggleClass('headerActive');
            $('.mbMenuContainer').slideToggle(300).toggleClass('active');
            $('body').toggleClass('overflow-hidden');
        } else {
            // Fallback vanilla JS implementation
            const menuBtn = document.querySelector('.menuBtn');
            const header = document.querySelector('.header');
            const mbMenuContainer = document.querySelector('.mbMenuContainer');
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
    const handleSearchToggle = ()=>{
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
            const $ = window.jQuery || window.$;
            if ($) {
                $('.searchContainer').fadeIn(300);
                setTimeout(()=>{
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
        const $ = window.jQuery || window.$;
        if ($) {
            $(".menuBtn").removeClass('closeMenuBtn');
            $(".header").removeClass('headerActive');
            $('.mbMenuContainer').slideUp(300).removeClass('active');
            $('body').removeClass('overflow-hidden');
        }
    };
    const closeSearch = ()=>{
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
        setShowSuggestions(false);
        document.body.classList.remove('overflow-hidden');
        // Use jQuery fadeOut like PHP version
        const $ = window.jQuery || window.$;
        if ($) {
            $('.searchContainer').fadeOut(300);
            $('.searchForm').removeClass('active');
            // Reset form
            const searchForm = document.querySelector('.searchForm');
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
    const searchProjects = async (query)=>{
        if (query.length < 2) {
            setSearchResults([]);
            setShowSuggestions(false);
            return;
        }
        setIsSearching(true);
        try {
            // Normalize query for suggestions to unify Gurugram/Gurgaon and partials
            const normalizeSearchTerm = (term)=>{
                return term.replace(/\bgur[a-z]*\b/gi, 'Gurgaon').replace(/\bugram\b/gi, 'Gurgaon').replace(/\bugra\b/gi, 'Gurgaon').replace(/\bgra\b/gi, 'Gurgaon').replace(/\bram\b/gi, 'Gurgaon').replace(/\bgram\b/gi, 'Gurgaon');
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
        } finally{
            setIsSearching(false);
        }
    };
    const handleSearchInput = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        // Clear existing timeout
        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }
        // Set new timeout for debounced search
        searchTimeout.current = setTimeout(()=>{
            searchProjects(query);
        }, 300);
    };
    const handleSearchSubmit = (e)=>{
        e.preventDefault();
        if (searchQuery.trim()) {
            // Normalize known aliases and partials so both inputs yield the same results
            // Map tokens related to Gurugram to Gurgaon to unify results
            const normalizeSearchTerm = (term)=>{
                return term.replace(/\bgur[a-z]*\b/gi, 'Gurgaon').replace(/\bugram\b/gi, 'Gurgaon').replace(/\bugra\b/gi, 'Gurgaon').replace(/\bgra\b/gi, 'Gurgaon').replace(/\bram\b/gi, 'Gurgaon').replace(/\bgram\b/gi, 'Gurgaon');
            };
            const normalizedSearch = normalizeSearchTerm(searchQuery.trim());
            // Navigate to projects listing page with normalized search query
            router.push(`/projects?search=${encodeURIComponent(normalizedSearch)}`);
            closeSearch();
        }
    };
    const handleSuggestionClick = (project)=>{
        router.push(`/projects/${project.slug}`);
        closeSearch();
    };
    const handleViewAllResults = ()=>{
        // Navigate to projects listing page with normalized search query
        const normalizeSearchTerm = (term)=>{
            return term.replace(/\bgur[a-z]*\b/gi, 'Gurgaon').replace(/\bugram\b/gi, 'Gurgaon').replace(/\bugra\b/gi, 'Gurgaon').replace(/\bgra\b/gi, 'Gurgaon').replace(/\bram\b/gi, 'Gurgaon').replace(/\bgram\b/gi, 'Gurgaon');
        };
        const normalizedSearch = normalizeSearchTerm(searchQuery.trim());
        router.push(`/projects?search=${encodeURIComponent(normalizedSearch)}`);
        closeSearch();
    };
    // Cleanup search timeout on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            return ({
                "Header.useEffect": ()=>{
                    if (searchTimeout.current) {
                        clearTimeout(searchTimeout.current);
                    }
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Dropdown functionality from custom.js - using jQuery
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const $ = window.jQuery || window.$;
            if ($) {
                // Use jQuery exactly like the original working code
                $(".hasChild").click({
                    "Header.useEffect": function() {
                        $(".dropdown").slideUp(300);
                        if ($(this).find(".dropdown").is(':hidden') === true) {
                            $(this).find(".dropdown").slideDown(300);
                        }
                    }
                }["Header.useEffect"]);
            } else {
                // Fallback vanilla JS implementation
                const lis = Array.from(document.querySelectorAll('.mbMenuContainer .hasChild'));
                const cleanups = [];
                lis.forEach({
                    "Header.useEffect": (li)=>{
                        const toggler = li.querySelector(":scope > a");
                        if (!toggler) return;
                        const handler = {
                            "Header.useEffect.handler": (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                // Close all dropdowns
                                const allDropdowns = document.querySelectorAll('.mbMenuContainer .dropdown');
                                allDropdowns.forEach({
                                    "Header.useEffect.handler": (dropdown)=>{
                                        slideUp(dropdown, 300);
                                    }
                                }["Header.useEffect.handler"]);
                                // Open current dropdown if hidden
                                const currentDropdown = li.querySelector(':scope > .dropdown');
                                if (currentDropdown && (currentDropdown.style.display === 'none' || !currentDropdown.style.display)) {
                                    slideDown(currentDropdown, 300);
                                }
                            }
                        }["Header.useEffect.handler"];
                        toggler.addEventListener('click', handler);
                        cleanups.push({
                            "Header.useEffect": ()=>toggler.removeEventListener('click', handler)
                        }["Header.useEffect"]);
                    }
                }["Header.useEffect"]);
                return ({
                    "Header.useEffect": ()=>cleanups.forEach({
                            "Header.useEffect": (f)=>f()
                        }["Header.useEffect"])
                })["Header.useEffect"];
            }
        }
    }["Header.useEffect"], []);
    // Dropdown li click handler from custom.js - using jQuery
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const $ = window.jQuery || window.$;
            if ($) {
                // Use jQuery exactly like the original working code
                $(".dropdown li").click({
                    "Header.useEffect": function() {
                        $(".menuBtn").removeClass('closeMenuBtn');
                        $(".header").removeClass('headerActive');
                        $('.mbMenuContainer').slideUp(300).removeClass('active');
                        $('body').removeClass('overflow-hidden');
                    }
                }["Header.useEffect"]);
            } else {
                // Fallback vanilla JS implementation
                const dropdownLis = Array.from(document.querySelectorAll('.mbMenuContainer .dropdown li'));
                const cleanups = [];
                dropdownLis.forEach({
                    "Header.useEffect": (li)=>{
                        const handler = {
                            "Header.useEffect.handler": ()=>{
                                // Close menu when dropdown item is clicked
                                const menuBtn = document.querySelector('.menuBtn');
                                const header = document.querySelector('.header');
                                const mbMenuContainer = document.querySelector('.mbMenuContainer');
                                if (menuBtn) menuBtn.classList.remove('closeMenuBtn');
                                if (header) header.classList.remove('headerActive');
                                if (mbMenuContainer) {
                                    slideUp(mbMenuContainer, 300);
                                    mbMenuContainer.classList.remove('active');
                                }
                                document.body.classList.remove('overflow-hidden');
                            }
                        }["Header.useEffect.handler"];
                        li.addEventListener('click', handler);
                        cleanups.push({
                            "Header.useEffect": ()=>li.removeEventListener('click', handler)
                        }["Header.useEffect"]);
                    }
                }["Header.useEffect"]);
                return ({
                    "Header.useEffect": ()=>cleanups.forEach({
                            "Header.useEffect": (f)=>f()
                        }["Header.useEffect"])
                })["Header.useEffect"];
            }
        }
    }["Header.useEffect"], []);
    // Click outside menu handler from custom.js - using jQuery
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const $ = window.jQuery || window.$;
            if ($) {
                // Use jQuery exactly like the original working code
                $(".mbMenuContainer").mouseup({
                    "Header.useEffect": function(e) {
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
                    }
                }["Header.useEffect"]);
            } else {
                // Fallback vanilla JS implementation
                const handleClickOutside = {
                    "Header.useEffect.handleClickOutside": (e)=>{
                        const menuModal = document.querySelector('.mbMenu');
                        const menuModalWrapper = document.querySelector('.mbMenuContainer');
                        // Check if the click is outside the menu container
                        if (menuModal && menuModalWrapper && menuModalWrapper.classList.contains('active')) {
                            if (!menuModal.contains(e.target)) {
                                // Close menu when clicking outside
                                const menuBtn = document.querySelector('.menuBtn');
                                const header = document.querySelector('.header');
                                if (menuBtn) menuBtn.classList.remove('closeMenuBtn');
                                if (header) header.classList.remove('headerActive');
                                slideUp(menuModalWrapper, 300);
                                menuModalWrapper.classList.remove('active');
                                document.body.classList.remove('overflow-hidden');
                            }
                        }
                    }
                }["Header.useEffect.handleClickOutside"];
                document.addEventListener('mouseup', handleClickOutside);
                return ({
                    "Header.useEffect": ()=>document.removeEventListener('mouseup', handleClickOutside)
                })["Header.useEffect"];
            }
        }
    }["Header.useEffect"], []);
    // Initialize Bootstrap modals with proper cleanup - same as Explore Career
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const initBootstrapModals = {
                "Header.useEffect.initBootstrapModals": ()=>{
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.bootstrap) {
                        try {
                            // Initialize all modals in header
                            const modals = document.querySelectorAll('.modal');
                            modals.forEach({
                                "Header.useEffect.initBootstrapModals": (modal, index)=>{
                                    try {
                                        const modalInstance = new window.bootstrap.Modal(modal);
                                        // Add event listeners to track modal events
                                        modal.addEventListener('hidden.bs.modal', {
                                            "Header.useEffect.initBootstrapModals": function() {
                                                // Ensure backdrop is removed
                                                const backdrop = document.querySelector('.modal-backdrop');
                                                if (backdrop) {
                                                    backdrop.remove();
                                                }
                                                // Remove modal-open class from body
                                                document.body.classList.remove('modal-open');
                                            }
                                        }["Header.useEffect.initBootstrapModals"]);
                                    } catch (error) {}
                                }
                            }["Header.useEffect.initBootstrapModals"]);
                        } catch (error) {
                            console.error('Header: Error during modal initialization:', error);
                        }
                    } else {
                        setTimeout(initBootstrapModals, 500);
                    }
                }
            }["Header.useEffect.initBootstrapModals"];
            // Start modal initialization
            initBootstrapModals();
        }
    }["Header.useEffect"], []);
    // Close menu on link click, and smooth scroll for same-page hash links
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const container = document.querySelector('.mbMenu');
            if (!container) return;
            const links = Array.from(container.querySelectorAll('a'));
            const off = [];
            links.forEach({
                "Header.useEffect": (a)=>{
                    const handler = {
                        "Header.useEffect.handler": (e)=>{
                            const href = (a.getAttribute('href') || '').trim();
                            // Skip parent togglers like javascript:;
                            if (href.startsWith('javascript:')) return;
                            // Always close menu when navigating to a real destination or in-page anchor
                            const $ = window.jQuery || window.$;
                            if ($) {
                                $(".menuBtn").removeClass('closeMenuBtn');
                                $(".header").removeClass('headerActive');
                                $('.mbMenuContainer').slideUp(300).removeClass('active');
                                $('body').removeClass('overflow-hidden');
                            } else {
                                // Fallback vanilla JS
                                const menuBtn = document.querySelector('.menuBtn');
                                const header = document.querySelector('.header');
                                const mbMenuContainer = document.querySelector('.mbMenuContainer');
                                if (menuBtn) menuBtn.classList.remove('closeMenuBtn');
                                if (header) header.classList.remove('headerActive');
                                if (mbMenuContainer) {
                                    slideUp(mbMenuContainer, 300);
                                    mbMenuContainer.classList.remove('active');
                                }
                                document.body.classList.remove('overflow-hidden');
                            }
                            // Smooth scroll for same-page anchors
                            if (href.startsWith('#') || href.includes('#') && href.split('#')[0] === window.location.pathname) {
                                e.preventDefault();
                                const id = href.startsWith('#') ? href.slice(1) : href.split('#')[1];
                                const el = document.getElementById(id);
                                if (el) {
                                    el.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }
                            }
                        }
                    }["Header.useEffect.handler"];
                    a.addEventListener('click', handler);
                    off.push({
                        "Header.useEffect": ()=>a.removeEventListener('click', handler)
                    }["Header.useEffect"]);
                }
            }["Header.useEffect"]);
            return ({
                "Header.useEffect": ()=>off.forEach({
                        "Header.useEffect": (f)=>f()
                    }["Header.useEffect"])
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Handle ESC key and click outside for search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleKeyPress = {
                "Header.useEffect.handleKeyPress": (e)=>{
                    if (e.key === 'Escape' && isSearchOpen) {
                        closeSearch();
                    }
                }
            }["Header.useEffect.handleKeyPress"];
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (e)=>{
                    if (isSearchOpen) {
                        // Prevent immediate closing after opening (wait at least 200ms)
                        const now = Date.now();
                        if (now - searchOpenTime.current < 200) {
                            return;
                        }
                        const searchContainer = document.querySelector('.searchContainer');
                        const searchForm = document.querySelector('.searchForm');
                        const target = e.target;
                        // Check if click is on search container but not on search form (like PHP version)
                        if (searchContainer && searchContainer.contains(target) && searchForm && !searchForm.contains(target)) {
                            closeSearch();
                        }
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            const handleSearchFormClick = {
                "Header.useEffect.handleSearchFormClick": (e)=>{
                    e.stopPropagation();
                }
            }["Header.useEffect.handleSearchFormClick"];
            document.addEventListener('keyup', handleKeyPress);
            document.addEventListener('click', handleClickOutside);
            // Add click handler to search form to prevent closing
            const searchForm = document.querySelector('.searchForm');
            if (searchForm) {
                searchForm.addEventListener('click', handleSearchFormClick);
            }
            return ({
                "Header.useEffect": ()=>{
                    document.removeEventListener('keyup', handleKeyPress);
                    document.removeEventListener('click', handleClickOutside);
                    if (searchForm) {
                        searchForm.removeEventListener('click', handleSearchFormClick);
                    }
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isSearchOpen
    ]);
    // Handle scroll to add/remove fixed class (matches PHP behavior)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
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
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header",
                "data-aos": "fade-down",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-lg d-flex align-items-center justify-content-between position-relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/logo.svg",
                                    alt: "Suncity Projects"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 578,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 577,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 576,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "topHead leftHead d-flex gap-3 align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://api.whatsapp.com/send?phone=+918447737045&text=Hi, I am interested, please share the details.",
                                    className: "whatsappBtn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 32 32",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                id: "phone_chat",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m16 1c-8.2709961 0-15 6.7285156-15 15 0 2.9101563.8344727 5.7158203 2.418457 8.1523438l-2.3374023 5.4541016c-.1611328.375-.0771484.8115234.2119141 1.1005859.1914062.1914062.4472656.2929687.7070312.2929687.1328125 0 .2670898-.0263672.394043-.0810547l5.4541016-2.3378906c2.4360351 1.5849609 5.2416992 2.4189453 8.1518554 2.4189453 8.2714844 0 15-6.7285156 15-15s-6.7285156-15-15-15zm7.6992188 20.3691406s-1.2470703 1.5996094-2.1484375 1.9736328c-2.2910156.9482422-5.5253906 0-9.2099609-3.6835938-3.6835938-3.6845703-4.6323242-6.9189453-3.6835938-9.2099609.3740234-.9023437 1.9736328-2.1484374 1.9736328-2.1484374.4335938-.3378906 1.1074219-.2958984 1.4960938.0927734l1.8095703 1.8095703c.3886719.3886719.3886719 1.0253906 0 1.4140625l-1.1357422 1.1347656s-.4599609 1.3808594 2.3027344 4.1445313c2.7626953 2.7626953 4.1445313 2.3027344 4.1445313 2.3027344l1.1347656-1.1357422c.3886719-.3886719 1.0253906-.3886719 1.4140625 0l1.8095703 1.8095703c.3886718.3886719.430664 1.0615234.0927734 1.4960937z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 585,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 584,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 583,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 582,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn border-0 p-0 searchBtn",
                                    onClick: handleSearchToggle,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18.3,17.3c-0.3,0.3-0.6,0.7-1,1l5.5,5.5C23,24,23.2,24,23.3,24c0.1,0,0.3,0,0.5-0.2c0.2-0.2,0.2-0.4,0.2-0.5             c0-0.1,0-0.3-0.2-0.5L18.3,17.3L18.3,17.3z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "10.3",
                                                    cy: "10.3",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 593,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 592,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 591,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/projects",
                                    className: "topHead-item projectBtn d-none d-lg-block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 601,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa fa-chevron-right"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 601,
                                            columnNumber: 30
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 600,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    role: "button",
                                    className: "menuBtn",
                                    onClick: handleMenuToggle,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bar"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 604,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 603,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 581,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 575,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 574,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "enquiryWrapper",
                "data-aos": "fade-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#formModal",
                        className: "enquiryBtn",
                        "data-bs-toggle": "modal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "icon text-primary",
                            "data-toggle": "tooltip",
                            "data-bs-placement": "left",
                            "data-bs-title": "Enquire Now",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                enableBackground: "new 0 0 512 512",
                                viewBox: "0 0 512 512",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m422.782 161.813h-37.23v-39.665c0-22.73-8.552-44.383-24.081-60.968-2.887-3.084-7.727-3.242-10.809-.355-3.083 2.887-3.242 7.726-.355 10.808 12.865 13.741 19.951 31.681 19.951 50.515v39.665h-155.612c-49.195 0-89.218 40.024-89.218 89.219v27.358h-11.978c-4.765 0-9.246 1.856-12.617 5.226l-40.588 40.588v-40.83c0-6.255-3.349-12.133-8.742-15.339-22.334-13.279-36.209-37.637-36.209-63.568v-82.319c0-40.762 33.162-73.924 73.924-73.924h207.116c9.554 0 18.847 1.793 27.621 5.331 3.917 1.577 8.373-.317 9.952-4.233 1.579-3.917-.316-8.373-4.233-9.952-10.599-4.274-21.817-6.44-33.34-6.44h-207.116c-49.195 0-89.218 40.023-89.218 89.218v82.319c0 31.298 16.74 60.693 43.687 76.714.78.464 1.264 1.304 1.264 2.194v44.522c0 5.587 3.335 10.578 8.497 12.717 3.445 1.656 10.479 1.417 15.001-2.983l43.198-43.199c.482-.482 1.122-.747 1.803-.747h11.978v39.665c0 12.042 2.36 23.727 7.014 34.731 1.645 3.889 6.132 5.706 10.022 4.064 3.89-1.645 5.709-6.132 4.065-10.022-3.852-9.108-5.806-18.788-5.806-28.772v-82.318c0-40.763 33.162-73.925 73.924-73.925h208.135c40.762 0 73.924 33.162 73.924 73.925v82.318c0 26.032-13.311 49.66-35.608 63.206-5.255 3.193-8.52 9.02-8.52 15.206v49.876l-49.138-49.139c-3.37-3.37-7.851-5.226-12.617-5.226h-176.177c-18.551 0-36.29-6.9-49.951-19.428-3.112-2.853-7.949-2.645-10.805.467-2.855 3.113-2.646 7.95.467 10.805 16.489 15.123 37.899 23.451 60.288 23.451h176.176c.671 0 1.328.272 1.802.747l51.749 51.749c3.996 3.071 7.902 5.445 15 2.983 5.162-2.139 8.497-7.13 8.497-12.717v-53.569c0-.879.448-1.698 1.168-2.135 26.903-16.343 42.963-44.857 42.963-76.277v-82.318c0-49.195-40.023-89.219-89.218-89.219z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 616,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m297.13 344.186c-4.484-6.336-12.653-10.584-21.97-10.584-14.127 0-25.619 9.765-25.619 21.768 0 12.002 11.493 21.767 25.619 21.767 12.396 0 22.761-7.519 25.116-17.471 11.28-4.751 20.16-14.218 24.014-26.195 11.168-2.543 19.531-12.547 19.531-24.475v-27.575c0-11.515-7.794-21.237-18.382-24.185-2.492-15.359-10.04-29.452-21.611-40.103-12.911-11.885-29.691-18.43-47.249-18.43-34.551 0-63.45 24.887-68.867 58.534-10.584 2.95-18.375 12.671-18.375 24.183v27.575c0 13.844 11.263 25.107 25.107 25.107s25.107-11.263 25.107-25.107v-27.575c0-10.795-6.849-20.02-16.429-23.56 4.958-25.335 27.105-43.863 53.457-43.863 26.018 0 48.444 18.852 53.437 43.871-9.57 3.545-16.409 12.764-16.409 23.552v27.575c0 10.204 6.122 19 14.884 22.923-2.431 5.224-6.43 9.491-11.361 12.268zm-21.97 17.658c-6.085 0-10.325-3.411-10.325-6.473s4.24-6.474 10.325-6.474 10.326 3.412 10.326 6.474-4.242 6.473-10.326 6.473zm-70.903-52.847c0 5.411-4.402 9.813-9.813 9.813s-9.813-4.402-9.813-9.813v-27.575c0-5.411 4.402-9.813 9.813-9.813s9.813 4.402 9.813 9.813zm104.644-27.575c0-5.411 4.402-9.813 9.813-9.813s9.813 4.402 9.813 9.813v27.575c0 5.411-4.402 9.813-9.813 9.813s-9.813-4.402-9.813-9.813z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 617,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m363.692 242.043h60.911c4.223 0 7.647-3.423 7.647-7.647s-3.424-7.647-7.647-7.647h-60.911c-4.223 0-7.647 3.423-7.647 7.647s3.424 7.647 7.647 7.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 618,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m363.692 276.276h46.967c4.223 0 7.647-3.423 7.647-7.647s-3.424-7.647-7.647-7.647h-46.967c-4.223 0-7.647 3.423-7.647 7.647s3.424 7.647 7.647 7.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 619,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "75.233",
                                            cy: "132.953",
                                            r: "11.401"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 620,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "109.763",
                                            cy: "132.953",
                                            r: "11.401"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 621,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "144.09",
                                            cy: "132.953",
                                            r: "11.401"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 622,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 615,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 614,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 613,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 612,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "tel:+918447737045",
                        className: "callBtn",
                        "data-toggle": "tooltip",
                        "data-bs-placement": "left",
                        title: "Call Now",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "icon text-primary",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 511.99984 511",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m510.628906 229.679688c-6.046875-58.140626-32.1875-112.964844-73.597656-154.375-48.238281-48.238282-112.527344-74.804688-181.023438-74.804688-68.5 0-132.789062 26.566406-181.027343 74.804688-48.351563 48.355468-74.980469 112.644531-74.980469 181.023437 0 68.382813 26.628906 132.671875 74.980469 181.023437 48.355469 48.355469 112.644531 74.984376 181.027343 74.984376 4.199219 0 7.601563-3.40625 7.601563-7.605469s-3.402344-7.601563-7.601563-7.601563c-64.320312 0-124.789062-25.046875-170.269531-70.53125-45.484375-45.480468-70.53125-105.949218-70.53125-170.269531 0-64.316406 25.046875-124.789063 70.53125-170.269531 45.363281-45.367188 105.832031-70.351563 170.269531-70.351563 64.433594 0 124.902344 24.984375 170.269532 70.351563 38.949218 38.953125 63.535156 90.515625 69.226562 145.195312 5.609375 53.90625-7.214844 108.628906-36.113281 154.089844-6.078125 9.5625-16 15.753906-27.21875 16.988281-8.542969.9375-16.960937-1.121093-23.992187-5.710937l17.363281-17.367188c5.011719-5.007812 7.769531-11.667968 7.769531-18.75 0-7.082031-2.757812-13.742187-7.765625-18.75l-51.503906-51.511718c-5.007813-5.007813-11.667969-7.765626-18.75-7.765626s-13.742188 2.757813-18.75 7.765626l-25.683594 25.683593c-4.992187 4.992188-11.628906 7.742188-18.695313 7.742188-7.058593 0-13.699218-2.75-18.691406-7.742188l-77.066406-77.066406c-10.304688-10.304687-10.304688-27.078125-.003906-37.378906l25.6875-25.6875c5.007812-5.007813 7.765625-11.667969 7.765625-18.75 0-7.085938-2.757813-13.742188-7.765625-18.753907l-51.507813-51.5c-5.007812-5.007812-11.667969-7.765624-18.75-7.765624s-13.742187 2.757812-18.753906 7.765624l-19.6875 19.691407c-.011719.011719-.027344.023437-.039063.035156-.015624.015625-.03125.035156-.046874.050781-22.316407 22.339844-34.605469 52.027344-34.605469 83.605469 0 31.601563 12.308593 61.3125 34.65625 83.65625l80.457031 80.457031c2.972656 2.96875 7.785156 2.96875 10.753906 0 2.972656-2.96875 2.972656-7.78125 0-10.753906l-80.457031-80.457031c-19.476563-19.472657-30.203125-45.363281-30.203125-72.902344 0-24.988281 8.832031-48.617187 25.019531-67.328125l18.972657 18.972656c1.484374 1.484375 3.433593 2.226563 5.378906 2.226563 1.945312 0 3.890625-.742188 5.375-2.226563 2.972656-2.96875 2.972656-7.785156 0-10.753906l-19.167969-19.167969 14.351563-14.351562c2.132812-2.136719 4.972656-3.3125 7.996093-3.3125 3.019531 0 5.859375 1.175781 7.996094 3.3125l51.507813 51.503906c2.136718 2.136719 3.316406 4.976563 3.316406 7.996094s-1.175782 5.859375-3.316406 7.996093l-14.351563 14.351563-23.132813-23.128906c-2.96875-2.972657-7.785156-2.972657-10.753906 0-2.96875 2.96875-2.96875 7.78125 0 10.753906l23.132813 23.128906-.578125.578125c-16.234375 16.234375-16.234375 42.65625 0 58.890625l77.066406 77.066407c7.867188 7.863281 18.324219 12.195312 29.449219 12.195312s21.582031-4.332031 29.441406-12.191406l.578125-.578125 67.292969 67.292969c-11.257813 9.707031-24.515625 16.925781-38.753907 21.015624-36.082031 10.359376-74.960937.320313-101.464843-26.191406l-18.839844-18.839844c-2.96875-2.96875-7.785156-2.96875-10.753906 0s-2.96875 7.785157 0 10.753907l18.839843 18.839843c22.496094 22.5 52.746094 34.65625 83.730469 34.65625 10.90625 0 21.910157-1.507812 32.6875-4.601562 15.238281-4.382812 29.496094-11.871094 41.824219-21.886719 10.527344 8.042969 23.695312 11.777344 37.085938 10.300781 15.828124-1.738281 29.820312-10.46875 38.386718-23.945312 30.730469-48.339844 44.371094-106.519531 38.40625-163.820312zm-163.332031 71.316406c2.136719-2.136719 4.976563-3.3125 7.996094-3.3125 3.023437 0 5.859375 1.175781 7.996093 3.3125l51.503907 51.511718c2.136719 2.136719 3.3125 4.976563 3.3125 7.996094 0 3.019532-1.175781 5.859375-3.3125 7.996094l-14.351563 14.347656-67.496094-67.496094zm0 0"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 630,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 629,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 628,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 627,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 611,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "searchContainer",
                style: {
                    display: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn p-0 border-0 searchClose",
                        onClick: closeSearch,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa fa-times icon-circular bg-danger text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 639,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 638,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-lg h-100 d-flex align-items-center justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-8 px-0 position-relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSearchSubmit,
                                    className: "searchForm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "search-input",
                                            className: "form-control bg-white",
                                            placeholder: "Search by project name or location...",
                                            value: searchQuery,
                                            onChange: handleSearchInput,
                                            autoComplete: "off"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 644,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "btn",
                                            children: isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa fa-spinner fa-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 655,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa fa-search"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 657,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 653,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 643,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                showSuggestions && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-suggestions",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "suggestions-list",
                                        children: [
                                            searchResults.slice(0, 5).map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "suggestion-item",
                                                    onClick: ()=>handleSuggestionClick(project),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "suggestion-content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                className: "mb-1 text-primary",
                                                                children: project.projectName
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 673,
                                                                columnNumber: 13
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-0 text-muted small",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-map-marker-alt me-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Header.tsx",
                                                                        lineNumber: 675,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    project.projectLocation?.name || project.projectLocation?.city || 'Location not available',
                                                                    project.projectLocation?.state && `, ${project.projectLocation.state}`,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `badge ms-2 ${project.type === 'Residential' ? 'bg-primary' : project.type === 'Commercial' ? 'bg-success' : 'bg-info'}`,
                                                                        children: project.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Header.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 13
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 12
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, project._id, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            searchResults.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "suggestion-item view-all",
                                                onClick: handleViewAllResults,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "suggestion-content text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            "View all ",
                                                            searchResults.length,
                                                            ' results for "',
                                                            searchQuery,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 13
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 12
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 686,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 665,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 664,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                showSuggestions && searchResults.length === 0 && searchQuery.length >= 2 && !isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-suggestions",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "suggestions-list",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggestion-item no-results",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "suggestion-content text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-0 text-muted",
                                                        children: [
                                                            'No projects found for "',
                                                            searchQuery,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 12
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-sm btn-outline-primary mt-2",
                                                        onClick: ()=>{
                                                            router.push('/projects');
                                                            closeSearch();
                                                        },
                                                        children: "View All Projects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 12
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 701,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 700,
                                            columnNumber: 10
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 699,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 698,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 642,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 641,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 637,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mbMenuContainer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mbMenu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-inline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 725,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 725,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hasChild",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "javascript:;",
                                        children: [
                                            "About Us ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa fa-plus"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 726,
                                                columnNumber: 64
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 726,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-inline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about-us#overview",
                                                        children: "Overview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about-us#mission-vision",
                                                        children: "Mission/ Vision"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about-us#team",
                                                        children: "Management Team"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about-us#csr",
                                                        children: "CSR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 732,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about-us",
                                                        children: "Suncity Milestones"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 733,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 728,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 727,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 726,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hasChild",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "javascript:;",
                                        children: [
                                            "Projects ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa fa-plus"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 737,
                                                columnNumber: 64
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 737,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-inline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/residential-projects",
                                                        children: "Residential"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/commercial-projects",
                                                        children: "Commercial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 741,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/retail-projects",
                                                        children: "Retail"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 742,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/education-projects",
                                                        children: "Education"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/delivered-projects",
                                                        children: "Delivered Projects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 739,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 738,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 737,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hasChild",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "javascript:;",
                                        children: [
                                            "NRI Corner ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa fa-plus"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 748,
                                                columnNumber: 66
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 748,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-inline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/nri-corner#loan-for-nri",
                                                        children: "Loan For NRI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/nri-corner#nri-faq",
                                                        children: "NRI FAQs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 752,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 750,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 749,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 748,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hasChild",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "javascript:;",
                                        children: [
                                            "Media ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa fa-plus"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 756,
                                                columnNumber: 61
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 756,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-inline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/in-the-news",
                                                        children: "In the News"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/press-release",
                                                        children: "Press Release"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/events",
                                                        children: "Events"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/awards",
                                                        children: "Awards"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/blogs",
                                                        children: "Blogs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 763,
                                                        columnNumber: 14
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 758,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 757,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 756,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/construction-updates",
                                    children: "Construction Updates"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 767,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 767,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/channel-partner-registration",
                                    children: "Channel Partner Registration"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 768,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 768,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/why-suncity",
                                    children: "Careers"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 769,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 769,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact-us",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 770,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 770,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 724,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 723,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 722,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Header, "B7JgM8Hj9MrYxxAf9oU9lFTVfCA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Footer() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFooterExpanded, setIsFooterExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Newsletter subscription state
    const [newsletterEmail, setNewsletterEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isNewsletterLoading, setIsNewsletterLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newsletterError, setNewsletterError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newsletterSuccess, setNewsletterSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Show/hide scroll-to-top button based on scroll position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const handleScroll = {
                "Footer.useEffect.handleScroll": ()=>{
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    setIsVisible(scrollTop > 100);
                }
            }["Footer.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Footer.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const toggleFooter = ()=>{
        const target = document.getElementById('more-footer');
        if (!target) return;
        // Toggle the state first
        const newState = !isFooterExpanded;
        setIsFooterExpanded(newState);
        if (newState) {
            // Opening - slide down and scroll to it
            target.style.display = 'block';
            target.style.height = '0px';
            target.style.overflow = 'hidden';
            target.style.transition = 'height 300ms ease-in-out';
            // Force a reflow to ensure the height is set to 0
            // target.offsetHeight;
            // Get the natural height
            const naturalHeight = target.scrollHeight;
            target.style.height = naturalHeight + 'px';
            // Scroll to the bottom of the page after animation
            setTimeout(()=>{
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }, 300);
        } else {
            // Closing - slide up
            target.style.height = '0px';
            target.style.overflow = 'hidden';
            setTimeout(()=>{
                target.style.display = 'none';
                target.style.height = '';
                target.style.overflow = '';
                target.style.transition = '';
            }, 300);
        }
    };
    // Newsletter subscription handler
    const handleNewsletterSubmit = async (e)=>{
        e.preventDefault();
        // Clear previous messages
        setNewsletterError('');
        setNewsletterSuccess('');
        // Basic validation
        if (!newsletterEmail.trim()) {
            setNewsletterError('Please enter your email address');
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newsletterEmail)) {
            setNewsletterError('Please enter a valid email address');
            return;
        }
        setIsNewsletterLoading(true);
        try {
            const response = await fetch('/api/newsletters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: newsletterEmail.trim(),
                    source: 'footer'
                })
            });
            const data = await response.json();
            if (response.ok) {
                setNewsletterSuccess('Thank you for subscribing to our newsletter!');
                setNewsletterEmail('');
            } else {
                setNewsletterError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setNewsletterError('Something went wrong. Please try again.');
        } finally{
            setIsNewsletterLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            fetchLocations();
            fetchProjects();
        }
    }["Footer.useEffect"], []);
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchLocations = async ()=>{
        try {
            const response = await fetch('/api/locations');
            const data = await response.json();
            if (data.success) {
                // Cast the API data to Location[]
                const locationsData = data.data;
                // Remove duplicates based on _id or city
                const uniqueLocations = Array.from(new Map(locationsData.map((loc)=>[
                        loc.city,
                        loc
                    ])).values());
                setLocations(uniqueLocations);
            }
        } catch (err) {
            console.error('Error fetching locations:', err);
        } finally{
            setLoading(false);
        }
    };
    const fetchProjects = async ()=>{
        try {
            setLoading(true);
            const response = await fetch('/api/projects');
            const data = await response.json();
            if (data.success) {
                setProjects(data.data);
            }
        } catch (err) {
            console.error('Error fetching projects:', err);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "footer-area overflow-hidden w-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-links",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row g-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-3 col-sm-12 align-self-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insideBox mb-4 mb-lg-0 d-flex d-lg-block gap-4 flex-column flex-sm-row justify-content-between align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "footer-logo mb-lg-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/logo.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 46
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "socialBtn d-flex justify-content-center justify-content-lg-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://www.facebook.com/SuncityProjects/",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            "data-toggle": "tooltip",
                                                            "data-placement": "bottom",
                                                            title: "Facebook",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fab fa-facebook-f"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 158
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://www.instagram.com/suncityprojectsofficial",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            "data-toggle": "tooltip",
                                                            "data-placement": "bottom",
                                                            title: "Instagram",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fab fa-instagram"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 167
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://in.linkedin.com/company/suncityprojects",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            "data-toggle": "tooltip",
                                                            "data-placement": "bottom",
                                                            title: "LinkedIn",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fab fa-linkedin-in"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 164
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://www.youtube.com/@SuncityProjectspvtltd",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            "data-toggle": "tooltip",
                                                            "data-placement": "bottom",
                                                            title: "Youtube",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fab fa-youtube"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 162
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 193,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-2 col-sm-4 foot-menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insideBox",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "smallHeading",
                                                    children: "Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-inline",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/residential-projects",
                                                                children: "Residential"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/commercial-projects",
                                                                children: "Commercial"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/retail-projects",
                                                                children: "Retail"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/education-projects",
                                                                children: "Education"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 205,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 204,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-2 col-sm-4 foot-menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insideBox",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "smallHeading",
                                                    children: "Media"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-inline",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/blogs",
                                                                children: "Blogs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/in-the-news",
                                                                children: "News"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/awards",
                                                                children: "Awards"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 216,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 215,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-2 col-sm-4 foot-menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insideBox",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "smallHeading",
                                                    children: "Quick Links"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-inline",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/why-suncity",
                                                                children: "Careers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/contact-us",
                                                                children: "Contact"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/grievance-assistance-center",
                                                                children: "Grievance Assistance Center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 226,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 225,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-3 col-sm-12 foot-menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insideBox",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "smallHeading",
                                                    children: "Subscribe for News Update"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    className: "subscribForm",
                                                    onSubmit: handleNewsletterSubmit,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "row g-2 justify-content-center justify-content-sm-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-lg-12 col-md-8 col-sm-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "form-group d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-envelope"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Footer.tsx",
                                                                                lineNumber: 242,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "email",
                                                                                name: "newsletterEmail",
                                                                                id: "newsletterEmail",
                                                                                className: `form-control border-primary ${newsletterError ? 'is-invalid' : ''}`,
                                                                                placeholder: "Email*",
                                                                                value: newsletterEmail,
                                                                                onChange: (e)=>setNewsletterEmail(e.target.value),
                                                                                required: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Footer.tsx",
                                                                                lineNumber: 243,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Footer.tsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    newsletterError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "invalid-feedback d-block",
                                                                        children: newsletterError
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Footer.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    newsletterSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-success small mt-1",
                                                                        children: newsletterSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Footer.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-lg-6 col-md-3 col-sm-4 col-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "readmore mt-0 h-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "button button-sm bg-dark text-white mw-100 w-100 h-100",
                                                                        disabled: isNewsletterLoading,
                                                                        children: isNewsletterLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "spinner-border spinner-border-sm me-2",
                                                                                    role: "status",
                                                                                    "aria-hidden": "true"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Footer.tsx",
                                                                                    lineNumber: 274,
                                                                                    columnNumber: 16
                                                                                }, this),
                                                                                "Subscribing..."
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                "Subscribe ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "fa fa-paper-plane"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Footer.tsx",
                                                                                    lineNumber: 278,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Footer.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 236,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 235,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 192,
                                columnNumber: 6
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 191,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `toggleFooterBtn btn position-relative p-0 w-100 d-flex align-items-center justify-content-center ${isFooterExpanded ? 'active' : ''}`,
                            onClick: toggleFooter,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa fa-chevron-down icon-circular"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 293,
                                columnNumber: 6
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 289,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "more-footer",
                            className: "footer-links position-relative",
                            style: {
                                display: 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row g-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-6 col-sm-12 foot-menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insideBox",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "smallHeading",
                                                    children: "Cities"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-inline d-flex flex-wrap gap-2",
                                                    children: locations.map((data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/city/${data.city.toLowerCase()}`,
                                                                children: data.city
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 30
                                                            }, this)
                                                        }, data._id, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 11
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 298,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 297,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-6 col-sm-12 foot-menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insideBox",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "smallHeading",
                                                    children: "Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-inline d-flex flex-wrap gap-2",
                                                    children: projects.map((data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/projects/${data.slug}`,
                                                                children: data.projectName
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 30
                                                            }, this)
                                                        }, data._id, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 11
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 308,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 307,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 296,
                                columnNumber: 6
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 295,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 190,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom mb-5 mb-lg-0 pe-5 pe-lg-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "credai-logo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/logo-credai.svg",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 323,
                                            columnNumber: 36
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 323,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/disclaimer",
                                        children: "Disclaimer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 324,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/privacy-policy",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 325,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms-and-conditions",
                                        children: "Terms & Conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 326,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 322,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "copyrights",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "© Suncity Projects 2025 | Designed & Developed by: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/ecis.png"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 329,
                                            columnNumber: 65
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 329,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 328,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 321,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 320,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `button-top ${isVisible ? 'fixed' : ''}`,
                    onClick: scrollToTop,
                    style: {
                        cursor: 'pointer'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fa fa-chevron-up"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 338,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 333,
                    columnNumber: 4
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 189,
            columnNumber: 4
        }, this)
    }, void 0, false);
}
_s(Footer, "jDg6bhriYXprAWsFfpn5UNTG9/M=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/OTPVerificationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OTPVerificationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function OTPVerificationModal({ isOpen, mobile, onVerify, onClose, onCancel }) {
    _s();
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isVerifying, setIsVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [resendCooldown, setResendCooldown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isResending, setIsResending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClosing, setIsClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleVerify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OTPVerificationModal.useCallback[handleVerify]": async ()=>{
            if (otp.length !== 6) return;
            setIsVerifying(true);
            setError('');
            try {
                const success = await onVerify(otp);
                if (success) {
                    setIsClosing(true);
                    setTimeout({
                        "OTPVerificationModal.useCallback[handleVerify]": ()=>onClose()
                    }["OTPVerificationModal.useCallback[handleVerify]"], 100);
                } else {
                    setError('Invalid OTP. Please try again.');
                    setOtp('');
                }
            } catch (err) {
                setError('Verification failed. Please try again.');
                setOtp('');
            } finally{
                setIsVerifying(false);
            }
        }
    }["OTPVerificationModal.useCallback[handleVerify]"], [
        otp,
        onVerify,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OTPVerificationModal.useEffect": ()=>{
            if (otp.length === 6) {
                handleVerify();
            }
        }
    }["OTPVerificationModal.useEffect"], [
        otp,
        handleVerify
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OTPVerificationModal.useEffect": ()=>{
            if (resendCooldown > 0) {
                const timer = setTimeout({
                    "OTPVerificationModal.useEffect.timer": ()=>setResendCooldown(resendCooldown - 1)
                }["OTPVerificationModal.useEffect.timer"], 1000);
                return ({
                    "OTPVerificationModal.useEffect": ()=>clearTimeout(timer)
                })["OTPVerificationModal.useEffect"];
            }
        }
    }["OTPVerificationModal.useEffect"], [
        resendCooldown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OTPVerificationModal.useEffect": ()=>{
            if (isOpen && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const timer = setTimeout({
                    "OTPVerificationModal.useEffect.timer": ()=>{
                        const input = document.getElementById('otp-input');
                        if (input) {
                            input.focus();
                        }
                    }
                }["OTPVerificationModal.useEffect.timer"], 100);
                return ({
                    "OTPVerificationModal.useEffect": ()=>clearTimeout(timer)
                })["OTPVerificationModal.useEffect"];
            }
        }
    }["OTPVerificationModal.useEffect"], [
        isOpen
    ]);
    const handleResend = async ()=>{
        if (resendCooldown > 0 || isResending) return;
        setIsResending(true);
        setError('');
        try {
            let fullMobile = mobile;
            if ("TURBOPACK compile-time truthy", 1) {
                const mobileInput = document.getElementById('mmobile');
                if (mobileInput && window.intlTelInput) {
                    const iti = window.intlTelInput.getInstance(mobileInput);
                    if (iti) {
                        const fullNumber = iti.getNumber();
                        if (fullNumber) {
                            fullMobile = fullNumber;
                        }
                    }
                }
            }
            const response = await fetch('/api/otp/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mobile: fullMobile
                })
            });
            const result = await response.json();
            if (response.ok) {
                setResendCooldown(30);
                setOtp('');
            } else {
                setError(result.error || 'Failed to resend OTP');
            }
        } catch (err) {
            setError('Failed to resend OTP. Please try again.');
        } finally{
            setIsResending(false);
        }
    };
    const handleOtpChange = (e)=>{
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 6) {
            setOtp(value);
            setError('');
        }
    };
    if (!isOpen || isClosing) return null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const modalContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop fade show"
            }, void 0, false, {
                fileName: "[project]/components/OTPVerificationModal.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal fade show",
                style: {
                    display: 'block',
                    zIndex: 1055
                },
                tabIndex: -1,
                "aria-labelledby": "otpModalLabel",
                "aria-modal": "true",
                role: "dialog",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-dialog modal-dialog-centered",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-body p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "close",
                                    onClick: onCancel || onClose,
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/OTPVerificationModal.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/OTPVerificationModal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-logo mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/logo.svg",
                                                alt: "Suncity Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/components/OTPVerificationModal.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/OTPVerificationModal.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "modal-title",
                                            children: "Verify Your Mobile Number"
                                        }, void 0, false, {
                                            fileName: "[project]/components/OTPVerificationModal.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted small",
                                            children: [
                                                "We've sent a 6-digit OTP to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: mobile
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OTPVerificationModal.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/OTPVerificationModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/OTPVerificationModal.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "alert alert-danger small py-2 rounded-0",
                                    role: "alert",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/OTPVerificationModal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "otp-input",
                                            className: "form-control text-center border-primary",
                                            placeholder: "Enter 6-digit OTP",
                                            value: otp,
                                            onChange: handleOtpChange,
                                            maxLength: 6,
                                            disabled: isVerifying,
                                            style: {
                                                fontSize: '1.5rem',
                                                letterSpacing: '0.5rem'
                                            },
                                            autoComplete: "off",
                                            autoFocus: true,
                                            onFocus: (e)=>{
                                                e.target.select();
                                            },
                                            onKeyDown: (e)=>{}
                                        }, void 0, false, {
                                            fileName: "[project]/components/OTPVerificationModal.tsx",
                                            lineNumber: 155,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/OTPVerificationModal.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/OTPVerificationModal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "btn btn-link text-primary small",
                                        onClick: handleResend,
                                        disabled: resendCooldown > 0 || isResending,
                                        children: isResending ? 'Sending...' : resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend OTP'
                                    }, void 0, false, {
                                        fileName: "[project]/components/OTPVerificationModal.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/OTPVerificationModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "text-muted",
                                        children: "Didn't receive the OTP? Check your SMS or try resending."
                                    }, void 0, false, {
                                        fileName: "[project]/components/OTPVerificationModal.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/OTPVerificationModal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/OTPVerificationModal.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/OTPVerificationModal.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/OTPVerificationModal.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/OTPVerificationModal.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalContent, document.body);
}
_s(OTPVerificationModal, "+5VU3DB47RLCL8kPdiVWRzZa1HI=");
_c = OTPVerificationModal;
var _c;
__turbopack_context__.k.register(_c, "OTPVerificationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FormModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/formHandlers'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OTPVerificationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/OTPVerificationModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FormModal() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [modalHeading, setModalHeading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Register Your Interest');
    const [pageName, setPageName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showVisitDate, setShowVisitDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEnquiryType, setShowEnquiryType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusType, setStatusType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // OTP verification states
    const [showOTPModal, setShowOTPModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingFormData, setPendingFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [otpMobile, setOtpMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormModal.useEffect": ()=>{
            setPageName(window.location.href.toString());
        }
    }["FormModal.useEffect"], []);
    // Function to clear field errors when user starts typing
    const clearFieldError = (fieldName)=>{
        if (fieldErrors[fieldName]) {
            setFieldErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[fieldName];
                return newErrors;
            });
        }
    };
    // Function to generate OTP
    const generateOTP = async (mobile)=>{
        try {
            const response = await fetch('/api/otp/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mobile
                })
            });
            const result = await response.json();
            return response.ok ? {
                success: true,
                data: result
            } : {
                success: false,
                error: result.error
            };
        } catch (error) {
            console.error('OTP generation error:', error);
            return {
                success: false,
                error: 'Failed to generate OTP'
            };
        }
    };
    // Function to verify OTP
    const verifyOTP = async (otp)=>{
        try {
            const response = await fetch('/api/otp/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mobile: otpMobile,
                    otp
                })
            });
            const result = await response.json();
            return response.ok && result.verified;
        } catch (error) {
            console.error('OTP verification error:', error);
            return false;
        }
    };
    // Function to handle OTP verification success
    const handleOTPVerified = async ()=>{
        if (!pendingFormData) return;
        setShowOTPModal(false);
        setIsSubmitting(true);
        setStatusMessage('');
        // Ensure source field is always set
        if (!pendingFormData.get('msource')) {
            pendingFormData.set('msource', modalHeading || 'Register Your Interest');
        }
        const result = await submitProjectEnquiryForm(pendingFormData);
        setStatusMessage(result.message);
        setStatusType(result.success ? 'success' : 'error');
        if (result.success) {
            // Reset form safely
            const form = document.getElementById('modal_form');
            if (form) {
                form.reset();
            }
            // Reset submitting state immediately for success
            setIsSubmitting(false);
            // Navigate to thank you page after 2 seconds
            setTimeout(()=>{
                // Navigate to thank you page
                window.location.href = '/thank-you';
            }, 2000);
        } else {
            // Only reset submitting state if not successful
            setIsSubmitting(false);
        }
        // Clear pending data
        setPendingFormData(null);
        setOtpMobile('');
    };
    // Function to handle OTP modal close (user cancellation)
    const handleOTPModalClose = ()=>{
        setShowOTPModal(false);
        setPendingFormData(null);
        setOtpMobile('');
        setIsSubmitting(false);
        // Optionally reopen the form modal
        if ("TURBOPACK compile-time truthy", 1) {
            setTimeout(()=>{
                const formModal = document.getElementById('formModal');
                if (formModal) {
                    const bootstrap = window.bootstrap;
                    if (bootstrap) {
                        const modalInstance = new bootstrap.Modal(formModal);
                        modalInstance.show();
                    }
                }
            }, 300);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormModal.useEffect": ()=>{
            // Only run on client side to prevent SSR issues
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Handle modal opening from buttons
            const handleModalOpen = {
                "FormModal.useEffect.handleModalOpen": (e)=>{
                    const target = e.target;
                    const source = target.getAttribute('data-bs-source');
                    if (source) {
                        setModalHeading(source);
                        setShowVisitDate(source.includes('site visit'));
                        setShowEnquiryType(source.includes('enquire'));
                    }
                }
            }["FormModal.useEffect.handleModalOpen"];
            // Add event listeners for modal triggers
            document.addEventListener('click', {
                "FormModal.useEffect": (e)=>{
                    const target = e.target;
                    if (target.matches('[data-bs-toggle="modal"]') && target.getAttribute('href') === '#formModal') {
                        handleModalOpen(e);
                    }
                }
            }["FormModal.useEffect"]);
            // Update modal heading when modal is shown
            const modal = document.getElementById('formModal');
            if (modal) {
                modal.addEventListener('show.bs.modal', {
                    "FormModal.useEffect": (e)=>{
                        const trigger = e.relatedTarget;
                        if (trigger) {
                            const source = trigger.getAttribute('data-bs-source');
                            if (source) {
                                setModalHeading(source);
                                setShowVisitDate(source.includes('site visit'));
                                setShowEnquiryType(source.includes('enquire'));
                            }
                        }
                    }
                }["FormModal.useEffect"]);
            }
            return ({
                "FormModal.useEffect": ()=>{
                // Cleanup event listeners if needed
                }
            })["FormModal.useEffect"];
        }
    }["FormModal.useEffect"], []);
    const validateForm = (formData)=>{
        const errors = {};
        // Required field validation
        const name = formData.get('mname');
        const email = formData.get('memail');
        const mobile = formData.get('mmobile');
        if (!name || name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters long';
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!mobile || mobile.trim().length < 10) {
            errors.mobile = 'Mobile number must be at least 10 digits';
        }
        // Conditional validation for enquiry type
        if (showEnquiryType) {
            const enquiryType = formData.get('con_enquiry_type');
            if (!enquiryType || enquiryType.trim() === '') {
                errors.enquiryType = 'Please select an enquiry type';
            }
        }
        // Conditional validation for visit date
        if (showVisitDate) {
            const visitDate = formData.get('mdate');
            if (!visitDate || visitDate.trim() === '') {
                errors.visitDate = 'Please select a visit date';
            } else {
                const selectedDate = new Date(visitDate);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    errors.visitDate = 'Visit date cannot be in the past';
                }
            }
        }
        return errors;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');
        const formData = new FormData(e.currentTarget);
        // Validate form
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setFieldErrors(validationErrors);
            setStatusMessage('Please correct the errors below');
            setStatusType('error');
            setIsSubmitting(false);
            return;
        }
        // Clear field errors if validation passes
        setFieldErrors({});
        // Get mobile number for OTP - handle ISD code properly
        let mobile = formData.get('mmobile');
        if (!mobile) {
            setStatusMessage('Mobile number is required');
            setStatusType('error');
            setIsSubmitting(false);
            return;
        }
        // Check if we have the intlTelInput instance and get the full international number
        if ("TURBOPACK compile-time truthy", 1) {
            const mobileInput = document.getElementById('mmobile');
            if (mobileInput && window.intlTelInput) {
                const iti = window.intlTelInput.getInstance(mobileInput);
                if (iti) {
                    const fullNumber = iti.getNumber();
                    if (fullNumber) {
                        mobile = fullNumber;
                    }
                }
            }
        }
        // Generate and send OTP
        const otpResult = await generateOTP(mobile);
        if (!otpResult.success) {
            setStatusMessage(otpResult.error || 'Failed to send OTP. Please try again.');
            setStatusType('error');
            setIsSubmitting(false);
            return;
        }
        // Store form data and show OTP modal
        setPendingFormData(formData);
        setOtpMobile(mobile);
        // Close the form modal first
        if ("TURBOPACK compile-time truthy", 1) {
            const formModal = document.getElementById('formModal');
            if (formModal) {
                const bootstrap = window.bootstrap;
                if (bootstrap) {
                    const modalInstance = bootstrap.Modal.getInstance(formModal);
                    if (modalInstance) {
                        modalInstance.hide();
                    }
                }
            }
            // Clean up any existing modal backdrops
            const existingBackdrops = document.querySelectorAll('.modal-backdrop');
            existingBackdrops.forEach((backdrop)=>{
                if (backdrop.parentNode) {
                    backdrop.parentNode.removeChild(backdrop);
                }
            });
        }
        // Show OTP modal after a short delay to allow form modal to close
        setTimeout(()=>{
            setShowOTPModal(true);
        }, 500);
        setIsSubmitting(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal fade",
                id: "formModal",
                tabIndex: -1,
                "aria-labelledby": "formModalLabel",
                "aria-modal": "true",
                role: "dialog",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-dialog modal-dialog-centered ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-body p-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "close",
                                    "data-bs-dismiss": "modal",
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FormModal.tsx",
                                        lineNumber: 324,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/FormModal.tsx",
                                    lineNumber: 323,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row gx-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "form-container p-4 p-md-5",
                                            id: "modal_form",
                                            method: "post",
                                            onSubmit: handleSubmit,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "modal-logo",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/logo.svg",
                                                        alt: "Suncity Projects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FormModal.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 38
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FormModal.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "modal-title text-center mb-3",
                                                    children: [
                                                        "Fill the fields to ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            id: "modal-heading",
                                                            children: modalHeading
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 73
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/FormModal.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 10
                                                }, this),
                                                statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `alert small py-2 rounded-0 ${statusType === 'success' ? 'alert-success' : 'alert-danger'}`,
                                                    role: "alert",
                                                    children: statusMessage
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FormModal.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "row g-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            id: "enquire-to-whom-field",
                                                            className: `col-12 ${showEnquiryType ? '' : 'd-none'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "form-group d-flex",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-clipboard-question"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 344,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            id: "con_enquiry_type",
                                                                            name: "con_enquiry_type",
                                                                            className: "form-control form-select border-primary",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: "Select"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                                    lineNumber: 346,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Corporate Office",
                                                                                    children: "Corporate Office"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                                    lineNumber: 347,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Sales",
                                                                                    children: "Sales"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                                    lineNumber: 348,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Customer Support",
                                                                                    children: "Customer Support"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                                    lineNumber: 349,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 345,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 12
                                                                }, this),
                                                                fieldErrors.enquiryType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-danger small mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-exclamation-circle me-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 354,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        fieldErrors.enquiryType
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "form-group d-flex",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-user"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 361,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            name: "mname",
                                                                            id: "mname",
                                                                            className: "form-control border-primary",
                                                                            placeholder: "Name*",
                                                                            autoComplete: "false",
                                                                            onFocus: (e)=>e.target.placeholder = '',
                                                                            onBlur: (e)=>e.target.placeholder = 'Name*',
                                                                            onChange: ()=>clearFieldError('name')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 361,
                                                                            columnNumber: 43
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 12
                                                                }, this),
                                                                fieldErrors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-danger small mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-exclamation-circle me-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 365,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        fieldErrors.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 364,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "form-group d-flex",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-envelope"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 372,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "email",
                                                                            name: "memail",
                                                                            id: "memail",
                                                                            className: "form-control border-primary",
                                                                            placeholder: "Email*",
                                                                            autoComplete: "false",
                                                                            onFocus: (e)=>e.target.placeholder = '',
                                                                            onBlur: (e)=>e.target.placeholder = 'Email*',
                                                                            onChange: ()=>clearFieldError('email')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 372,
                                                                            columnNumber: 47
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 12
                                                                }, this),
                                                                fieldErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-danger small mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-exclamation-circle me-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 376,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        fieldErrors.email
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "form-group d-flex w-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-phone"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            name: "mmobile",
                                                                            id: "mmobile",
                                                                            className: "form-control border-primary ISDCode",
                                                                            placeholder: "Mobile*",
                                                                            autoComplete: "false",
                                                                            onFocus: (e)=>e.target.placeholder = '',
                                                                            onBlur: (e)=>e.target.placeholder = 'Mobile*',
                                                                            onChange: ()=>clearFieldError('mobile')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 44
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 12
                                                                }, this),
                                                                fieldErrors.mobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-danger small mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-exclamation-circle me-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 387,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        fieldErrors.mobile
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            id: "visit-date",
                                                            className: `col-12 ${showVisitDate ? '' : 'd-none'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "form-group d-flex",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-calendar-days"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 394,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "date",
                                                                            name: "mdate",
                                                                            id: "mdate",
                                                                            className: "form-control border-primary",
                                                                            placeholder: "Date*",
                                                                            autoComplete: "false",
                                                                            min: new Date().toISOString().split('T')[0],
                                                                            onFocus: (e)=>e.target.placeholder = '',
                                                                            onBlur: (e)=>e.target.placeholder = 'Date*'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 394,
                                                                            columnNumber: 52
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 393,
                                                                    columnNumber: 12
                                                                }, this),
                                                                fieldErrors.visitDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-danger small mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa fa-exclamation-circle me-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FormModal.tsx",
                                                                            lineNumber: 398,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        fieldErrors.visitDate
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/FormModal.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "form-check",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "form-check-input",
                                                                        type: "checkbox",
                                                                        value: "",
                                                                        id: "update"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FormModal.tsx",
                                                                        lineNumber: 405,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "form-check-label small",
                                                                        htmlFor: "update",
                                                                        children: "Keep me updated on news and offer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FormModal.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/FormModal.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                style: {
                                                                    fontSize: '0.75rem'
                                                                },
                                                                children: [
                                                                    "Please visit the ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/privacy-policy",
                                                                        target: "_blank",
                                                                        className: "text-decoration-underline",
                                                                        children: "privacy policy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FormModal.tsx",
                                                                        lineNumber: 410,
                                                                        columnNumber: 68
                                                                    }, this),
                                                                    " to understand how Suncity Projects handles your personal data."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/FormModal.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "readmore mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "hidden",
                                                                        name: "operation",
                                                                        value: "modal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FormModal.tsx",
                                                                        lineNumber: 414,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "hidden",
                                                                        name: "mpagename",
                                                                        id: "mpagename",
                                                                        value: pageName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FormModal.tsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "hidden",
                                                                        name: "msource",
                                                                        id: "msource",
                                                                        value: modalHeading
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FormModal.tsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        id: "mbtnpopup",
                                                                        className: "button bg-dark text-white mw-100 w-100",
                                                                        disabled: isSubmitting,
                                                                        children: isSubmitting ? 'Sending OTP...' : 'Register Your Interest'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FormModal.tsx",
                                                                        lineNumber: 417,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/FormModal.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FormModal.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/FormModal.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/FormModal.tsx",
                                            lineNumber: 333,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/FormModal.tsx",
                                        lineNumber: 332,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/FormModal.tsx",
                                    lineNumber: 326,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FormModal.tsx",
                            lineNumber: 322,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FormModal.tsx",
                        lineNumber: 321,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/FormModal.tsx",
                    lineNumber: 320,
                    columnNumber: 4
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FormModal.tsx",
                lineNumber: 319,
                columnNumber: 3
            }, this),
            ("TURBOPACK compile-time value", "object") !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OTPVerificationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showOTPModal,
                mobile: otpMobile,
                onVerify: verifyOTP,
                onClose: handleOTPVerified,
                onCancel: handleOTPModalClose
            }, void 0, false, {
                fileName: "[project]/components/FormModal.tsx",
                lineNumber: 438,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_s(FormModal, "mTHS2vAmHw95Vh0dIWEZ5noba3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FormModal;
var _c;
__turbopack_context__.k.register(_c, "FormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Chrome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chrome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FormModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Chrome({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const hideChromeRoutes = [
        '/laxmi-narayan-goel',
        '/subhash-chander-aggarwal',
        '/varun-aggarwal',
        '/arpit-goel',
        '/ankit-goel'
    ];
    // Hide header and footer for admin panel
    if (pathname?.startsWith('/admin')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    const shouldHide = hideChromeRoutes.includes(pathname || '');
    if (shouldHide) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Chrome.tsx",
                lineNumber: 29,
                columnNumber: 4
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Chrome.tsx",
                lineNumber: 31,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Chrome.tsx",
                lineNumber: 32,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_s(Chrome, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Chrome;
var _c;
__turbopack_context__.k.register(_c, "Chrome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AOSInit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AOSInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AOSInit() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AOSInit.useEffect": ()=>{
            function initAOS() {
                const win = window;
                if (win && win.AOS && typeof win.AOS.init === 'function') {
                    // Initialize AOS with better settings for client-side navigation
                    win.AOS.init({
                        duration: 1200,
                        once: false,
                        offset: 100,
                        delay: 0
                    });
                    // Try to refresh a few times to ensure elements in late-loaded sections animate
                    try {
                        win.AOS.refreshHard && win.AOS.refreshHard();
                    } catch  {}
                    setTimeout({
                        "AOSInit.useEffect.initAOS": ()=>{
                            try {
                                win.AOS.refresh && win.AOS.refresh();
                            } catch  {}
                        }
                    }["AOSInit.useEffect.initAOS"], 200);
                    setTimeout({
                        "AOSInit.useEffect.initAOS": ()=>{
                            try {
                                win.AOS.refreshHard && win.AOS.refreshHard();
                            } catch  {}
                        }
                    }["AOSInit.useEffect.initAOS"], 600);
                    return true;
                }
                return false;
            }
            // Try immediately
            if (!initAOS()) {
                // Retry a few times in case script loads slightly later
                let attempts = 0;
                const timer = setInterval({
                    "AOSInit.useEffect.timer": ()=>{
                        attempts++;
                        if (initAOS() || attempts > 10) {
                            clearInterval(timer);
                        }
                    }
                }["AOSInit.useEffect.timer"], 200);
                return ({
                    "AOSInit.useEffect": ()=>clearInterval(timer)
                })["AOSInit.useEffect"];
            }
        }
    }["AOSInit.useEffect"], [
        pathname
    ]); // Re-run when pathname changes
    return null;
}
_s(AOSInit, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AOSInit;
var _c;
__turbopack_context__.k.register(_c, "AOSInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_7946f422._.js.map