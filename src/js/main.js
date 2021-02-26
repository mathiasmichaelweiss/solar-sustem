"use strict";
class PlanetLeft {
  constructor(num, overhead, name, parentSelector, listItem, restLi) {
    this.num = num;
    this.overhead = overhead;
    this.name = name;
    this.parent = document.querySelector(parentSelector);
    this.listItem = listItem;
    this.restLi = restLi;
  }

  render() {
    const planet = document.createElement("div");
    const modal = document.createElement("div");

    planet.classList.add("planet");
    modal.classList.add("modal");
    modal.classList.add("hidden");

    if (document.body.clientWidth >= 450) {
      planet.classList.add("fadeLeft");
    } else {
      planet.classList.remove("fadeLeft");
    }

    planet.innerHTML = `
        <div class="planet-img fadeBottom bottom">
        </div>
            <div class="planet-content">
                <div class="number fadeTop top">${this.num}</div>
                <div class="overhead fadeTop top">
                    <div class="overhead__line"></div>
                    <div class="overhead__text">
                        <p>${this.overhead}</p>
                    </div>
                </div>
                <div class="planet-title fadeTop top">
                    <h2>${this.name}</h2>
                </div>
                <div class="planet-facts">
                    <ul>
                        ${this.listItem}
                    </ul>
                    <div class="more fadeRight right">
                        <p>read more </p><svg width="24" height="17" viewBox="0 0 24 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 0.499999L14.59 1.91L20.17 7.5L-3.93402e-07 7.5L-3.0598e-07 9.5L20.17 9.5L14.58 15.08L16 16.5L24 8.5L16 0.499999Z"
                                fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
    `;

    modal.innerHTML = `
            <div class="modal-top">
              <div class="modal-top-text-block">
                <div class="modal-top-text-block_title"><h2>${this.name}</h2></div>
                <div class="modal-top-text-block_subtitle">
                  Facts about ${this.name}
                </div>
              </div>
              <div class="modal-top_mini-planet">
                  <div class="close-modal">
                    <div class="close-modal-icon"></div>
                  </div>
              </div>
            </div>
            <div class="modal-facts-ground">
                <ul class="modal-facts">
                    ${this.listItem}
                    ${this.restLi}
                </ul>
            </div>
          </div>
    `;
    this.parent.append(modal);
    this.parent.append(planet);
  }
}

class Planet {
  constructor(num, overhead, name, parentSelector, listItem, restLi) {
    this.num = num;
    this.overhead = overhead;
    this.name = name;
    this.parent = document.querySelector(parentSelector);
    this.listItem = listItem;
    this.restLi = restLi;
  }

  render() {
    const planet = document.createElement("div");
    const modal = document.createElement("div");

    planet.classList.add("planet");
    modal.classList.add("modal");
    modal.classList.add("hidden");

    if (document.body.clientWidth >= 450) {
      planet.classList.add("fadeRight");
    } else {
      planet.classList.remove("fadeRight");
    }

    planet.innerHTML = `
            <div class="planet-content">
                <div class="number fadeTop top">${this.num}</div>
                <div class="overhead fadeTop top">
                    <div class="overhead__line"></div>
                    <div class="overhead__text">
                        <p>${this.overhead}</p>
                    </div>
                </div>
                <div class="planet-title fadeTop top">
                    <h2>${this.name}</h2>
                </div>
                <div class="planet-facts">
                    <ul>
                        ${this.listItem}
                    </ul>
                    <div class="more fadeLeft left">
                        <p>read more </p><svg width="24" height="17" viewBox="0 0 24 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 0.499999L14.59 1.91L20.17 7.5L-3.93402e-07 7.5L-3.0598e-07 9.5L20.17 9.5L14.58 15.08L16 16.5L24 8.5L16 0.499999Z"
                                fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        <div class="planet-img fadeBottom bottom">
        </div>
    `;

    modal.innerHTML = `
    <div class="modal-top">
      <div class="modal-top-text-block">
        <div class="modal-top-text-block_title"><h2>${this.name}</h2></div>
        <div class="modal-top-text-block_subtitle">
          Facts about ${this.name}
        </div>
      </div>
      <div class="modal-top_mini-planet">
        <div class="close-modal">
            <div class="close-modal-icon"></div>
        </div>
      </div>
    </div>
    <div class="modal-facts-ground">
        <ul class="modal-facts">
            ${this.listItem}
            ${this.restLi}
        </ul>
    </div>
  </div>
`;

    this.parent.append(modal);
    this.parent.append(planet);
  }
}

