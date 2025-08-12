 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

// Ultra Modern Home Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize Home Section Animations
  initHomeAnimations();
  
  // Initialize Particle System for Home
  initHomeParticles();
  
  // Initialize 3D Tilt Effects for Home
  initHomeTiltEffects();
  
  // Initialize Statistics Counter for Home
  initHomeStatsCounter();
  
  // Initialize Intersection Observer for Home
  initHomeIntersectionObserver();
  
});

function initHomeAnimations() {
  const homeSection = document.querySelector('.ultra-home-section');
  if (!homeSection) return;
  
  // Add smooth scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Trigger status items animation
        const statusItems = entry.target.querySelectorAll('.home-status-item');
        statusItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.animation = `statusSlideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`;
            item.style.animationDelay = `${index * 0.1}s`;
          }, 300);
        });
        
        // Trigger skill tags animation
        const skillTags = entry.target.querySelectorAll('.home-skill-tag');
        skillTags.forEach((tag, index) => {
          setTimeout(() => {
            tag.style.animation = `skillTagPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`;
            tag.style.animationDelay = `${index * 0.05}s`;
          }, 600);
        });
        
        // Trigger buttons animation
        const buttons = entry.target.querySelectorAll('.home-btn');
        buttons.forEach((btn, index) => {
          setTimeout(() => {
            btn.style.animation = `buttonSlideUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`;
            btn.style.animationDelay = `${index * 0.2}s`;
          }, 900);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  });
  
  observer.observe(homeSection);
}

function initHomeParticles() {
  const particleContainer = document.querySelector('.home-particles-container');
  if (!particleContainer) return;
  
  // Create interactive particles that respond to mouse movement
  const particles = document.querySelectorAll('.home-particle');
  
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
      const speed = (index + 1) * 0.5;
      const x = (mouseX * speed * 50) - 25;
      const y = (mouseY * speed * 50) - 25;
      
      particle.style.transform += ` translate(${x}px, ${y}px)`;
    });
  });
  
  // Add particle interaction on scroll
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollDelta = scrollY - lastScrollY;
    
    particles.forEach((particle, index) => {
      const currentTransform = particle.style.transform || '';
      const rotationSpeed = (index + 1) * 2;
      const newRotation = scrollDelta * rotationSpeed * 0.1;
      
      particle.style.transform = currentTransform.replace(/rotate\([^)]*\)/g, '') + ` rotate(${newRotation}deg)`;
    });
    
    lastScrollY = scrollY;
  });
}

function initHomeTiltEffects() {
  const introCard = document.querySelector('.ultra-intro-card');
  if (!introCard) return;
  
  // 3D Tilt Effect for Intro Card
  introCard.addEventListener('mousemove', (e) => {
    const rect = introCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    
    introCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    
    // Add glow effect based on mouse position
    const glowIntensity = Math.min(Math.abs(rotateX) + Math.abs(rotateY), 20) / 20;
    introCard.style.boxShadow = `0 20px 40px rgba(100, 255, 218, ${0.2 + glowIntensity * 0.3})`;
  });
  
  introCard.addEventListener('mouseleave', () => {
    introCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    introCard.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.2)';
  });
  
  // Enhanced Image Container Effects
  const imageContainer = document.querySelector('.intro-image-container');
  if (imageContainer) {
    imageContainer.addEventListener('mousemove', (e) => {
      const rect = imageContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -5;
      const rotateY = (x - centerX) / centerX * 5;
      
      const img = imageContainer.querySelector('.ultra-intro-img');
      if (img) {
        img.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });
    
    imageContainer.addEventListener('mouseleave', () => {
      const img = imageContainer.querySelector('.ultra-intro-img');
      if (img) {
        img.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
      }
    });
  }
}

function initHomeStatsCounter() {
  const statusItems = document.querySelectorAll('.home-status-item');
  if (statusItems.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        const numberElement = item.querySelector('.status-number');
        if (numberElement) {
          const targetNumber = parseInt(numberElement.textContent);
          animateNumber(numberElement, 0, targetNumber, 2000);
        }
        observer.unobserve(item);
      }
    });
  }, {
    threshold: 0.5
  });
  
  statusItems.forEach(item => observer.observe(item));
}

function animateNumber(element, start, end, duration) {
  const startTime = performance.now();
  
  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const currentNumber = Math.floor(start + (end - start) * easeOutCubic);
    
    element.textContent = currentNumber;
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      element.textContent = end;
    }
  }
  
  requestAnimationFrame(updateNumber);
}

function initHomeIntersectionObserver() {
  const homeSection = document.querySelector('.ultra-home-section');
  if (!homeSection) return;
  
  // Advanced intersection observer with multiple thresholds
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;
      
      if (ratio > 0.1) {
        // Activate particle system
        homeSection.classList.add('particles-active');
        
        // Adjust background animation speed based on visibility
        const backgroundElement = homeSection.querySelector('.ultra-home-background');
        if (backgroundElement) {
          backgroundElement.style.animationDuration = `${20 - (ratio * 5)}s`;
        }
      } else {
        homeSection.classList.remove('particles-active');
      }
    });
  }, {
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
  });
  
  observer.observe(homeSection);
}

