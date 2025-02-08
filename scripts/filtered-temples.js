
//HAMBURGUER BUTTON//
document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Lisbon Portugal",
        location: "Lisbon, Portugal",
        dedicated: "2019, September, 15",
        area: 23730,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 28",
        area: 32895,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg",
        width: "400px",
        height: "225px"
        
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, August, 1-2",
        area: 45000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Quito Ecuador",
        location: "Quito, Ecuador",
        dedicated: "2022, November, 20",
        area: 45000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19-21",
        area: 45800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Kirtland",
        location: "Kirtland, Ohio",
        dedicated: "1836, March, 27",
        area: 15000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "St. George",
        location: "St. George, Utah",
        dedicated: "1975, Octubre, 15-25",
        area: 143969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg",
        width: "400px", 
        height: "225px"
    },
    {
        templeName: "Logan",
        location: "Logan, Utah",
        dedicated: "1884, Octubre, 17-19",
        area: 119619,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg",
        width: "400px", 
        height: "225px"
    },
    {
        templeName: "Manti",
        location: "Manti, Utah",
        dedicated: "2000, February, 26-27",
        area: 3709,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/ciudad-juarez-mexico-temple/ciudad-juarez-mexico-temple-53312-main.jpg",
        width: "400px", 
        height: "225px"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11-15",
        area: 35546,
        imageUrl:        
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg",
        width: "400px", 
        height: "225px"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27-29",
        area: 53997,
        imageUrl:
            "https://a.mktgcdn.com/p/RHr7JVYSAt8Hnyg-b0HJtHat8xbVYG938BdybqdmQX8/1500x943.jpg",
        width: "400px",
        height: "225px"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.temple-container');
    const links = document.querySelectorAll('.navigation a');
    const title = document.querySelector('.title');

    const displayTemples = (filteredTemples) => {
        container.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = document.createElement('figure');
            card.className = 'temple-card';
            card.innerHTML = `
                    <img src="${temple.imageUrl}"  loading="lazy"  width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>   
            `;
            container.appendChild(card);
        });
    };

    const filterTemples = (criteria) => {
        let filteredTemples = temples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                title.innerHTML = 'Old Temples';
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 1900);
                title.innerHTML = 'New Temples';
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                title.innerHTML = 'Large Temples';
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                title.innerHTML = 'Small Temples';
                break;
            default:
                filteredTemples = temples;
                title.innerHTML = 'All Temples';
                break;
        }
        displayTemples(filteredTemples);
    };

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
            filterTemples(e.target.id);
        });
    });

    filterTemples('nav');
});

//Last Modified
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
});
