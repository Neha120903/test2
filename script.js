submit = document.getElementById("submit");

const xhr = new XMLHttpRequest();
const d = new Date();
var res = document.getElementById("res");


xhr.onload = function () {
  let data = this.response;
  data = JSON.parse(data);
  console.log(data);
  for (i = 0; i < data.length; i++) {
    img = document.createElement("img");
    img.className = "poster";
    img.src = data[i].show.image.medium;
    res.appendChild(img);
  }
};

xhr.onerror = function () {};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  c_name = document.getElementById("takeinput").value;
  console.log(c_name);
  URL = "https://api.tvmaze.com/search/shows?q= " + c_name;
  xhr.open("GET", URL);
  xhr.send();

});
const themeColors = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
  console.log("themeset");
};

const applyTheme = function () {
  const activeTheme = localStorage.getItem("theme");

  themeColors.forEach((themeOption) => {
    if (activeTheme == themeOption.id) {
      themeOption.checked = true;
    }
  });
};
themeColors.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

document.onload = applyTheme();