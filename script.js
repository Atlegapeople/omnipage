// Alternating Hero Background Images
const heroImages = [
   'assets/hero-a.jpg',
   'assets/hero-b.jpg',
   'assets/hero-c.jpg',
   'assets/hero-d.jpg',
   'assets/hero-e.jpg'
];
const heroSection = document.querySelector('.hero');
let heroIndex = 0;

function changeHeroBackground() {
   heroSection.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
   heroIndex = (heroIndex + 1) % heroImages.length;
}
setInterval(changeHeroBackground, 5000);
changeHeroBackground(); // Set the initial image

// Gallery
const galleryImages = [
    'assets/gallery/image1.jpg',
   'assets/gallery/image2.jpg',
   'assets/gallery/image3.jpg',
   'assets/gallery/image4.jpg',
   'assets/gallery/image5.jpg',
   'assets/gallery/image6.jpg',
   'assets/gallery/image7.jpg',
   'assets/gallery/image8.jpg',
   'assets/gallery/image9.jpg',
   'assets/gallery/image10.jpg',
   'assets/gallery/image11.jpg'
];

const galleryGrid = document.getElementById('gallery-images');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.modal .close');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Add images to the gallery
galleryImages.forEach((src, index) => {
   const img = document.createElement('img');
   img.src = src;
   img.alt = `Gallery Image ${index + 1}`;
   img.dataset.index = index; // Store index for navigation
   img.className = 'gallery-image';
   img.addEventListener('click', () => openModal(index));
   galleryGrid.appendChild(img);
});

// Open the modal
function openModal(index) {
   currentIndex = index;
   modalImage.src = galleryImages[currentIndex];
   modal.style.display = 'flex';
}

// Close the modal
closeModal.addEventListener('click', () => {
   modal.style.display = 'none';
});

// Navigate to previous image
prevBtn.addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
   modalImage.src = galleryImages[currentIndex];
});

// Navigate to next image
nextBtn.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % galleryImages.length;
   modalImage.src = galleryImages[currentIndex];
});

// Close modal on click outside the image
modal.addEventListener('click', (e) => {
   if (e.target === modal) {
       modal.style.display = 'none';
   }
});
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

// Function to move to the next slide
function nextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)'; // Move current slide out
    currentSlide = (currentSlide + 1) % slides.length; // Update to next slide
    slides[currentSlide].style.transform = 'translateX(0)'; // Bring next slide in
    slides[currentSlide === 0 ? slides.length - 1 : currentSlide - 1].style.transform = 'translateX(100%)'; // Reset the previous slide
}

// Set interval for auto-slide
setInterval(nextSlide, 5000);

// Select the header element
const header = document.querySelector('.main-header');

// Add an event listener to handle scrolling
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(37, 42, 65, 0.8)'; // Transparent background
        header.style.transition = 'background-color 0.3s ease'; // Smooth transition
    } else {
        header.style.backgroundColor = '#252a41'; // Solid background when at the top
    }
});
document.querySelector('.logo a').addEventListener('click', (event) => {
   event.preventDefault(); // Prevent default page reload
   window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
});
// Initialize Chart.js charts
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [10, 20, 30, 40, 50],
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC733']
        }]
    }
});

const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: 'Visitors',
            data: [15, 10, 20, 25, 30],
            borderColor: '#33FF57',
            fill: false
        }]
    }
});

const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Chrome', 'Safari', 'Firefox', 'Edge'],
        datasets: [{
            data: [50, 20, 15, 15],
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FFC733']
        }]
    }
});

const ctxRadar = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(ctxRadar, {
    type: 'radar',
    data: {
        labels: ['Speed', 'Reliability', 'Usability', 'Design', 'Functionality'],
        datasets: [{
            label: 'Performance',
            data: [80, 90, 70, 85, 75],
            backgroundColor: 'rgba(51, 87, 255, 0.4)',
            borderColor: '#3357FF'
        }]
    }
});

const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF']
        }]
    }
});

const ctxPolarArea = document.getElementById('polarAreaChart').getContext('2d');
const polarAreaChart = new Chart(ctxPolarArea, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            data: [11, 16, 7, 14, 22],
            backgroundColor: ['#FF5733', '#3357FF', '#FFC733', '#33FF57', '#C733FF']
        }]
    }
});

document.addEventListener("DOMContentLoaded", () => {
   const captchaQuestion = document.getElementById("captcha-question");
   const captchaInput = document.getElementById("captcha-input");
   const form = document.getElementById("contact-form");
   const formMessage = document.getElementById("form-message");

   // Generate a simple CAPTCHA
   let num1 = Math.floor(Math.random() * 10);
   let num2 = Math.floor(Math.random() * 10);
   captchaQuestion.textContent = `${num1} + ${num2} = ?`;

   // Form Submission
   form.addEventListener("submit", (event) => {
       event.preventDefault();

       const captchaResult = parseInt(captchaInput.value, 10);
       if (captchaResult !== num1 + num2) {
           formMessage.textContent = "Incorrect captcha. Please try again.";
           formMessage.style.color = "red";
       } else {
           formMessage.textContent = "Message sent successfully!";
           formMessage.style.color = "green";

           // Clear form
           form.reset();

            // Regenerate CAPTCHA
            num1 = Math.floor(Math.random() * 10);
            num2 = Math.floor(Math.random() * 10);
            captchaQuestion.textContent = `${num1} + ${num2} = ?`;
        }
    });

// Scroll Bar
const scrollBar = document.querySelector(".scroll-bar");
if (scrollBar) {
    window.addEventListener("scroll", () => {
        const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / scrollableHeight) * 100;
        scrollBar.style.width = scrolled + "%";
    });
} else {
    console.error("Scroll bar element not found!");
}
});
document.addEventListener("DOMContentLoaded", () => {
   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

   // Show the button when scrolling down
   window.addEventListener("scroll", () => {
       if (window.scrollY > 300) {
           scrollToTopBtn.style.display = "block"; // Show button
       } else {
           scrollToTopBtn.style.display = "none"; // Hide button
       }
   });

   // Scroll to the top when the button is clicked
   scrollToTopBtn.addEventListener("click", () => {
       window.scrollTo({
           top: 0,
           behavior: "smooth" // Smooth scrolling effect
       });
   });
});
document.addEventListener("DOMContentLoaded", () => {
   const tools = document.querySelectorAll(".tool-card");

   const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               entry.target.style.opacity = "1";
               entry.target.style.transform = "translateY(0)";
           }
       });
   }, { threshold: 0.2 });

   tools.forEach((tool) => {
       tool.style.opacity = "0";
       tool.style.transform = "translateY(20px)";
       tool.style.transition = "opacity 0.5s ease, transform 0.5s ease";
       observer.observe(tool);
   });
});
