
const subscribeBtn = document.getElementById('subscribeBtn');
const popup = document.getElementById('popup');
const confirmSubscribeBtn = document.getElementById('confirmSubscribeBtn');
const emailInput = document.getElementById('emailInput');


subscribeBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});


confirmSubscribeBtn.addEventListener('click', () => {
  const email = emailInput.value;
  if (email) {
    alert(`Thank you for subscribing with: ${email}`);
    popup.style.display = 'none';
    emailInput.value = ''; 
  } else {
    alert('Please enter an email!');
  }
});





const mainImage = document.querySelector('#main-image img');
const caption = document.querySelector('#main-image .caption');
const thumbnails = document.querySelectorAll('#thumbnails img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    caption.textContent = thumbnail.alt;
  });
});