const planetsImages = [
  "src/img/planets/Mercury.png",
  "src/img/planets/venus.png",
  "src/img/planets/earth.png",
  "src/img/planets/mars.png",
  "src/img/planets/jupiter.png",
  "src/img/planets/saturn.png",
  "src/img/planets/uranus.png",
  "src/img/planets/neptune.png",
  "src/img/planets/pluto.png"
];

function changeImage() {
  const planetImage = document.querySelectorAll(".planet-img");
  const planetBlock = document.querySelectorAll(".planet-content");
  const miniPlanets = document.querySelectorAll(".modal-top_mini-planet");
  planetImage.forEach((item, i) => {
    item.style = `background-image: url(${planetsImages[i]})`;
    planetImage[5].style = `background-image: url(src/img/planets/saturn.png); width: 100%; position: absolute; left: -21.5vw`;
    planetImage[7].style =
      "background-image: url(src/img/planets/neptune.png); background-size: 130%;";
    planetBlock[5].style = "width: 50%";
    if (document.body.clientWidth <= 450) {
      planetBlock[5].style = "width: 100%";
      planetImage[5].style = `background-image: url(src/img/planets/saturn.png); width: 100%; position: absolute; left: 0; top: -12rem`;
    }
  });
  miniPlanets.forEach((item, i) => {
    item.style = `background-image: url(${planetsImages[i]})`;
  });
}

function addScroll(firstContainer, secondContainer) {
  if (firstContainer.style.height >= secondContainer.style.height) {
    firstContainer.style.overflowY = "scroll";
  }
}

new Planet(
  "01",
  "the smallest planet",
  "Mercury",
  ".container-planets",
  "<li>- Does not have any moons or rings.</li><li>- Is the smallest planet.</li><li>- Is the closest planet to the Sun.</li><li>- Your weight on Mercury would be 38% of your weight on Earth.</li><li>- A day on the surface of Mercury lasts 176 Earth days.</li><li>- A year on Mercury takes 88 Earth days.</li><li>- It’s not known who discovered Mercury.</li>",
  "<li>- A year on Mercury is just 88 days long. <br> One solar day (the time from noon tonoon on the planet’s surface) on Mercury lasts the equivalent of 176 Earth dayswhile the sidereal day (the time for 1 rotation in relation to a fixed point) lasts59 Earth days. Mercury is nearly tidally locked to the Sun and over time this has slowed the rotation of the planet to almost match its orbit around the Sun. Mercury also has the highest orbital eccentricity of all the planets with its distance from the Sun ranging from 46 to 70 million km.</li><li>- Mercury is the smallest planet in the Solar System. <br> One of five planets visible with the naked eye a, Mercury is just 4,879 Kilometres across its equator, compared with 12,742 Kilometres for the Earth.</li><li>- Mercury is the second densest planet. <br> Even though the planet is small, Mercury is very dense. Each cubic centimetre has a density of 5.4 grams, with only the Earth having a higher density. This is largely due to Mercury being composed mainly of heavy metals and rock.</li><li>- Mercury has wrinkles. <br> As the iron core of the planet cooled and contracted, the surface of the planet became wrinkled. Scientist have named these wrinkles, Lobate Scarps. These Scarps can be up to a mile high and hundreds of miles long.</li><li>- Mercury has a molten core. <br> In recent years scientists from NASA have come to believe the solid iron core of Mercury could in fact be molten. Normally the core of smaller planets cools rapidly, but after extensive research, the results were not in line with those expected from a solid core. Scientists now believe the core to contain a lighter element such as sulphur, which would lower the melting temperature of the core material. It is estimated Mercury’s core makes up 42% of its volume, while the Earth’s core makes up 17%.</li><li>- Mercury is only the second hottest planet. <br> Despite being further from the Sun,Venusexperiences higher temperatures.The surface of Mercury which faces the Sun sees temperatures of up to 427°C, whilst on the alternate side this can be as low as -173°C. This is due to the planet having no atmosphere to help regulate the temperature.</li><li>- Mercury is the most cratered planet in the Solar System. <br> Unlike many other planets which “self-heal” through natural geological processes, the surface of Mercury is covered in craters. These are caused by numerous encounters with asteroids and comets. Most Mercurian craters are named after famous writers and artists. Any crater larger than 250 kilometres in diameter is referred to as a Basin. The Caloris Basin is the largest impact crater on Mercury covering approximately 1,550 km in diameter and was discovered in 1974 by the Mariner 10 probe.</li><li>- Only two spacecraft have ever visited Mercury. <br> Owing to its proximity to the Sun, Mercury is a difficult planet to visit. During 1974 and 1975 Mariner 10 flew by Mercury three times, during this time they mapped just under half of the planet’s surface. On August 3rd 2004, the Messenger probe was launched from Cape Canaveral Air Force Station, this was the first spacecraft to visit since the mid 1970’s.</li><li>- Mercury is named for the Roman messenger to the gods. <br> The exact date of Mercury’s discovery is unknown as it pre-dates its first historical mention, one of the first mentions being by the Sumerians around in 3,000 BC.</li><li>- Mercury has an atmosphere (sort of). <br> Mercury has just 38% the gravity of Earth, this is too little to hold on to what atmosphere it has which is blown away by solar winds. However while gases escape into space they are constantly being replenished at the same time by the same solar winds, radioactive decay and dust caused by micrometeorites.</li>"
).render();

