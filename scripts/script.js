const app = {};

app.apiUrl =
	"https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

app.listenForHover = () => {
	const headerImage = document.querySelector(".header-img");
	headerImage.addEventListener("mouseover", function () {
		headerImage.src = `./assets/avatar-${
			Math.floor(Math.random() * 3) + 2
		}.svg`;
	});
	headerImage.addEventListener("mouseleave", function () {
		headerImage.src = "./assets/avatar-1.svg";
	});
};

// app.toggleDarkMode = () => {
// 	const darkModeButton = document.querySelector(body);
// 	darkModeButton.classList.toggle("dark-mode");
// };

app.giveFunnyJoke = () => {
	fetch(app.apiUrl)
		.then(function (res) {
			return res.json();
		})
		.then(function (jsonRes) {
			if (jsonRes.type == "twopart") {
				console.log(jsonRes.setup);
				console.log(jsonRes.delivery);
			} else if (jsonRes.type == "single") {
				console.log(jsonRes.joke);
			}
		});
};

app.init = () => {
	app.giveFunnyJoke();
	app.listenForHover();
};

app.init();
