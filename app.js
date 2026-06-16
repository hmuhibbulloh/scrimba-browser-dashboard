const body = document.body;

const unsplashURL =
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";

function changeBodyBg() {
  fetch(unsplashURL)
    .then((res) => res.json())
    .then((data) => {
      const img = data.urls.full;
      body.style.backgroundImage = `url(${img})`;
      document.querySelector(".img-author").textContent = data.user.name;
      console.log(img);
    });
}

changeBodyBg();
