document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth',
                });
            }
        });
    });
});

function createCard(imageSrc, altText, title, description, websiteLink, githubLink) {
    // Create card container
    const card = document.createElement('div');
    card.className = 'card swiper-slide';

    // Create image-content container
    const imageContent = document.createElement('div');
    imageContent.className = 'image-content';

    // Add overlay span
    const overlay = document.createElement('span');
    overlay.className = 'overlay';
    imageContent.appendChild(overlay);

    // Add card image
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    img.className = 'card-img';
    cardImage.appendChild(img);
    imageContent.appendChild(cardImage);

    // Append image-content to card
    card.appendChild(imageContent);

    // Create card-content container
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Add title
    const name = document.createElement('h2');
    name.className = 'name';
    name.textContent = title;
    cardContent.appendChild(name);

    // Add description
    const desc = document.createElement('p');
    desc.className = 'description';
    desc.innerHTML = description;
    cardContent.appendChild(desc);

    // Add buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'slider-buttons';

    const websiteButton = document.createElement('a');
    websiteButton.className = 'button';
    websiteButton.href = websiteLink;
    websiteButton.target = '_blank';
    websiteButton.textContent = 'Visit Website';
    buttonContainer.appendChild(websiteButton);

    const githubIcon = document.createElement('img');
    githubIcon.src = 'assets/github-icon.png';
    githubIcon.alt = 'Github Repository';
    githubIcon.onclick = () => window.open(githubLink);
    buttonContainer.appendChild(githubIcon);

    cardContent.appendChild(buttonContainer);

    // Append card-content to card
    card.appendChild(cardContent);

    return card;
}
const cardsData = [
    {
        "imageSrc": "assets/flight-finder.webp",
        "altText": "Flight Finder",
        "title": "Flight Finder",
        "description": "A user-friendly platform to find the best flights for your trip. Simply enter your departure, destination, and trip duration, and the app suggests the cheapest travel dates and estimated costs.",
        "websiteLink": "https://ruby-handy-iridium.glitch.me/",
        "githubLink": "https://github.com/julianemran/flight-finder"
    },
    {
        "imageSrc": "assets/wordle.png",
        "altText": "Wordle Clone",
        "title": "Wordle Clone",
        "description": "This project is a clone of the popular word-guessing game Wordle. It challenges users to guess a five-letter word within six attempts.",
        "websiteLink": "https://fifth-fresh-ketch.glitch.me/",
        "githubLink": "https://github.com/julianemran/wordle"
    }
]
// Append cards to a container
const cardDiv = document.getElementById("cards-div")
cardsData.forEach(data => {
    const card = createCard(data.imageSrc, data.altText, data.title, data.description, data.websiteLink, data.githubLink);
    cardDiv.appendChild(card);
});

let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        665: {
            slidesPerView: 2,
        },
        1048: {
            slidesPerView: 3,
        },
    },
});

document.getElementById("currYear").innerHTML = new Date().getFullYear()