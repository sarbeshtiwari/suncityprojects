import React, { useEffect, useState } from 'react'

const TestimonialVideoModal = () => {

	const [modalHeading, setModalHeading] = useState('the client.');
	const [videoSrc, setVideoSrc] = useState('null');


	useEffect(() => {
		// Handle video button clicks
		const handleVideoBtnClick = (e: Event) => {
			const target = e.target as HTMLElement;
			const button = target.closest('.videoSourceBtn') as HTMLElement;
			
			if (button) {
				const videoSource = button.getAttribute('data-src');
				const heading = button.getAttribute('data-bs-source');
				
				if (videoSource) {
					setVideoSrc(videoSource);
				}
				if (heading) {
					setModalHeading(heading);
				}
			}
		};

		// Add event listeners for video buttons
		document.addEventListener('click', handleVideoBtnClick);

		// Handle video modal events
		const videoModal = document.getElementById('video-Modal');
		if (videoModal) {
			// Stop video when modal is hidden
			videoModal.addEventListener('hidden.bs.modal', () => {
				const video = document.getElementById('video-Modal-video') as HTMLVideoElement;
				if (video) {
					video.pause();
					video.currentTime = 0;
				}
			});
		}

		return () => {
			document.removeEventListener('click', handleVideoBtnClick);
		};
	}, []);

  return (
    
    <div className="modal fade" id="video-Modal" tabIndex={-1} aria-labelledby="formModalLabel" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="modal-body p-4">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <p className="modal-title mb-3">Some words from <span className="modal-heading">{modalHeading}</span>.</p>
                    <div className="video-container">
                        <video src={videoSrc} controls id='video-Modal-video'></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialVideoModal