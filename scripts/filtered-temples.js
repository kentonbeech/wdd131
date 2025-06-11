const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg",
  },
  {
    templeName: "Preston England",
    location: "Preston, England",
    dedicated: "1998, June, 7",
    area: 69630,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg",
  },
  {
    templeName: "London England",
    location: "London, England",
    dedicated: "1992, October, 18",
    area: 42652,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("Hamburger");
  const nav = document.querySelector("nav");

  hamburgerIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      hamburgerIcon.classList.add("active");
    } else {
      hamburgerIcon.classList.remove("active");
    }
  });

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  const templeGrid = document.getElementById("GridContainer");

  // New render function to clear and display temples
  function renderTemples(templesToRender) {
    templeGrid.innerHTML = ""; // Clear existing cards
    templesToRender.forEach((temple) => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");

      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${
        temple.templeName
      }" class="temple-image" loading="lazy" />
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      `;

      templeGrid.appendChild(templeCard);
    });
  }

  function filterTemples(filter) {
    let filtered = [];
    switch (filter) {
      case "old":
        filtered = temples.filter(
          (temple) => new Date(temple.dedicated).getFullYear() < 1900
        );
        break;
      case "new":
        filtered = temples.filter(
          (temple) => new Date(temple.dedicated).getFullYear() > 2000
        );
        break;
      case "large":
        filtered = temples.filter((temple) => temple.area > 90000);
        break;
      case "small":
        filtered = temples.filter((temple) => temple.area < 10000);
        break;
      case "home":
      default:
        filtered = temples;
        break;
    }
    renderTemples(filtered);
  }

  // Render all temples initially
  renderTemples(temples);

  // Attach filter click handler
  const filterButtons = document.getElementById("FilterButtons");
  filterButtons.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName === "A") {
      const filter = event.target.getAttribute("data-filter");
      filterTemples(filter);
    }
  });
});