new PlanetLeft(
  "02",
  "nearly as big as the Earth",
  "Venus",
  ".container-planets",
  "<li>- Does not have any moons or rings.</li><li>- Is nearly as big as the Earth with a diameter of 12,104 km.</li><li>- is thought to be made up of a central iron core, rocky mantle and silicate crust.</li><li>- A day on the surface of Venus (solar day) would appear to take 117 Earth days.</li><li>- A year on Venus takes 225 Earth days.</li><li>- The surface temperature on Venus can reach 471 °C</li>",
  "<li>- A day on Venus lasts longer than a year. <br> It takes 243 Earth days to rotate once on its axis (sidereal day). The planet’s orbit around the Sun takes 225 Earth days, compared to the Earth’s 365. A day on the surface of Venus (solar day) takes 117 Earth days.</li><li>- Venus rotates in the opposite direction to most other planets.  <br> This means that Venus is rotating in the opposite direction to the Sun, this is also known as a retrograde rotation. One possible reason for this might be a collision with an asteroid or other object.</li><li>- Venus is the second brightest object in the night sky. <br> Only the Moon is brighter. With a magnitude of between -3.8 to -4.6 Venus is so bright it can be seen during daytime on a clear day.</li><li>- Atmospheric pressure on Venus is 92 times greater than the Earth’s. <br> Due to this crushing small asteroids when they enter its atmosphere Venus has not small craters. The pressure felt on Venus’ surface is equivalent to that deep beneath the sea on Earth.</li><li>- Venus is often called the Earth’s sister planet. <br> The Earth and Venus are very similar in size with only a 638 km difference in diameter and Venus having 81.5% of the Earth’s mass. Both also have a central core, a molten mantle and a crust.</li><li>- The same side of Venus always faces the Earth when at their closest. <br> It is possible this is due to the Earth’s gravational influence.</li><li>- Venus is also known as the Morning Star and the Evening Star. <br> Early civilisations thought Venus was two different bodies. These were called Phosphorus and Hesperus by the Greeks, and Lucifer and Vesper by the Romans. When Venus’ orbit around the Sun overtakes Earth’s orbit, it changes from being visible after sunset to being visible before sunrise. Mayan astronomers made detailed observations of Venus as early as 650 AD.</li><li>- Venus is the hottest planet in our solar system. <br> The average surface temperature is 462 °C, and because Venus does not tilt on its axis, there is no seasonal variation. The dense atmosphere of around 96.5 percent carbon dioxide traps heat and causes a greenhouse effect</li>"
).render();

new Planet(
  "03",
  "the densest planet in the Solar System",
  "Earth",
  ".container-planets",
  "<li>- Rotation is gradually slowing</li><li>- Was once believed to be the centre of the universe</li><li>- Has a powerful magnetic field</li><li>- There is only one natural satellite of the planet Earth</li><li>- Earth is the only planet not named after a god</li><li>- Is the densest planet in the Solar System</li>",
  "<li>That's all for now</li>"
).render();

new PlanetLeft(
  "04",
  "the largest dust storms in the solar system",
  "Mars",
  ".container-planets",
  "<li>- Mars and Earth have approximately the same landmass</li><li>- IIs home to the tallest mountain in the solar system</li><li>- Only 18 missions to Mars have been successful</li><li>- Has the largest dust storms in the solar system</li><li>- On Mars the Sun appears about half the size as it does on Earth</li><li>- Pieces of Mars have fallen to Earth</li><li>- Mars takes its name from the Roman god of war</li><li>- There are signs of liquid water on Mars</li><li>- One day Mars will have a ring</li><li>- Sunsets on Mars are blue</li>",
  "<li>That's all for now</li>"
).render();

new Planet(
  "05",
  "the shortest day of all the planets",
  "Jupiter",
  ".container-planets",
  "<li>- Is the fourth brightest object in the solar system</li><li>- The ancient Babylonians were the first to record their sightings of Jupiter</li><li>- Has the shortest day of all the planets</li><li>- Jupiter orbits the Sun once every 11.8 Earth years</li><li>- Has unique cloud features</li><li>- The Great Red Spot is a huge storm on Jupiter</li><li>- Jupiter’s interior is made of rock, metal, and hydrogen compounds</li><li>- Jupiter’s moon Ganymede is the largest moon in the solar system</li><li>- Has a thin ring system</li><li>- Eight spacecraft have visited Jupiter</li>",
  "<li>That's all for now</li>"
).render();

new PlanetLeft(
  "06",
  "the flattest planet",
  "Saturn",
  ".container-planets",
  "<li>- Is the most distant planet that can be seen with the naked eye</li><li>- Was known to the ancients, including the Babylonians and Far Eastern observers</li><li>- Is the flattest planet</li><li>- Saturn orbits the Sun once every 29.4 Earth years</li><li>- Saturn’s upper atmosphere is divided into bands of clouds</li><li>- Has oval-shaped storms similar to Jupiter’s</li><li>- Is made mostly of hydrogen</li><li>- Has the most extensive rings in the solar system</li><li>- Has 150 moons and smaller moonlets</li><li>- Titan is a moon with complex and dense nitrogen-rich atmosphere</li><li>- Four spacecraft have visited Saturn</li><li>- Has more moons than any other planet</li>",
  "<li>That's all for now</li>"
).render();

new Planet(
  "07",
  "officially discovered in 1781",
  "Uranus",
  ".container-planets",
  "<li>- Was officially discovered by Sir William Herschel in 1781</li><li>- Uranus turns on its axis once every 17 hours, 14 minutes</li><li>- Uranus makes one trip around the Sun every 84 Earth years</li><li>- Is often referred to as an “ice giant” planet</li><li>- Uranus hits the coldest temperatures of any planet</li><li>- Has two sets of very thin dark coloured rings</li><li>- Uranus’ moons are named after characters created by William Shakespeare and Alexander Pope</li><li>- Only one spacecraft has flown by Uranus</li>",
  "<li>That's all for now</li>"
).render();

new PlanetLeft(
  "08",
  "the smallest gas giant",
  "Neptune",
  ".container-planets",
  "<li>- Neptune is the most distant planet from the Sun</li><li>- Is the smallest gas giant</li><li>- A year on Neptune lasts 165 Earth years</li><li>- Is named after the Roman god of the sea</li><li>- Neptune has 6 faint rings</li>",
  "<li>- Neptune was not known to the ancients. <br> It is not visible to the naked eye and was first observed in 1846 Its position was determined using mathematical predictions. It wa named after the Roman god of the sea.</li><li>- Neptune spins on its axis very rapidly. <br> Its equatorial clouds take 16 hours to make one rotation. This is because Neptune is not solid body.</li><li>- Neptune is the smallest of the ice giants. <br> Despite being smaller than Uranus, Neptune has a greater mass Below its heavy atmosphere, Uranus is made of layers of hydrogen helium, and methane gases. They enclose a layer of water, ammonia and methane ice. The inner core of the planet is made of rock.</li><li>- Neptune has a very active climate. <br> Large storms whirl through its upper atmosphere, and high-spee winds track around the planet at up 600 meters per second. One of the largest storms ever seen was recorded in 1989. It was calle the Great Dark Spot. It lasted about five years.</li><li>- Neptune has a very thin collection of rings. <br> They are likely made up of ice particles mixed with dust grain and possibly coated with a carbon-based substance.</li><li>- Neptune has 14 moons. <br> The most interesting moon is Triton, a frozen world that isspewing nitrogen ice and dust particles out from below itssurface. It was likely captured by the gravitational pull ofNeptune. It is probably the coldest world in the solar system.<li><li>- Only one spacecraft has flown by Neptune. <br> In 1989, the Voyager 2 spacecraft swept past the planet. It returned the first close-up images of the Neptune system. The NASA ESA Hubble Space Telescope has also studied this planet, as have a number of ground-based telescopes.</li>"
).render();