// CSS Animations (to be injected)
const homeAnimationCSS = `
@keyframes statusSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes skillTagPop {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes buttonSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ultra-home-section.animate-in {
  animation: homeReveal 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes homeReveal {
  from {
    opacity: 0.8;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ultra-home-section.particles-active .home-particle {
  animation-play-state: running;
}

.ultra-home-section:not(.particles-active) .home-particle {
  animation-play-state: paused;
}
`;

// Inject animation CSS
const style = document.createElement('style');
style.textContent = homeAnimationCSS;
document.head.appendChild(style);

// Ultra Image Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
  initImageGallery();
});

function initImageGallery() {
  const thumbnails = document.querySelectorAll('.thumbnail-item');
  const mainImage = document.getElementById('mainDisplayImage');
  const imageTitle = document.getElementById('imageTitle');
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  
  let currentImageIndex = 0;
  const images = Array.from(thumbnails).map(thumb => ({
    src: thumb.getAttribute('data-image'),
    title: thumb.getAttribute('data-title')
  }));
  
  // Initialize first image
  if (images.length > 0) {
    updateMainImage(0);
  }
  
  // Thumbnail click handlers
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      updateMainImage(index);
      currentImageIndex = index;
    });
    
    // Add hover effect with animation
    thumbnail.addEventListener('mouseenter', () => {
      thumbnail.style.transform = 'scale(1.1) translateY(-5px)';
      thumbnail.style.boxShadow = '0 15px 35px rgba(100, 255, 218, 0.4)';
    });
    
    thumbnail.addEventListener('mouseleave', () => {
      if (!thumbnail.classList.contains('active')) {
        thumbnail.style.transform = 'scale(1) translateY(0)';
        thumbnail.style.boxShadow = 'none';
      }
    });
  });
  
  // Navigation button handlers
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateMainImage(currentImageIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage(currentImageIndex);
  });
  
  // Auto slideshow (optional)
  let autoSlideInterval;
  
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateMainImage(currentImageIndex);
    }, 5000); // Change image every 5 seconds
  }
  
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  
  // Start auto slideshow
  startAutoSlide();
  
  // Pause auto slideshow on hover
  const galleryContainer = document.querySelector('.gallery-main-container');
  if (galleryContainer) {
    galleryContainer.addEventListener('mouseenter', stopAutoSlide);
    galleryContainer.addEventListener('mouseleave', startAutoSlide);
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
  
  // Touch/Swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  const mainImageContainer = document.querySelector('.main-image-container');
  if (mainImageContainer) {
    mainImageContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    mainImageContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swipe right - previous image
        prevBtn.click();
      } else {
        // Swipe left - next image
        nextBtn.click();
      }
    }
  }
  
  function updateMainImage(index) {
    // Update main image with smooth transition
    mainImage.style.opacity = '0';
    mainImage.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
      mainImage.src = images[index].src;
      imageTitle.textContent = images[index].title;
      
      // Animate image in
      mainImage.style.opacity = '1';
      mainImage.style.transform = 'scale(1)';
    }, 300);
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
      thumb.classList.remove('active');
      if (i === index) {
        thumb.classList.add('active');
        thumb.style.transform = 'scale(1.1) translateY(-5px)';
        thumb.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.4)';
      } else {
        thumb.style.transform = 'scale(1) translateY(0)';
        thumb.style.boxShadow = 'none';
      }
    });
    
    // Animate title change
    imageTitle.style.animation = 'titleFadeIn 0.5s ease-in-out';
    
    // Update navigation button states
    updateNavigationButtons(index);
  }
  
  function updateNavigationButtons(index) {
    // Add visual feedback for navigation buttons
    const isFirst = index === 0;
    const isLast = index === images.length - 1;
    
    prevBtn.style.opacity = isFirst ? '0.5' : '1';
    nextBtn.style.opacity = isLast ? '0.5' : '1';
  }
  
  // Add loading animation for images
  mainImage.addEventListener('load', () => {
    mainImage.style.animation = 'imageZoomIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  });
  
  // Lazy loading for thumbnails
  const thumbnailImages = document.querySelectorAll('.thumbnail-item img');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.animation = 'thumbnailFadeIn 0.5s ease-in-out';
        observer.unobserve(img);
      }
    });
  });
  
  thumbnailImages.forEach(img => imageObserver.observe(img));
}

// Add CSS animations for image gallery
const galleryAnimationCSS = `
@keyframes titleFadeIn {
  0% { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes imageZoomIn {
  0% { 
    opacity: 0; 
    transform: scale(1.1); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1); 
  }
}

@keyframes thumbnailFadeIn {
  0% { 
    opacity: 0; 
    transform: scale(0.8); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1); 
  }
}

.main-display-img {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.thumbnail-item {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-btn {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-btn:hover {
  animation: buttonPulse 0.3s ease-in-out;
}

@keyframes buttonPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1.05); }
}

/* Gallery loading states */
.gallery-loading .main-display-img {
  filter: blur(5px);
  transition: filter 0.3s ease;
}

.gallery-loaded .main-display-img {
  filter: blur(0px);
}
`;

// Inject gallery animation CSS
const galleryStyle = document.createElement('style');
galleryStyle.textContent = galleryAnimationCSS;
document.head.appendChild(galleryStyle);

