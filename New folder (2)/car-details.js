// Sample car data to simulate fetching from a database
const cars = [
    {
        id: 1,
        name: 'Honda CR-V 2025',
        price: '$30,000',
        description: 'A reliable and fuel-efficient SUV with advanced safety features.',
        image: 'https://media.ed.edmunds-media.com/honda/cr-v/2025/oem/2025_honda_cr-v_4dr-suv_ex-l_fq_oem_1_1280.jpg',
        features: ['Automatic Transmission', 'Hybrid Engine', 'Leather Seats', 'Advanced Safety Package']
    },
    {
        id: 2,
        name: 'Toyota RAV4 2025',
        price: '$35,000',
        description: 'A versatile SUV with excellent off-road capabilities and modern technology.',
        image: 'https://media.ed.edmunds-media.com/toyota/rav4/2025/oem/2025_toyota_rav4_4dr-suv_ex-l_fq_oem_1_1280.jpg',
        features: ['All-Wheel Drive', 'Touchscreen Display', 'Sunroof', 'Adaptive Cruise Control']
    }
    // Add more car data objects as needed
];

// Function to get car ID from the URL
function getCarIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Function to display car details on the page
function displayCarDetails(carId) {
    const car = cars.find(c => c.id === parseInt(carId));
    
    if (car) {
        const carInfoDiv = document.getElementById('car-info');
        carInfoDiv.innerHTML = `
            <h1>${car.name}</h1>
            <img src="${car.image}" alt="${car.name}">
            <p>Price: ${car.price}</p>
            <p>Description: ${car.description}</p>
            <h3>Features:</h3>
            <ul>
                ${car.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="catalogue.html" class="back-button">Back to Catalogue</a>
        `;
    } else {
        document.getElementById('car-info').innerHTML = '<p>Car not found.</p>';
    }
}

// Get car ID from URL and display the details
const carId = getCarIdFromUrl();
displayCarDetails(carId);
