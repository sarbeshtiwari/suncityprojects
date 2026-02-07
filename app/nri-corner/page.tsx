'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NRICorner() {
	useEffect(() => {
		// Initialize accordion functionality
		const initAccordion = () => {
			const items = document.querySelectorAll(".accordion-list > li");

			items.forEach((item: any) => {
				const answer = item.querySelector(".answer");
				if (answer) {
					answer.style.display = "none"; // Hide all answers initially
				}

				item.addEventListener("click", function(this: HTMLElement) {
					const isActive = this.classList.contains("active");

					// Close any open accordion items
					document.querySelectorAll(".accordion-list > li.active").forEach((activeItem: any) => {
						activeItem.classList.remove("active");
						const activeAnswer = activeItem.querySelector(".answer");
						if (activeAnswer) {
							activeAnswer.style.display = "none";
						}
					});

					if (!isActive) {
						this.classList.add("active");
						if (answer) {
							answer.style.display = "block"; // Show current item
						}
					}
				});
			});
		};

		// Initialize after DOM is ready
		setTimeout(initAccordion, 100);
	}, []);

	return (
		<>
			<main>
				{/* Empty Box for spacing */}
				<div className="emptyBox"></div>

				{/* Breadcrumb */}
				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item active">NRI Corner</li>
						</ol>         
					</div>
				</div>

				{/* Loan for NRI Section */}
				<div id="loan-for-nri" className="w-100 padding position-relative about-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">NRI Loan</p>
					</div>
					<div className="container-lg">
						<div className="row flex-row-reverse gy-5">
							<div className="col-xl-5 side-imgWrapper">
								<img src="/images/nri-image.webp" className="h-100 object-cover" alt="NRI" />
							</div>
							<div className="col-xl-7 about-text text-center text-xl-start">
								<div className="inner pe-xl-5" data-aos="fade-in">
									<div className="heading mx-auto ms-xl-0 text-center text-xl-start" data-aos="fade-in">
										<h1 className="title-xxl mb-3 text-primary">Loan For NRI</h1>
										<p className="h2 fw-lighter text-primary mb-0">NRIs are recognised under the Foreign Exchange Regulatory Act, 1973.</p>
									</div>
									<p>Every financial institution in India follows the RBI guidelines that define an NRI as - "An Indian citizen who holds a valid document like Indian passport and who stays abroad for employment or for carrying on business or vocation outside India or stays abroad under circumstances indicating an intention for an uncertain duration of stay abroad is a NRI."</p>
									<p>Home loans for NRIs are available for the construction of new residences, purchase of old houses/flats, repairs/renovation/alternations etc. NRIs can also avail of loans by mortgaging an existing residential property. However, basis the Income Tax Act an NRI should have stayed in India for a period of 182 days or more (within an assessment year) or they should have stayed in India for at least a total of one year or more.</p>
									<p className="mb-0">The FDI Policy that permits FDI up to 100% from foreign/NRI investor under the automatic route has boosted NRI confidence. Furthermore banks have attractive NRI housing schemes as well.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Qualification Criteria Section */}
				<div id="nri-faq" className="w-100 padding position-relative bg-light qualify-section">
					<div className="container-lg">
						<div className="heading text-center text-xl-start">
							<h3 className="h3 fw-lighter mb-0 text-primary">To qualify for an NRI Home Loan, you need to meet any one of the following criteria</h3>
						</div>
						<div className="listContainer">
							<ul className="list-unstyled d-flex flex-wrap gap-4">
								<li>Indian citizens who stay abroad for employment or for carrying on business or vocation outside India.</li>
								<li>Indian citizens who stay abroad under circumstances indicating an intention for an uncertain duration of stay abroad.</li>
								<li>Government servants who are posted abroad on duty with Indian missions.</li>
								<li>Officials deputed abroad by Central/State Governments and Public Sector undertakings on temporary assignments or posted to branches or offices abroad.</li>
								<li>Indian citizens working abroad on assignments with foreign Governments or regional/international/multinational agencies like UN organisations, the World Bank etc.</li>
								<li>Non-Resident foreign citizens of Indian origin are treated on par with NRIs.</li>
							</ul>
						</div>
					</div>
				</div>

				{/* FAQs Section */}
				<div id="nri-faq" className="w-100 padding position-relative bg-white philosophy-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="right">FAQs</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl mb-3 text-primary">Relevant Questions From a NRI</h2>
							<p>For our NRI clients we have a hotline number which can be reached 24x7 irrespective of your current location. The number is 1800-120-2016. You can also contact us through email at <a href="mailto:info@suncityprojects.com">info@suncityprojects.com</a> We have put together the list of most relevant questions from a NRI/PIO's perspective.</p>
						</div>
						<ul className="accordion-list">
							<li>
								<h5>Who is classified as a NRI?</h5>
								<div className="answer">
									<p>Non Resident Indian is a person resident outside India who is either a citizen of India or a person of Indian origin. A NRI is an Indian Citizen who has migrated to another country. For all official purpose the Government of India considers Indian National away from India for more than 182 days, during the course of the preceding financial year.</p>
								</div>
							</li>
							<li>
								<h5>Who is classified as a PIO?</h5>
								<div className="answer"> 
									<p className="mb-2">A Person of Indian Origin means an individual (not being a citizen of the following countries; Pakistan, Bangladesh, Sri Lanka, Afghanistan, China, Iran, Nepal, Bhutan) who: </p>
									<div className="listContainer">
										<ul className="list-unstyled">
											<li>Held an Indian Passport at any time, or</li>
											<li>Who or either of whose father or grandfather was a citizen of India by virtue of the Constitution of India or the Citizenship Act, 1955</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<h5>Does NRI/PIO require permission of The Reserve Bank to acquire residential/ commercial property in India?</h5>
								<div className="answer">
									<p>No</p>
								</div>
							</li>
							<li>
								<h5>We're just starting out. How can we afford your services?</h5>
								<div className="answer">
									<p>We started this business from scratch, and know full-well how tight money can be when you are first starting out. We empathize with the struggles of new business owners, and therefore work diligently so that the new businesses that we work with succeed.</p>

									<p>The primary criteria we look for when working with new businesses is the seriousness of the business owner. While it is natural for a new business owner to be cautious with the money they spend - we do look for a commitment to growth. If you do not have a specific plan for how you intend to grow your business, then the reality is - you will probably never be in a good position to afford our services.</p>

									<p>With that said - if you are growth-minded, then we are happy to help you achieve that growth, and are willing to work with you to come up with a plan that fits within your budget and comfort level. Whether this is a smaller site, financing options, or a payment plan - we are confident that we can figure out something that will be mutually beneficial.</p>
								</div>
							</li>
							<li>
								<h5> How many residential / commercial properties can NRI / PIO purchase under the general permission?</h5>
								<div className="answer">
									<p>There are no restrictions on the number of residential / commercial properties that can be purchased.</p>
								</div>
							</li>
							<li>
								<h5>Do any documents need to be filed with Reserve Bank of India after purchase?</h5>
								<div className="answer">
									<p>An NRI / PIO who has purchased residential / commercial property under general permission, is not required to file any documents with the Reserve Bank.</p>
								</div>
							</li>
							<li>
								<h5>Whether immovable property in India can be acquired by way of gift?</h5>
								<div className="answer">
									<p>Yes, NRIs and PIOs can freely acquire immovable property by way of gift.</p>
								</div>
							</li>
							<li>
								<h5>Can NRI / PIO rent out the residential / commercial property purchased out of foreign exchange / rupee funds?</h5>
								<div className="answer">
									<p>Yes, NRI/PIO can rent out the property without the approval of the Reserve Bank.</p>
								</div>
							</li>
							<li>
								<h5>Whether a non-resident can inherit immovable property in India?</h5>
								<div className="answer">
									<p>Yes</p>
								</div>
							</li>
							<h6 className="mt-5 mb-3 text-uppercase ls-1 fw-bold">PROPERTY PURCHASE /SALE</h6>

							<li>
								<h5>Property Purchase/Sale</h5>
								<div className="answer">
									<p>Acquisition of Immovable Property in India.</p>
								</div>
							</li>
							<li>
								<h5> Who can purchase immovable property in India?</h5>
								<div className="answer">
									<p className="mb-2">Under the general permission available, the following can purchase immovable property in India: </p>
									<div className="listContainer">
										<ul className="list-unstyled mb-2">
											<li>Non-Resident Indian (NRI)</li>
											<li>Person of Indian Origin (PIO)</li>
										</ul>
									</div>
									<p>The general permission, however, covers only purchase of residential and commercial property and not for purchase of agricultural land / plantation property / farmhouse in India.</p>
								</div>
							</li>
							<li>
								<h5> Whether NRI/PIO can acquire agricultural land/ plantation property / farm house in India?</h5>
								<div className="answer">
									<p>Such proposals will require specific approval of Reserve Bank and the proposals are considered in consultation with the Government of India.</p>
								</div>
							</li>
							<li>
								<h5> How many residential / commercial properties can NRI / PIO purchase under the general permission?</h5>
								<div className="answer">
									<p>There are no restrictions on the number of residential / commercial properties that can be purchased.</p>
								</div>
							</li>
							<li>
								<h5>Can a foreign national of non-Indian origin be a second holder to immovable property purchased by NRI / PIO?</h5>
								<div className="answer">
									<p>No.</p>
								</div>
							</li>

							<h6 className="mt-5 mb-3 text-uppercase ls-1 fw-bold">Mode of payment for purchase/loan</h6>
							<li>
								<h5>How can an NRI / PIO make payment for purchase of residential / commercial property in India?</h5>
								<div className="answer">
									<p className="mb-2">Following options exist for making payment for purchase of the property</p>
									<div className="listContainer">
										<ul className="list-unstyled">
											<li>Funds remitted to India through normal banking channel or</li>
											<li>Funds held in NRE / FCNR (B) / NRO account maintained in India</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<h5>Can NRI / PIO avail of loan from an authorised dealer for acquiring flat / house in India for his own residential use against the security of funds held in his NRE Fixed Deposit account / FCNR (B) account?</h5>
								<div className="answer">
									<p>Yes, such loans are subject to the terms and conditions as laid down in Schedules 1 and 2 to Notification No. FEMA 5/2000-RB dated May 3, 2000 as amended from time to time.</p>
								</div>
							</li>
							<li>
								<h5>Such loans can be repaid</h5>
								<div className="answer">
									<p className="mb-2">Following options exist for making payment for purchase of the property</p>
									<div className="listContainer">
										<ul className="list-unstyled">
											<li>by way of inward remittance through normal banking channel or</li>
											<li>by debit to his NRE / FCNR (B) / NRO account or</li>
											<li>out of rental income from such property.</li>
											<li>by the borrower's close relatives, as defined in section 6 of the Companies Act, 1956, through their account in India by crediting the borrower's loan account.</li>
										</ul>
									</div>
								</div>
							</li>

							<h6 className="mt-5 mb-3 text-uppercase ls-1 fw-bold">Property Sale</h6>
							<li>
								<h5>Can an NRI/ PIO/foreign national sell his residential / commercial property?</h5>
								<div className="answer">
									<p>Yes. Reserve Bank of India has granted general permission for sale of such property.</p>
								</div>
							</li>
							<li>
								<h5>Can an agricultural land / plantation property / farm house in India owned / held by a non-resident be sold?</h5>
								<div className="answer">
									<p>NRI / PIO may sell agricultural land /plantation property/farm house to a person resident in India who is a citizen of India.</p>
								</div>
							</li>
							<li>
								<h5>Can a non-resident gift his residential / commercial property?</h5>
								<div className="answer">
									<p>Yes, NRI / PIO may gift residential / commercial property.</p>
								</div>
							</li>

							<h6 className="mt-5 mb-3 text-uppercase ls-1 fw-bold">Repatriation</h6>
							<li>
								<h5>Property acquired of foreign Exchange source</h5>
								<div className="answer">
									<p>In case the amount has been received from inward remittance or debit to NRE/FCNR(B)/NRO account for acquiring the property or for repayment of the loan, the principal amount can be repatriated outside India. Any Capital Gain is credited to NRO A/C. However, repatriation of sale proceeds purchased out of foreign exchange is restricted to not more that two residential properties, in a block of one year.</p>
								</div>
							</li>
							<li>
								<h5>Property acquired out of Rupee source</h5>
								<div className="answer">
									<p>In case the property is acquired out of Rupee resources and/or the loan is repaid by close relatives in India ( as defined in Section 6 of the Companies Act, 1956), the amount can be credited to the NRO account of the NRI/PIO. The amount of capital gains, if any, arising out of sale of the property can also be credited to the NRO account.</p>
									<p>NRI/PIO are also allowed by the Authorised Dealers to repatriate an amount up to USD 1 million per financial year out of the balance in the NRO account for all bonafide purposes to the satisfaction of the authorised dealers, subject to tax compliance.</p>
								</div>
							</li>
							<li>
								<h5>Repatriation of rental income</h5>
								<div className="answer">
									<p>Repatriation of income derived out of letting of immovable property is permissible. NRI/PIO can rent out the property without approval of Reserve Bank. Rent received can be credited to NRO/NRE account or remitted abroad. Powers have been delegated to the Authorised Dealers to allow repatriation of current income like rent, interest, dividend etc. of NRI/PIO who do not maintain an NRO account is based on an appropriate certification by Chartered Accountant, certifying that the amount proposed to be remitted is eligible for remittance and that applicable taxes have been paid/ provided for.</p>
								</div>
							</li>
						</ul>

						<div className="bottom-cta d-flex flex-wrap justify-content-center gap-3 gap-lg-5 mt-5 p-3 bg-light shadow-sm" data-aos="fade-up">
							<a href="tel:+918447737045">
								<i className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="25" stroke="var(--primary-color)" style={{width: '1em', height: '1em'}} viewBox="0 0 513.64 513.64">
										<g>
											<path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
												c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68
												c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44
												l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"></path>
										</g>
									</svg>
								</i>
								<small>Call</small>
							</a>
							<a href="https://api.whatsapp.com/send?phone=+918447737045&text=Hi,%20I%20am%20interested in your NRI terms,%20please%20share%20the%20details." target='_blank' rel="noreferrer">
								<i className="icon">
									<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="var(--primary-color)" style={{width: '1em', height: '1em'}}>
										<g>
											<path d="m16 1c-8.2709961 0-15 6.7285156-15 15 0 2.9101563.8344727 5.7158203 2.418457 8.1523438l-2.3374023 5.4541016c-.1611328.375-.0771484.8115234.2119141 1.1005859.1914062.1914062.4472656.2929687.7070312.2929687.1328125 0 .2670898-.0263672.394043-.0810547l5.4541016-2.3378906c2.4360351 1.5849609 5.2416992 2.4189453 8.1518554 2.4189453 8.2714844 0 15-6.7285156 15-15s-6.7285156-15-15-15zm7.6992188 20.3691406s-1.2470703 1.5996094-2.1484375 1.9736328c-2.2910156.9482422-5.5253906 0-9.2099609-3.6835938-3.6835938-3.6845703-4.6323242-6.9189453-3.6835938-9.2099609.3740234-.9023437 1.9736328-2.1484374 1.9736328-2.1484374.4335938-.3378906 1.1074219-.2958984 1.4960938.0927734l1.8095703 1.8095703c.3886719.3886719.3886719 1.0253906 0 1.4140625l-1.1357422 1.1347656s-.4599609 1.3808594 2.3027344 4.1445313c2.7626953 2.7626953 4.1445313 2.3027344 4.1445313 2.3027344l1.1347656-1.1357422c.3886719-.3886719 1.0253906-.3886719 1.4140625 0l1.8095703 1.8095703c.3886718.3886719.430664 1.0615234.0927734 1.4960937z"></path>
										</g>
									</svg>
								</i>
								<small>Whatsapp</small>
							</a>
							<a href="#">
								<i className="icon">
									<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="var(--primary-color)" style={{width: '1em', height: '1em'}}>
										<g><path d="m28 2h-24c-1.654 0-3 1.346-3 3v16c0 1.654 1.346 3 3 3h3v5c0 .385.221.734.566.901.139.066.287.099.434.099.223 0 .444-.074.625-.219l7.226-5.781h12.149c1.654 0 3-1.346 3-3v-16c0-1.654-1.346-3-3-3zm-12 14h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zm8-4h-16c-.553 0-1-.448-1-1s.447-1 1-1h16c.553 0 1 .448 1 1s-.447 1-1 1z"></path></g>
									</svg>
								</i>
								<small>Chat</small>
							</a>
							<a href="#formModal" data-bs-toggle="modal">
								<i className="icon">
									<svg viewBox="0 0 465.882 465.882" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="20" stroke="var(--primary-color)" style={{width: '1em', height: '1em'}}>
										<path d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"></path>
									</svg>
								</i>
								<small>Enquire</small>
							</a>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}