'use strict';

class PlanetLeft {
    constructor(num, overhead, name, parentSelector, listItem) {
        this.num = num;
        this.overhead = overhead;
        this.name = name;
        this.parent = document.querySelector(parentSelector);
        this.listItem = listItem;
    }

    render() {

        const planet = document.createElement('div');

        planet.classList.add('planet');


        planet.innerHTML = `
        <div class="planet-img">
        </div>
            <div class="planet-content">
                <div class="number">${this.num}</div>
                <div class="overhead">
                    <div class="overhead__line"></div>
                    <div class="overhead__text">
                        <p>${this.overhead}</p>
                    </div>
                </div>
                <div class="planet-title">
                    <h2>${this.name}</h2>
                </div>
                <div class="planet-facts">
                    <ul>
                        ${this.listItem}
                    </ul>
                    <div class="more">
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

        this.parent.append(planet);
    }
}

class Planet {
    constructor(num, overhead, name, parentSelector, listItem) {
        this.num = num;
        this.overhead = overhead;
        this.name = name;
        this.parent = document.querySelector(parentSelector);
        this.listItem = listItem;
    }

    render() {

        const planet = document.createElement('div');

        planet.classList.add('planet');


        planet.innerHTML = `
            <div class="planet-content">
                <div class="number">${this.num}</div>
                <div class="overhead">
                    <div class="overhead__line"></div>
                    <div class="overhead__text">
                        <p>${this.overhead}</p>
                    </div>
                </div>
                <div class="planet-title">
                    <h2>${this.name}</h2>
                </div>
                <div class="planet-facts">
                    <ul>
                        ${this.listItem}
                    </ul>
                    <div class="more">
                        <p>read more </p><svg width="24" height="17" viewBox="0 0 24 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 0.499999L14.59 1.91L20.17 7.5L-3.93402e-07 7.5L-3.0598e-07 9.5L20.17 9.5L14.58 15.08L16 16.5L24 8.5L16 0.499999Z"
                                fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        <div class="planet-img">
        </div>
    `;

        this.parent.append(planet);
    }
}

const planetsImages = [
    'src/img/planets/Mercury.png',
    'src/img/planets/venus.png',
    'src/img/planets/earth.png',
    'src/img/planets/mars.png',
    'src/img/planets/jupiter.png',
    'src/img/planets/saturn.png',
    'src/img/planets/uranus.png',
    'src/img/planets/neptune.png',
    'src/img/planets/pluto.png',
];

function changeImage() {
    const planetImage = document.querySelectorAll('.planet-img');
    const planetBlock = document.querySelectorAll('.planet-content');
    planetImage.forEach((item, i) => {
        item.style = `background-image: url(${planetsImages[i]})`;
        planetImage[5].style = `background-image: url(src/img/planets/saturn.png); width: 100%; position: absolute; left: -21.5vw`;
        planetImage[7].style = 'background-image: url(src/img/planets/neptune.png); background-size: 130%;';
        planetBlock[5].style = 'width: 50%';
    });
    console.log(39 - 48);
}

new Planet(
    '01',
    'the smallest planet',
    'Mercury',
    '.container-planets',
    '<li>Does not have any moons or rings.</li><li>Is the smallest planet.</li><li>Is the closest planet to the Sun.</li><li>Your weight on Mercury would be 38% of your weight on Earth.</li><li>A day on the surface of Mercury lasts 176 Earth days.</li><li>A year on Mercury takes 88 Earth days.</li><li>It’s not known who discovered Mercury.</li>'
).render();

new PlanetLeft(
    '02',
    'nearly as big as the Earth',
    'Venus',
    '.container-planets',
    '<li>Does not have any moons or rings.</li><li>Is nearly as big as the Earth with a diameter of 12,104 km.</li><li>is thought to be made up of a central iron core, rocky mantle and silicate crust.</li><li>A day on the surface of Venus (solar day) would appear to take 117 Earth days.</li><li>A year on Venus takes 225 Earth days.</li><li>The surface temperature on Venus can reach 471 °C</li>'
).render();

new Planet(
    '03',
    'the densest planet in the Solar System',
    'Earth',
    '.container-planets',
    '<li>Rotation is gradually slowing</li><li>Was once believed to be the centre of the universe</li><li>Has a powerful magnetic field</li><li>There is only one natural satellite of the planet Earth</li><li>Earth is the only planet not named after a god</li><li>Is the densest planet in the Solar System</li>'
).render();

new PlanetLeft(
    '04',
    'the largest dust storms in the solar system',
    'Mars',
    '.container-planets',
    '<li>Mars and Earth have approximately the same landmass</li><li>IIs home to the tallest mountain in the solar system</li><li>Only 18 missions to Mars have been successful</li><li>Has the largest dust storms in the solar system</li><li>On Mars the Sun appears about half the size as it does on Earth</li><li>Pieces of Mars have fallen to Earth</li><li>Mars takes its name from the Roman god of war</li><li>There are signs of liquid water on Mars</li><li>One day Mars will have a ring</li><li>Sunsets on Mars are blue</li>'
).render();

new Planet(
    '05',
    'the shortest day of all the planets',
    'Jupiter',
    '.container-planets',
    '<li>Is the fourth brightest object in the solar system</li><li>The ancient Babylonians were the first to record their sightings of Jupiter</li><li>Has the shortest day of all the planets</li><li>Jupiter orbits the Sun once every 11.8 Earth years</li><li>Has unique cloud features</li><li>The Great Red Spot is a huge storm on Jupiter</li><li>Jupiter’s interior is made of rock, metal, and hydrogen compounds</li><li>Jupiter’s moon Ganymede is the largest moon in the solar system</li><li>Has a thin ring system</li><li>Eight spacecraft have visited Jupiter</li>'
).render();

new PlanetLeft(
    '06',
    'the flattest planet',
    'Saturn',
    '.container-planets',
    '<li>Is the most distant planet that can be seen with the naked eye</li><li>Was known to the ancients, including the Babylonians and Far Eastern observers</li><li>Is the flattest planet</li><li>Saturn orbits the Sun once every 29.4 Earth years</li><li>Saturn’s upper atmosphere is divided into bands of clouds</li><li>Has oval-shaped storms similar to Jupiter’s</li><li>Is made mostly of hydrogen</li><li>Has the most extensive rings in the solar system</li><li>Has 150 moons and smaller moonlets</li><li>Titan is a moon with complex and dense nitrogen-rich atmosphere</li><li>Four spacecraft have visited Saturn</li><li>Has more moons than any other planet</li>'
).render();

new Planet(
    '07',
    'officially discovered in 1781',
    'Uranus',
    '.container-planets',
    '<li>Was officially discovered by Sir William Herschel in 1781</li><li>Uranus turns on its axis once every 17 hours, 14 minutes</li><li>Uranus makes one trip around the Sun every 84 Earth years</li><li>Is often referred to as an “ice giant” planet</li><li>Uranus hits the coldest temperatures of any planet</li><li>Has two sets of very thin dark coloured rings</li><li>Uranus’ moons are named after characters created by William Shakespeare and Alexander Pope</li><li>Only one spacecraft has flown by Uranus</li>'
).render();

new PlanetLeft(
    '08',
    'the smallest gas giant',
    'Neptune',
    '.container-planets',
    '<li>Neptune is the most distant planet from the Sun</li><li>Is the smallest gas giant</li><li>A year on Neptune lasts 165 Earth years</li><li>Is named after the Roman god of the sea</li><li>Neptune has 6 faint rings</li>'
).render();

new Planet(
    '09',
    'the Roman god of the underworld',
    'Pluto',
    '.container-planets',
    '<li>Was discovered on February 18th, 1930 by Clyde Tombaugh of the Lowell Observatory</li><li>In 2006, Pluto was reclassified from a planet to a dwarf planet</li><li>The planet is named for Pluto, the Roman god of the underworld</li><li>It takes Pluto 246.04 Earth years to orbit the Sun</li><li>Pluto has five known moons</li><li>Pluto is smaller than many moons</li><li>Sunlight on Pluto has the same intensity as moonlight on Earth</li>'
).render();



changeImage();