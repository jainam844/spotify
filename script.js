

console.log("jainam shah");

let songindex = 0;
let audioelement = new Audio(" songs/11.m4a");
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let mastersongname = document.getElementById("mastersongname");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songitem"));
let songs = [
  {
    songName: "salam-e-ishq",
    filepath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Main Tere Kabil Hoon",
    filepath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Enna Sona",
    filepath: "songs/10.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Lambiyaan Si Judaiyan",
    filepath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Aa Jao Meri Tamanna",
    filepath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Aaj Din Chadheya",
    filepath: "songs/9.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Iktaara",
    filepath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
];
songitems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioelement.play();
masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioelement.addEventListener("timeupdate", () => {
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  console.log(progress);
});
myProgressBar.addEventListener("change", () => {
  audioelement.currentTime =
    (myProgressBar.value * audioelement.duration) / 100;
});
const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplays();
      songindex = parseInt(e.target.id);

      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");

      audioelement.src = `songs/${songindex + 1}.mp3`;
      mastersongname.innerText = songs[songindex].songName;
      audioelement.currentTime = 0;
      audioelement.play();
      gif.style.opacity = 1;

      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 7) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioelement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioelement.currentTime = 0;
  audioelement.play();

  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  audioelement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioelement.currentTime = 0;
  audioelement.play();

  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
