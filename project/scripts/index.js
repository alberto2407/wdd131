document.addEventListener("DOMContentLoaded", () => {
    // ============== //
    // HAMBURGER MENU //
    // ============== //
    const burgerButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const titleHeader = document.querySelector('.title-header');

    burgerButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        burgerButton.classList.toggle('open');
        titleHeader.classList.toggle('hidden');
    });
    // Close the menu when a link is clicked
    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('open');
            burgerButton.classList.remove('open');
            titleHeader.classList.remove('hidden');
        });
    });

    // ======= //
    // OBJECTS //
    // ======= //
    const siteConfig = {
        name: "The Restored Gospel",
        year: new Date().getFullYear(),
        author: "Alberto F. Conejo",
        pages: ["Home", "Services", "Contact"],
        colors: {
            primary: "#155263",
            secondary: "#8a3415"
        },
        description: "A website about the Restoration of the Gospel of Jesus Christ and its principles.",
    };

    console.log("Site Config:", siteConfig);
    console.log("Pages:", siteConfig.pages.join(", "));
    console.log("Primary Color:", siteConfig.colors.primary);

    // ================ //
    // PRINCIPLES ARRAY //
    // ================ //
    const restoringPrinciples = [
        {
            name: "Beloved God",
            description: "God is our Heavenly Father. He loves us perfectly.",
            scripture: "God so loved the world, that he gave his only begotten Son (John 3:16)",
            imageUrl: "images/beloved_god.webp"
        },
        {
            name: "Prophets",
            description: "Prophets are called by God to speak His word. They are witnesses of Jesus Christ and testify of His divinity.",
            scripture: "Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets (Amos 3:7)",
            imageUrl: "images/prophets.webp"
        },
        {
            name: "Christ Ministry",
            description: "Jesus Christ is the Son of God. His ministry on earth was a perfect example of love, service, and sacrifice.",
            scripture: "For God so loved the world, that he gave his only begotten Son (John 3:16)",
            imageUrl: "images/minitery.webp"
        },
        {
            name: "Apostasy",
            description: "The Great Apostasy was a turning away from the truth. After the death of the apostles, many plain and precious truths were lost.",
            scripture: "My people are destroyed for lack of knowledge (Hosea 4:6)",
            imageUrl: "images/apostasy.webp"
        },
        {
            name: "Joseph Smith",
            description: "Joseph Smith was called as a prophet to restore the gospel. In 1820, he saw God the Father and Jesus Christ in the Sacred Grove.",
            scripture: "I saw a pillar of light... and I saw two Personages (Joseph Smith History 1:16-17)",
            imageUrl: "images/joseph_smith.webp"
        },
        {
            name: "Pray",
            description: "Prayer is a way to communicate with God. It is how we express our gratitude, confess our sins, and ask for guidance.",
            scripture: "Pray always, and not faint (2 Nephi 32:9)",
            imageUrl: "images/pray.webp"
        }
    ];

    // ============= //
    // ARRAY METHODS //
    // ============= //
    restoringPrinciples.forEach((principle, index) => {
        console.log(`${index + 1}. ${principle.name}: ${principle.description.substring(0, 50)}...`);
    });

    const longDescriptions = restoringPrinciples.filter(p => p.description.length > 80);
    console.log(`Principles with long descriptions: ${longDescriptions.length}`);

    const principleNames = restoringPrinciples.map(p => p.name);
    console.log(`Principles: ${principleNames.join(" | ")}`);

    // ============== //
    // RENDER TARGETS //
    // ============== //
    function renderPrinciples() {
        const galleryGrid = document.querySelector('.gallery-grid');
        if (!galleryGrid) return;

        galleryGrid.innerHTML = '';

        restoringPrinciples.forEach(principle => {

            // Create card elements
            const card = document.createElement('div');
            card.className = 'gallery-card';
            card.dataset.principle = principle.name.toLowerCase().replace(/ /g, '-');

            // Create and append card content
            const img = document.createElement('img');
            img.src = principle.imageUrl;
            img.alt = principle.name;
            img.loading = 'lazy';

            // Create title 
            const title = document.createElement('h3');
            title.textContent = principle.name;

            // Create details container
            const details = document.createElement('div');
            details.className = 'card-details';

            // Create description and scripture paragraphs
            const descParagraph = document.createElement('p');
            descParagraph.innerHTML = `<strong>${principle.name}</strong>. ${principle.description}`;

            // Create scripture paragraph
            const scriptureParagraph = document.createElement('p');
            scriptureParagraph.className = 'scripture';
            scriptureParagraph.textContent = `"${principle.scripture}"`;

            // Append paragraphs to details
            details.appendChild(descParagraph);
            details.appendChild(scriptureParagraph);

            // Append image, title, and details to card
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(details);

            // Append card to gallery grid
            galleryGrid.appendChild(card);
        });
    }

    function setupExpandableCards() {
        const galleryGrid = document.querySelector('.gallery-grid');

        // Ensure the gallery grid exists before adding the event listener
        galleryGrid.addEventListener('click', function (e) {
            const card = e.target.closest('.gallery-card');
            if (!card) return;

            // Toggle the expanded state of the clicked card
            if (card.classList.contains('expanded')) {
                card.classList.remove('expanded');
                return;
            }

            // Collapse all other cards
            const allCards = document.querySelectorAll('.gallery-card');
            allCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('expanded');
                }
            });

            // Expand the clicked card
            card.classList.add('expanded');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // Call the functions to render principles and set up expandable cards
    renderPrinciples();
    setupExpandableCards();

    // =============== //
    // VISITOR COUNTER //
    // =============== //

    // Get the counter value from localStorage
    let visitCount = localStorage.getItem('visitCount');

    // Increment and update counter
    if (visitCount === null) {
        visitCount = 0;
    }
    else {
        visitCount = parseInt(visitCount);
    }
    visitCount++;

    // Store the updated counter value back to localStorage
    localStorage.setItem('visitCount', visitCount);
    console.log(`Visits to this page: ${visitCount}`);

    // Show the updated counter
    const visitCounterElement = document.getElementById('visitCount');
    if (visitCounterElement) {
        visitCounterElement.textContent = visitCount;
    }
});