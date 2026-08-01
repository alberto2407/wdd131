// ----- TEMPLES ARRAY -----
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 120000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-evening-1905504.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 23",
        area: 58000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-1-2278179.jpg"
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, March, 21",
        area: 45000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guayaquil-ecuador/400x250/guayaquil-ecuador-temple-1159057-wallpaper.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Lisbon Portugal",
        location: "Lisbon, Portugal",
        dedicated: "2019, March, 10",
        area: 45800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x250/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
    },
    {
        templeName: "The Hague Netherlands",
        location: "The Hague, Netherlands",
        dedicated: "2019, March, 10",
        area: 45800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/4-hague-netherlands-temple-2141249.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Quito Ecuador",
        location: "Quito, Ecuador",
        dedicated: "1999, March, 21",
        area: 45000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/400x250/quito_ecuador_temple2.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 21",
        area: 45800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-954942-wallpaper.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11-15",
        area: 35546,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-653038-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52880,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-main.jpeg"
    }
];

//----- REFERENCES TO DOM ELEMENTS -----
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navigation');
const grid = document.getElementById('temple-grid');
const title = document.getElementById('title');

//----- FUNCTION FOR RENDERING TEMPLES -----
function renderTemples(templeArray) {
    grid.innerHTML = '';

    templeArray.forEach(temple => {
        //Create temple card
        const card = document.createElement('div');
        card.className = 'temple-card';
        
        //Create image
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = 'lazy';
        img.width = 400;
        img.height = 250;
        
        //Create info container
        const info = document.createElement('div');
        info.className = 'temple-info';
        info.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;
        
        //Add elements to the card
        card.appendChild(img);
        card.appendChild(info);
        
        //Add card to grid
        grid.appendChild(card);
    });
}

//----- FILTERED FUNCTIONS -----
function filterTemples(filterType) {
    let filtered = [];
    
    switch(filterType) {
        case 'home':
            filtered = temples;
            break;
        case 'old':
            filtered = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            filtered = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            filtered = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filtered = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filtered = temples;
    }
    
    renderTemples(filtered);
    updateActiveLink(filterType);
}

// ----- UPDATE ACTIVE LINK -----
function updateActiveLink(filterType) {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.getElementById(filterType);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ----- HAMBURGER MENU -----
hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');
    title.classList.toggle('hidden');

    
    if (nav.classList.contains('open')) {
        hamburger.textContent = '✕';
        hamburger.setAttribute('aria-label', 'Close navigation menu');
        title.classList.add('hidden');
    } else {
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-label', 'Open navigation menu');
        title.classList.remove('hidden');
    }
});

//Close navigation menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-label', 'Open navigation menu');
        }
    });
});

// ----- EVENT LISTENERS TO FILTERS -----
document.getElementById('home').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('home');
});

document.getElementById('old').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('old');
});

document.getElementById('new').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('new');
});

document.getElementById('large').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('large');
});

document.getElementById('small').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('small');
});

// ----- FOOTER DINÁMICO -----
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// ----- RENDER TEMPLES -----
renderTemples(temples);