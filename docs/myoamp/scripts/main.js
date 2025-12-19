

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

window.addEventListener('load', () => {
  const img = document.getElementById("prosthetic-hand");
  console.log(img);
  img.style.transform = 'rotate(-45deg) translateX(-450px) translateY(-450px)'; // final position
  img.style.opacity = '1';
});


  document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".flow-img");
  if (!img) return;

  img.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent background click fancy shmancy way
    img.classList.toggle("enlarged");
  });

  document.addEventListener("click", () => {
    img.classList.remove("enlarged");
  });
});


  const slides = [
    {
      img: "Images/initialdrawing.png",
      text: " Made the initial finger mounts and wrist mounts, but found they were too thin and provided circulation issues. I also prototyped a forearm mount, but found a full solid mount did not work."
    },
    {
      vid: "Images/video.mp4",
      text: "Made a second finger prototype that was thicker, and added rubber padding and the actuation system. Rubber padding did not stick right. Also iterated on other mounts, but found that velcro attachment systems were weak and some mounting holes were slightly misaligned."
    },
    {
      img: "Images/ironmanhand.png",
      text: "Remade the finger mount to best fit rubber padding, skeletonized the forearm grip, and fixed the fitting and integration of the bicepmount. Also made a battery mount."
    },
    {
      img:"Images/cad1.png",
      text: "A drawing of the forearm and wrist mounts."
    },
    {
      img:"Images/cad2.png",
      text: "A drawing of the battery housing, meant to contain a 12 Volt and 5 Volt battery."
    },
    {
      img:"Images/cad3.png",
      text: "A drawing of the bicep mount, meant to house all of the boards."
    }


  ];

  let index = 0;
  const slideContainer = document.getElementById("slide-container");
  const caption = document.getElementById("caption");

  let eceIndex = 0;
  const eceImg = document.getElementById('eceImg');
  eceImg.style.maxHeight = "400px";
  eceImg.style.width = "auto";
  const eceText = document.getElementById("ece-text");

  const eceSlides = [
  {
    img: "Images/powerman.png",
    text: "The source of MyoAmp’s electrical power comes from a single 5600 mAH 12 Volt rechargeable lithium ion battery. The 12 volt source is split into 3 different voltage lines by buck converters to accommodate for different component requirements..."
  },
  {
    img: "Images/actuator.png",
    text: "In order to sense muscle contractions we used MyoWare’s V1 Surface ElectroMyography sensors. They work by taking electrical signals from muscles that are generated when the muscles contract..."
  },
  {
    img: "Images/sensor.png",
    text: "Final slide description here."
  }
];


  function update() {
    const newElement = (index == 1) ? document.createElement("video") : document.createElement("img");
    newElement.style.maxHeight = "400px";
    newElement.style.width = "auto";
    const textElement = document.getElementById("text");
    textElement.style.position = "absolute";
    textElement.style.top = "105%";
    textElement.style.left = "10%";
    textElement.style.textAlign = "center";
    if (index == 1) {
      newElement.controls = true;
      newElement.width = 600;
      const sourceElement = document.createElement("source");
      sourceElement.src = slides[index].vid;
      sourceElement.type = "video/mp4";
      console.log(sourceElement);
      newElement.appendChild(sourceElement);
      textElement.textContent = slides[index].text;
    } else {
      newElement.src = slides[index].img;
      textElement.textContent = slides[index].text;
    }

    slideContainer.children[0].replaceWith(newElement);
  }

  function next() {
    index = (index + 1) % slides.length;
    update();
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  update();



function updateECE() {
  eceImg.src = eceSlides[eceIndex].img;
  eceImg.alt = "ECE slide " + (eceIndex + 1);
  eceImg.width = 600; // optional: keep consistent size

  // update text
  eceText.textContent = eceSlides[eceIndex].text;
}

function nextECE() {
  eceIndex = (eceIndex + 1) % eceSlides.length;
  updateECE();
}

function prevECE() {
  eceIndex = (eceIndex - 1 + eceSlides.length) % eceSlides.length;
  updateECE();
}

// initialize slideshow
document.addEventListener("DOMContentLoaded", updateECE);
