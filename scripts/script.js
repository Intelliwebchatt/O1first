document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const elementsToAnimate = document.querySelectorAll('.wave-section');
  const options = {
    threshold: 0.2,
    rootMargin: "50px"
  };

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, options);

  elementsToAnimate.forEach(el => animateOnScroll.observe(el));

  // Lazy load images if any with data-src attributes
  const lazyImages = document.querySelectorAll('img[data-src]');
  const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const img = entry.target;
        img.src = img.dataset.src;
        lazyLoadObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => lazyLoadObserver.observe(img));
});
