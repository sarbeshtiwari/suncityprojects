'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PropertySearchProps {
  placeholder?: string;
  showTrendingProperties?: boolean;
}

interface Location {
  _id: string;
  name: string;
  city: string;
  state: string;
  country: string;
}

export default function PropertySearch({ 
  placeholder = "Project Name/ Location",
  showTrendingProperties = true 
}: PropertySearchProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);
  const [loadingLocations, setLoadingLocations] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [availablePropertyTypes, setAvailablePropertyTypes] = useState<string[]>([]);
  const [loadingFilteredData, setLoadingFilteredData] = useState(false);
  const [isFormReset, setIsFormReset] = useState(false);

  // Reset form state function - only reset when explicitly called
  const resetFormState = () => {
    // Only reset if not currently in the middle of a form interaction
    if (!isFormReset) {
      setIsFormReset(true);
      setSearchQuery('');
      setPropertyType('');
      setLocation('');
      setFilteredLocations(locations);
      setAvailablePropertyTypes([]);
      setLoadingFilteredData(false);
      
      // Reset the flag after a short delay
      setTimeout(() => {
        setIsFormReset(false);
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query parameters
    const queryParams = new URLSearchParams();
    
    if (searchQuery.trim()) {
      const normalizeSearchTerm = (term: string) => {
        return term
          // Map tokens starting with "gur..." to Gurgaon (e.g., gur, gurg, gurugram)
          .replace(/\bgur[a-z]*\b/gi, 'Gurgaon')
          .replace(/\bugram\b/gi, 'Gurgaon')
          .replace(/\bugra\b/gi, 'Gurgaon')
          .replace(/\bgra\b/gi, 'Gurgaon')
          .replace(/\bram\b/gi, 'Gurgaon')
          .replace(/\bgram\b/gi, 'Gurgaon');
      };

      const normalizedSearch = normalizeSearchTerm(searchQuery.trim());
      queryParams.set('search', normalizedSearch);
    }
    
    if (propertyType) {
      queryParams.set('propertyType', propertyType);
    }
    
    if (location) {
      queryParams.set('city', location);
    }
    
    // Navigate to projects listing page with all filters
    const queryString = queryParams.toString();
    router.push(`/projects${queryString ? `?${queryString}` : ''}`);
    
    // Close the search form after navigation
    closeSearchForm();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  // Reset form state on component mount only
  useEffect(() => {
    // Only reset on initial mount, not on every render
    const hasInitialized = sessionStorage.getItem('propertySearchInitialized');
    if (!hasInitialized) {
      // Only reset the form fields, don't trigger the full reset logic
      setSearchQuery('');
      setPropertyType('');
      setLocation('');
      setAvailablePropertyTypes([]);
      setLoadingFilteredData(false);
      sessionStorage.setItem('propertySearchInitialized', 'true');
    }
  }, []);

  // Add a delay to prevent immediate reset when search form opens
  useEffect(() => {
    const handleSearchFormOpen = () => {
      // Small delay to prevent interference with search form opening
      setTimeout(() => {
        // Only reset if we have search parameters in URL (indicating we came from search results)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('search') || urlParams.has('propertyType') || urlParams.has('city')) {
          // Clear URL parameters and reset form
          window.history.replaceState({}, '', window.location.pathname);
          setSearchQuery('');
          setPropertyType('');
          setLocation('');
          setAvailablePropertyTypes([]);
          setLoadingFilteredData(false);
        }
      }, 200);
    };

    // Listen for search form open events
    if (typeof window !== 'undefined') {
      window.addEventListener('searchFormOpen', handleSearchFormOpen);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('searchFormOpen', handleSearchFormOpen);
      }
    };
  }, []);

  // Fetch locations on component mount
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoadingLocations(true);
        const response = await fetch('/api/locations');
        const data = await response.json();
        
        if (data.success) {
          setLocations(data.data);
          setFilteredLocations(data.data);
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setLoadingLocations(false);
      }
    };

    fetchLocations();
  }, []);

  // Cleanup effect - only reset session storage on unmount
  useEffect(() => {
    return () => {
      // Clear the initialization flag when component unmounts
      sessionStorage.removeItem('propertySearchInitialized');
    };
  }, []);

  // Only reset form state when user explicitly navigates back from search results
  useEffect(() => {
    const handlePopState = () => {
      // Only reset if we're coming back from a search results page
      if (window.location.pathname === '/' && window.location.search === '') {
        // Only reset form fields, don't trigger full reset logic
        setSearchQuery('');
        setPropertyType('');
        setLocation('');
        setAvailablePropertyTypes([]);
        setLoadingFilteredData(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Fetch filtered locations based on property type
  const fetchFilteredLocations = async (selectedPropertyType: string) => {
    if (!selectedPropertyType) {
      setFilteredLocations(locations);
      return;
    }

    try {
      setLoadingFilteredData(true);
      const response = await fetch(`/api/projects/locations?propertyType=${encodeURIComponent(selectedPropertyType)}`);
      const data = await response.json();
      
      if (data.success) {
        setFilteredLocations(data.data);
        // If no locations available, reset location selection
        if (data.data.length === 0) {
          setLocation('');
        }
      }
    } catch (error) {
      console.error('Error fetching filtered locations:', error);
      setFilteredLocations(locations);
      setLocation('');
    } finally {
      setLoadingFilteredData(false);
    }
  };

  // Fetch available property types based on city
  const fetchAvailablePropertyTypes = async (selectedCity: string) => {
    if (!selectedCity) {
      setAvailablePropertyTypes([]);
      return;
    }

    try {
      setLoadingFilteredData(true);
      const response = await fetch(`/api/projects/property-types?city=${encodeURIComponent(selectedCity)}`);
      const data = await response.json();
      
      if (data.success) {
        setAvailablePropertyTypes(data.data);
        // If no property types available, reset property type selection
        if (data.data.length === 0) {
          setPropertyType('');
        }
      }
    } catch (error) {
      console.error('Error fetching available property types:', error);
      setAvailablePropertyTypes([]);
      setPropertyType('');
    } finally {
      setLoadingFilteredData(false);
    }
  };

  // Handle property type change
  const handlePropertyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    setPropertyType(selectedType);
    
    // Reset location when property type changes
    // setLocation('');
    
    // Fetch filtered locations for this property type
    fetchFilteredLocations(selectedType);
  };

  // Handle location change
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = e.target.value;
    setLocation(selectedCity);
    
    // Reset property type when location changes
    // setPropertyType('');
    
    // Fetch available property types for this city
    fetchAvailablePropertyTypes(selectedCity);
  };

  // Handle form reset
  const handleFormReset = () => {
    resetFormState();
  };

  // Helper function to close search form
  const closeSearchForm = () => {
    setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).closeSearch) {
        (window as any).closeSearch();
      }
    }, 100);
  };

  return (
    <div className="row g-0 justify-content-center position-relative mb-5" style={{ zIndex: 2 }} data-aos="fade-in">
      <div className="col-xxl-6 col-lg-8 col-md-11 search-bar position-relative">
        <button 
          className="p-3 bg-white shadow rounded-0 w-100 border-0 d-flex align-items-center justify-content-between"
          onClick={() => (window as any).openSearch && (window as any).openSearch()}
        >
          <div className="d-flex align-items-center gap-3">
            <i className="icon">
              <svg x="0px" y="0px" viewBox="0 0 24 24" style={{ fill: "none", stroke: "var(--primary-color)", width: "1.25rem" }}>
                <path d="M18.3,17.3c-0.3,0.3-0.6,0.7-1,1l5.5,5.5C23,24,23.2,24,23.3,24c0.1,0,0.3,0,0.5-0.2c0.2-0.2,0.2-0.4,0.2-0.5
                  c0-0.1,0-0.3-0.2-0.5L18.3,17.3L18.3,17.3z" />
                <circle cx="10.3" cy="10.3" r="10" />
              </svg>
            </i>
            <span className="small text-uppercase">Find Your Dream <span className="text-primary">Property</span></span>
          </div>
          <div className="icon-button spin mt-0">
            <div className="round-button">
              <div className="circle"></div><i className="fa fa-chevron-right"></i>
            </div>
          </div>
        </button>
        <div id="searchFormWrapper" className="search-form-wrapper bg-white shadow position-absolute top-0 start-0 w-100">
          <div className="search-form p-3">
            <form onSubmit={handleSearch}>
              <div className="row justify-content-center gx-2 gy-4">
                <div className="col-12 search-field">
                  <div className="d-flex align-items-center gap-3 border-bottom">
                    <i className="icon">
                      <svg x="0px" y="0px" viewBox="0 0 24 24" style={{ fill: "none", stroke: "var(--primary-color)", width: "1.5rem" }}>
                        <path d="M18.3,17.3c-0.3,0.3-0.6,0.7-1,1l5.5,5.5C23,24,23.2,24,23.3,24c0.1,0,0.3,0,0.5-0.2c0.2-0.2,0.2-0.4,0.2-0.5
                        c0-0.1,0-0.3-0.2-0.5L18.3,17.3L18.3,17.3z" />
                        <circle cx="10.3" cy="10.3" r="10" />
                      </svg>
                    </i>
                    <div className="form-floating col">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="searchProperty" 
                        placeholder=""
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                      <label className="small text-uppercase text-golden" htmlFor="searchProperty">{placeholder}</label>
                    </div>
                    <button 
                      type="button" 
                      className="p-0 btn icon-button mt-0"
                      onClick={(e) => { e.preventDefault(); (window as any).closeSearch && (window as any).closeSearch(); }}
                    >
                      <div className="round-button me-0">
                        <div className="circle"></div><i className="fa fa-chevron-up"></i>
                      </div>
                    </button>
                  </div>
                  {showTrendingProperties && (
                    <div className="trending-capsule p-3 bg-light">
                      <small>Trending Properties</small>
                      <div className="d-flex flex-wrap gap-2 mt-3">
                        <Link
                          href="/projects/jewel-of-india"
                          className="btn btn-sm btn-outline-primary rounded-pill"
                        >
                          Jewel of India <small>Phase-II</small>
                        </Link>
                        <Link 
                          href="/projects/jewel-tower"
                          className="btn btn-sm btn-outline-primary rounded-pill"
                        >
                          Jewel Tower
                        </Link>
                        <Link
                          href={"/projects/suncity-ultima"}
                          className="btn btn-sm btn-outline-primary rounded-pill"
                        >
                          Suncity Ultima
                        </Link>
                        <Link
                          href={"/projects/the-empire"}
                          className="btn btn-sm btn-outline-primary rounded-pill"
                          onClick={() => {
                            router.push(`/projects?search=${encodeURIComponent('The Empire')}`);
                            // Close the search form after navigation
                            closeSearchForm();
                          }}
                        >
                          The Empire
                        </Link>
                        <Link
                          href={"/projects/jewel-farms"}
                          className="btn btn-sm btn-outline-primary rounded-pill"
                        >
                          Jewel Farms
                        </Link>
                        <Link
                          href={"/projects/the-empire-centre"}
                          className="btn btn-sm btn-outline-primary rounded-pill"
                        >
                          The Empire Centre
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-sm-6 search-field">
                  <div className="form-floating">
                    <select 
                      className="form-select rounded-0" 
                      id="propertyType" 
                      aria-label="Floating label select example"
                      value={propertyType}
                      onChange={handlePropertyTypeChange}
                      disabled={loadingFilteredData || (!!location && availablePropertyTypes.length === 0)}
                      onFocus={(e) => {
                        e.stopPropagation();
                        // Prevent reset when user is interacting with dropdown
                        setIsFormReset(false);
                      }}
                      onBlur={(e) => {
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Prevent reset when user is clicking on dropdown
                        setIsFormReset(false);
                      }}
                    >
                      <option value="">
                        {location && availablePropertyTypes.length === 0 
                          ? 'No projects in this location' 
                          : 'Select Property Type'
                        }
                      </option>
                      {availablePropertyTypes.length > 0 ? (
                        availablePropertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </option>
                        ))
                      ) : !location ? (
                        <>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="retail">Retail</option>
                          <option value="education">Education</option>
                        </>
                      ) : null}
                    </select>
                    <label className="small text-uppercase" htmlFor="propertyType">
                      {loadingFilteredData ? 'Loading...' : 'Property Type'}
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 search-field">
                  <div className="form-floating">
                    <select 
                      className="form-select rounded-0" 
                      id="location" 
                      aria-label="Floating label select example"
                      value={location}
                      onChange={handleLocationChange}
                      disabled={loadingLocations || loadingFilteredData || (!!propertyType && filteredLocations.length === 0)}
                      onFocus={(e) => {
                        e.stopPropagation();
                        // Prevent reset when user is interacting with dropdown
                        setIsFormReset(false);
                      }}
                      onBlur={(e) => {
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Prevent reset when user is clicking on dropdown
                        setIsFormReset(false);
                      }}
                    >
                      <option value="">
                        {propertyType && filteredLocations.length === 0 
                          ? 'No locations for this property type' 
                          : 'Choose Location'
                        }
                      </option>
                      {filteredLocations.length > 0 ? (
                        [...new Set(filteredLocations.map(loc => loc.city))]
                          .sort()
                          .map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))
                      ) : !propertyType ? (
                        [...new Set(locations.map(loc => loc.city))]
                          .sort()
                          .map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))
                      ) : null}
                    </select>
                    <label className="small text-uppercase" htmlFor="location">
                      {loadingLocations || loadingFilteredData ? 'Loading Locations...' : 'Location'}
                    </label>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="readmore mt-0">
                    <button type="submit" className="button w-100 mw-100 mx-auto">Apply</button>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary btn-sm w-100 mt-2" 
                      onClick={handleFormReset}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
