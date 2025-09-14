window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


const contactLink = document.querySelector('a[href="#Co-slide"]');
const slider = document.getElementById('co-slide');
const closeBtn = document.getElementById('close-slide');

contactLink.addEventListener('click', function (e) {
  e.preventDefault();
  slider.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  slider.classList.remove('active');
});

window.addEventListener('click', function (e) {
  if (
    slider.classList.contains('active') &&
    !slider.contains(e.target) &&
    e.target !== contactLink
  ) {
    slider.classList.remove('active');
  }
});


document.getElementById('backToTop').addEventListener('click', (e) => {
  e.preventDefault(); // prevent default jump behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


window.addEventListener('scroll', () => {
  const indicator = document.querySelector('.scroll-down-indicator');
  if (window.scrollY > 100) {
    indicator.style.display = 'none';
  } else {
    indicator.style.display = 'block';
  }
});


// Popup Logic
const popupOverlay = document.getElementById('popup-overlay');
const popupImage = document.getElementById('popup-image');
const popupDescription = document.getElementById('popup-description');
const closeeBtn = document.getElementById('close-btn');
const zoomBtn = document.getElementById('zoom-btn');
const popupLogo = document.getElementById('popup-logo');
const availabilityText = document.getElementById('availability-text');

// Image Descriptions
const descriptions = {
  "IMAGES/24.jpg": "This is a stylish shirt made of breathable fabric, perfect for casual outings. The design is modern and comfortable, crafted to suit various body ",
  // Add more here
  // "IMAGES/1.jpg": "Description for image 1...",
  // "IMAGES/2.jpg": "Description for image 2...",
};

// Availability status
const availability = {
  "IMAGES/d/n.jpg": true,
  "IMAGES/25.jpg": true,
  "IMAGES/2.jpg": true,
  "IMAGES/26.jpg": true,
  "IMAGES/27.jpg" : true,
  "IMAGES/28.jpg" : true,
  "IMAGES/29.jpg" : true,
  "IMAGES/30.jpg" : true,
  "IMAGES/31.jpg" : true,
  "IMAGES/32.jpg" : true,
  "IMAGES/33.jpg" : true,
  "IMAGES/34.jpg" : true,
  "IMAGES/35.jpg" : true,
  "IMAGES/36.jpg" : true,
  "IMAGES/37.jpg" : true,
  "IMAGES/38.jpg" : true,
  "IMAGES/39.jpg" : true,
  "IMAGES/40.jpg" : true,
  "IMAGES/41.jpg" : true,
  "IMAGES/42.jpg" : true,
  "IMAGES/43.jpg" : true,
  "IMAGES/44.jpg" : true,
  "IMAGES/45.jpg" : true,
  "IMAGES/46.jpg" : true,
  "IMAGES/47.jpg" : true,
  "IMAGES/48.jpg" : true,
  "IMAGES/49.jpg" : true,
  "IMAGES/50.jpg" : true,
  "IMAGES/51.jpg" : true,
  "IMAGES/52.jpg" : true,
  "IMAGES/53.jpg" : true,
  "IMAGES/54.jpg" : true,
  "IMAGES/55.jpg" : true,
  "IMAGES/56.jpg" : true,
  "IMAGES/57.jpg" : true,
  "IMAGES/58.jpg" : true,
  "IMAGES/59.jpg" : true,
  "IMAGES/60.jpg" : true,
  "IMAGES/61.jpg" : true,
  "IMAGES/62.jpg" : true,
  "IMAGES/63.jpg" : true,
  "IMAGES/64.jpg" : true,
  "IMAGES/65.jpg" : true,
  "IMAGES/66.jpg" : true,
  "IMAGES/67.jpg" : true,
  "IMAGES/68.jpg" : true,
  "IMAGES/69.jpg" : true,
  "IMAGES/70.jpg" : true,
  "IMAGES/71.jpg" : true,
  "IMAGES/72.jpg" : true,
  "IMAGES/73.jpg" : true,
  "IMAGES/73.jpg" : true,
  "IMAGES/74.jpg" : true,
  "IMAGES/75.jpg" : true,
  "IMAGES/76.jpg" : true,
  "IMAGES/77.jpg" : true,
  "IMAGES/78.jpg" : true,
  "IMAGES/79.jpg" : true,
  "IMAGES/80.jpg" : true,
  "IMAGES/81.jpg" : true,
  "IMAGES/82.jpg" : true,
"IMAGES/8.jpg" : true,
"IMAGES/9.jpg" : true,
  // Add more entries here
};

// Function to update description and logo visibility
function setPopupDescription(text) {
  // Remove existing description text nodes
  popupDescription.childNodes.forEach(node => {
    if (node !== popupLogo) {
      popupDescription.removeChild(node);
    }
  });

  // Add new description
  const textNode = document.createTextNode(text);
  popupDescription.insertBefore(textNode, popupLogo);

  // Show/hide logo
  const wordCount = text.trim().split(/\s+/).length;
  popupLogo.style.display = wordCount < 150 ? 'block' : 'none';
}

// Image click listener
document.querySelectorAll('.body-ShowCase .item a img').forEach(img => {
  img.addEventListener('click', e => {
    e.preventDefault();
    const src = img.getAttribute('src');
    popupImage.src = src;
   
     messageDiv.textContent = '';

    const desc = descriptions[src] || "No description available.";
    setPopupDescription(desc);

    // Show availability
    const isAvailable = availability[src];
    if (availabilityText) {
      availabilityText.textContent = isAvailable ? "Available" : "Not Available";
      availabilityText.classList.toggle('unavailable', !isAvailable);
    }

    // Reset zoom
    popupImage.style.transform = "scale(1)";
    popupOverlay.classList.add('active');
  });
});

// Close popup
closeeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});

// Zoom toggle
let zoomed = false;
zoomBtn.addEventListener('click', () => {
  zoomed = !zoomed;
  popupImage.style.transform = zoomed ? "scale(2)" : "scale(1)";
});


const orderButton = document.getElementById('order');
const orderLink = document.getElementById('orderLink');
const messageDiv = document.getElementById('message');


orderButton.addEventListener('click', (e) => {
  const currentImageSrc = popupImage.getAttribute('src');
  const isAvailable = availability[currentImageSrc];

  if (!isAvailable) {
    e.preventDefault(); // stop the link from navigating
    messageDiv.textContent = "Item is NOT AVAILABLE";
  } else {
    messageDiv.textContent = ""; 
  }
});




