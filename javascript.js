
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


 const modal = document.getElementById("subscribeModal");
    const openLink = document.getElementById("subscribeLink");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("subscribeForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    openLink.onclick = function (e) {
      e.preventDefault();
      modal.style.display = "block";
      form.style.display = "block";
      thankYouMessage.style.display = "none";
    };

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent real submission
      form.style.display = "none";
      thankYouMessage.style.display = "block";
    });