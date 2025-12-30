// JavaScript to make hover overlays match exact image dimensions
document.addEventListener('DOMContentLoaded', function() {
    // Function to update overlay dimensions
    function updateOverlayDimensions() {
        const imageLinks = document.querySelectorAll('.project-image-link');
        
        imageLinks.forEach(link => {
            const image = link.querySelector('.project-image');
            if (image && image.complete) {
                // Get the actual displayed dimensions of the image
                const rect = image.getBoundingClientRect();
                const computedStyle = window.getComputedStyle(image);
                
                // Set CSS custom properties for the overlay dimensions
                link.style.setProperty('--image-width', rect.width + 'px');
                link.style.setProperty('--image-height', rect.height + 'px');
            }
        });
    }
    
    // Update dimensions when images load
    const images = document.querySelectorAll('.project-image');
    images.forEach(image => {
        if (image.complete) {
            updateOverlayDimensions();
        } else {
            image.addEventListener('load', updateOverlayDimensions);
        }
    });
    
    // Update on window resize
    window.addEventListener('resize', updateOverlayDimensions);
});