new Planet(
  "09",
  "the Roman god of the underworld",
  "Pluto",
  ".container-planets",
  "<li>- Was discovered on February 18th, 1930 by Clyde Tombaugh of the Lowell Observatory.</li><li>- In 2006, Pluto was reclassified from a planet to a dwarf planet</li><li>- The planet is named for Pluto, the Roman god of the underworld</li><li>- It takes Pluto 246.04 Earth years to orbit the Sun</li><li>- Pluto has five known moons</li><li>- Pluto is smaller than many moons</li><li>- Sunlight on Pluto has the same intensity as moonlight on Earth</li>",
  "<li>That's all for now</li>"
).render();

const factsGround = document.querySelectorAll(".modal-facts-ground"),
  allFacts = document.querySelectorAll(".modal-facts"),
  modals = document.querySelectorAll(".modal"),
  moreAboutPlanets = document.querySelectorAll(".more"),
  miniPlanets = document.querySelectorAll(".modal-top_mini-planet"),
  closeModalIcons = document.querySelectorAll(".close-modal-icon"),
  closeModalBtn = document.querySelectorAll(".close-modal");

changeImage();

factsGround.forEach(ground => {
  allFacts.forEach(fact => {
    addScroll(ground, fact);
  });
});

function modalSettings(bool) {
  if (bool === true) {
    modals.forEach((modal, j) => {
      if (!modal.classList.contains("hidden")) {
        document.style = "overflow: hidden;";
      }
      moreAboutPlanets.forEach((more, i) => {
        more.addEventListener("click", () => {
          modals[i].classList.remove("hidden");
        });
      });
      document.addEventListener("keydown", e => {
        if (e.code === "Escape") {
          modals[j].classList.add("hidden");
        }
      });

      miniPlanets[j].addEventListener("mouseover", () => {
        closeModalIcons[j].classList.add("close-modal-icon-active");
      });

      miniPlanets[j].addEventListener("mouseout", () => {
        closeModalIcons[j].classList.remove("close-modal-icon-active");
      });

      closeModalBtn[j].addEventListener("click", () => {
        modals[j].classList.add("hidden");
      });
    });
  } else {
    modals.forEach((modal, j) => {
      if (!modal.classList.contains("hidden")) {
        document.style = "overflow: hidden;";
      }
      moreAboutPlanets.forEach((more, i) => {
        more.addEventListener("click", () => {
          modals[i].classList.remove("hidden");
          closeModalIcons[i].classList.add("close-modal-icon-active");
        });
      });
      document.addEventListener("keydown", e => {
        if (e.code === "Escape") {
          modals[j].classList.add("hidden");
        }
      });

      closeModalBtn[j].addEventListener("click", () => {
        modals[j].classList.add("hidden");
      });
    });
  }
}

console.log(document.body.clientWidth);

// Паралакс и скролл
const planets = document.querySelectorAll(".planet-img");

function paralaxThis(elem, trX, trY) {
  window.addEventListener("mousemove", function (e) {
    const paralaxItem = document.querySelector(elem);

    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    paralaxItem.style.transform =
      "translate(-" + x * trX + "px, -" + y * trY + "px)";
  });
}

function scrollParalax(boolean) {
  if (boolean === true) {
    window.addEventListener("scroll", function (e) {
      let scrollResult = window.pageYOffset;
      /* console.log(scrollResult); */
      const schadow = document.querySelector(".linear-black");

      schadow.style.height = 30 + scrollResult + "%";
    });
  }
}

if (document.body.clientWidth <= 450) {
  scrollParalax(true);

  modalSettings(false);
} else {
  modalSettings(true);

  paralaxThis(".first-planets-big__earth", 15, 5);
  paralaxThis(".first-planets-moon", 8, 3);
  scrollParalax(true);
}
