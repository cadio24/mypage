// Preview uploaded images in the gallery
const imageInput = document.getElementById('image-input');
const gallery = document.getElementById('gallery');

if (imageInput && gallery) {
  imageInput.addEventListener('change', event => {
    const files = event.target.files;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = e => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        const img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'img-fluid';
        col.appendChild(img);
        gallery.appendChild(col);
      };
      reader.readAsDataURL(file);
    }
  });
}

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('문의가 전송되었습니다. 곧 연락드리겠습니다.');
    contactForm.reset();
  });
}

// Prefill contact form when ordering a service
const serviceButtons = document.querySelectorAll('#services button');
serviceButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const serviceName = btn.dataset.service;
    document.getElementById('message').value = `[${serviceName}] 서비스 문의합니다.`;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});
