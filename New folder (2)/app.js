// Sample dealer data
const dealers = [
    { brand: 'Honda', name: 'Honda City Dealer', location: 'City Center' },
    { brand: 'Suzuki', name: 'Suzuki World', location: 'East Side' },
    { brand: 'Ford', name: 'Ford Store', location: 'West End' },
];

// Function to filter dealers based on selected brand
function filterDealers() {
    const brandSelect = document.getElementById('brand');
    const selectedBrand = brandSelect.value;
    const dealerList = document.getElementById('dealer-list');

    dealerList.innerHTML = ''; // Clear previous results

    const filteredDealers = dealers.filter(dealer => dealer.brand === selectedBrand);
    if (filteredDealers.length > 0) {
        filteredDealers.forEach(dealer => {
            const dealerItem = document.createElement('div');
            dealerItem.textContent = `${dealer.name} - ${dealer.location}`;
            dealerList.appendChild(dealerItem);
        });
    } else {
        dealerList.textContent = 'No dealers found for this brand.';
    }
}

// Event listener for brand selection
document.getElementById('brand').addEventListener('change', filterDealers);
// warranty

function filterBrands() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const schemes = document.querySelectorAll('.brand-image');

    schemes.forEach(scheme => {
        const brandName = scheme.querySelector('h3').textContent.toLowerCase();
        if (brandName.includes(filter)) {
            scheme.style.display = '';
        } else {
            scheme.style.display = 'none';
        }
    });
}
function toggleDetails(element) {
    const details = element.nextElementSibling;
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
} 
//dealers
document.addEventListener('DOMContentLoaded', () => {
    const dealerForm = document.getElementById('dealer-form');
    const dealerList = document.getElementById('dealer-list');

    // Sample dealer data
    const dealers = {
        honda: [
            {
                name: 'Honda City Motors',
                location: 'New York, NY',
                contact: '(123) 456-7890',
                image: 'https://images.wapcar.my/file1/fb91e51fbbca4e25a34dae604283a471_1200.jpg'
            },
            {
                name: 'Honda Quality Dealers',
                location: 'Los Angeles, CA',
                contact: '(234) 567-8901',
                image: 'https://media.wired.com/photos/628431090c454f12d5142777/4:3/w_1676,h_1257,c_limit/New-Honda-Facility-Design-Business.jpg'
            },
            {
                name: 'Honda Quality Dealers',
                location: 'Los Angeles, CA',
                contact: '(234) 567-8901',
                image: 'https://media.wired.com/photos/628431090c454f12d5142777/4:3/w_1676,h_1257,c_limit/New-Honda-Facility-Design-Business.jpg'
            }
        ],
        suzuki: [
            {
                name: 'Suzuki Reliable Cars',
                location: 'Chicago, IL',
                contact: '(345) 678-9012',
                image: 'https://preview.redd.it/why-no-suzuki-vehicles-are-they-not-that-fast-despite-v0-gkjirurvsumb1.jpg?width=640&crop=smart&auto=webp&s=a9b8a9d12e398f026be212e6d5f5fdad17504e79'
            },
            {
                name: 'Suzuki Reliable Cars',
                location: 'Chicago, IL',
                contact: '(345) 678-9012',
                image: 'https://preview.redd.it/why-no-suzuki-vehicles-are-they-not-that-fast-despite-v0-gkjirurvsumb1.jpg?width=640&crop=smart&auto=webp&s=a9b8a9d12e398f026be212e6d5f5fdad17504e79'
            },
            {
                name: 'Suzuki Reliable Cars',
                location: 'Chicago, IL',
                contact: '(345) 678-9012',
                image: 'https://preview.redd.it/why-no-suzuki-vehicles-are-they-not-that-fast-despite-v0-gkjirurvsumb1.jpg?width=640&crop=smart&auto=webp&s=a9b8a9d12e398f026be212e6d5f5fdad17504e79'
            }
        ],
        ford: [
            {
                name: 'Ford Center',
                location: 'Houston, TX',
                contact: '(456) 789-0123',
                image: 'https://images.squarespace-cdn.com/content/v1/56a77de5fd5d08018e61a57c/1531709616798-O4SYS1O5F4JGFDVIJYC6/DJI_0209.jpg'
            },
            {
                name: 'Ford Center',
                location: 'Houston, TX',
                contact: '(456) 789-0123',
                image: 'https://images.squarespace-cdn.com/content/v1/56a77de5fd5d08018e61a57c/1531709616798-O4SYS1O5F4JGFDVIJYC6/DJI_0209.jpg'
            },
            {
                name: 'Ford Center',
                location: 'Houston, TX',
                contact: '(456) 789-0123',
                image: 'https://images.squarespace-cdn.com/content/v1/56a77de5fd5d08018e61a57c/1531709616798-O4SYS1O5F4JGFDVIJYC6/DJI_0209.jpg'
            }
        ],
        toyota: [
            {
                name: 'Toyota Superstore',
                location: 'Miami, FL',
                contact: '(567) 890-1234',
                image: 'https://dealerinspire1.s3.amazonaws.com/MDKhDe1v5WrZ4mKyPyMh-s1t4%2BgAcQ%3D%3D/CDy2BvBgoiXPo024/Vm3qUg%3D%3D/Cji5ELljoA%3D%3D2/header.jpg'
            },
            {
                name: 'Toyota Superstore',
                location: 'Miami, FL',
                contact: '(567) 890-1234',
                image: 'https://dealerinspire1.s3.amazonaws.com/MDKhDe1v5WrZ4mKyPyMh-s1t4%2BgAcQ%3D%3D/CDy2BvBgoiXPo024/Vm3qUg%3D%3D/Cji5ELljoA%3D%3D2/header.jpg'
            },
            {
                name: 'Toyota Superstore',
                location: 'Miami, FL',
                contact: '(567) 890-1234',
                image: 'https://dealerinspire1.s3.amazonaws.com/MDKhDe1v5WrZ4mKyPyMh-s1t4%2BgAcQ%3D%3D/CDy2BvBgoiXPo024/Vm3qUg%3D%3D/Cji5ELljoA%3D%3D2/header.jpg'
            }
        ],
        kia: [
            {
                name: 'KIA Excellence',
                location: 'Seattle, WA',
                contact: '(678) 901-2345',
                image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/autocarpro/f573d331-5957-4a28-aad8-4c20ecb110df_WEB-KIA-4-CARS.jpg&w=750&h=490&q=75&c=1'
            },
            {
                name: 'KIA Excellence',
                location: 'Seattle, WA',
                contact: '(678) 901-2345',
                image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/autocarpro/f573d331-5957-4a28-aad8-4c20ecb110df_WEB-KIA-4-CARS.jpg&w=750&h=490&q=75&c=1'
            },
            {
                name: 'KIA Excellence',
                location: 'Seattle, WA',
                contact: '(678) 901-2345',
                image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/autocarpro/f573d331-5957-4a28-aad8-4c20ecb110df_WEB-KIA-4-CARS.jpg&w=750&h=490&q=75&c=1'
            }
        ],
        audi: [
            {
                name: 'Audi Prestige',
                location: 'San Francisco, CA',
                contact: '(789) 012-3456',
                image: 'https://vehicle-images.dealerinspire.com/ecce-110005208/WA16AAGE3RB041569/742265642ed0512330955e8e3a2eaf9a.jpg'
            },
            {
                name: 'Audi Prestige',
                location: 'San Francisco, CA',
                contact: '(789) 012-3456',
                image: 'https://vehicle-images.dealerinspire.com/ecce-110005208/WA16AAGE3RB041569/742265642ed0512330955e8e3a2eaf9a.jpg'
            },
            {
                name: 'Audi Prestige',
                location: 'San Francisco, CA',
                contact: '(789) 012-3456',
                image: 'https://vehicle-images.dealerinspire.com/ecce-110005208/WA16AAGE3RB041569/742265642ed0512330955e8e3a2eaf9a.jpg'
            }
        ],
        bmw: [
            {
                name: 'BMW Elite',
                location: 'Dallas, TX',
                contact: '(890) 123-4567',
                image: 'https://d3psh8e9i5r6b9.cloudfront.net/elitebmw/wp-content/uploads/2024/05/24143950/Untitled4.jpeg'
            },
            {
                name: 'BMW Elite',
                location: 'Dallas, TX',
                contact: '(890) 123-4567',
                image: 'https://d3psh8e9i5r6b9.cloudfront.net/elitebmw/wp-content/uploads/2024/05/24143950/Untitled4.jpeg'
            },
            {
                name: 'BMW Elite',
                location: 'Dallas, TX',
                contact: '(890) 123-4567',
                image: 'https://d3psh8e9i5r6b9.cloudfront.net/elitebmw/wp-content/uploads/2024/05/24143950/Untitled4.jpeg'
            }
        ],
        gmc: [
            {
                name: 'GMC Denali Center',
                location: 'Atlanta, GA',
                contact: '(901) 234-5678',
                image: 'https://inv.assets.ansira.net/4/5/6/33095152654.jpg'
            },
            {
                name: 'GMC Denali Center',
                location: 'Atlanta, GA',
                contact: '(901) 234-5678',
                image: 'https://inv.assets.ansira.net/4/5/6/33095152654.jpg'
            },
            {
                name: 'GMC Denali Center',
                location: 'Atlanta, GA',
                contact: '(901) 234-5678',
                image: 'https://inv.assets.ansira.net/4/5/6/33095152654.jpg'
            }
        ],
        rollsRoyce: [
            {
                name: 'Rolls Royce Luxury Motors',
                location: 'Las Vegas, NV',
                contact: '(012) 345-6789',
                image: 'https://klassen.eu/media/images/original/mi78777c41ldu51s80tg1588ga1l7zb7.jpg'
            },
            {
                name: 'Rolls Royce Luxury Motors',
                location: 'Las Vegas, NV',
                contact: '(012) 345-6789',
                image: 'https://klassen.eu/media/images/original/mi78777c41ldu51s80tg1588ga1l7zb7.jpg'
            },
            {
                name: 'Rolls Royce Luxury Motors',
                location: 'Las Vegas, NV',
                contact: '(012) 345-6789',
                image: 'https://klassen.eu/media/images/original/mi78777c41ldu51s80tg1588ga1l7zb7.jpg'
            }
        ],
        chevrolet: [
            {
                name: 'Chevrolet Performance',
                location: 'Phoenix, AZ',
                contact: '(123) 456-7891',
                image: 'https://www.billysspeedshop.com/images/products_group/29/Chevrolet-Performance.png'
            },
            {
                name: 'Chevrolet Performance',
                location: 'Phoenix, AZ',
                contact: '(123) 456-7891',
                image: 'https://www.billysspeedshop.com/images/products_group/29/Chevrolet-Performance.png'
            },
            {
                name: 'Chevrolet Performance',
                location: 'Phoenix, AZ',
                contact: '(123) 456-7891',
                image: 'https://www.billysspeedshop.com/images/products_group/29/Chevrolet-Performance.png'
            }
        ],
        lexus: [
            {
                name: 'Lexus Excellence',
                location: 'Denver, CO',
                contact: '(234) 567-8902',
                image: 'https://media.jameelmotors.com/wp-content/uploads/2023/12/The-worlds-largest-Lexus-Center-in-Ryadh-1.jpeg'
            },
            {
                name: 'Lexus Excellence',
                location: 'Denver, CO',
                contact: '(234) 567-8902',
                image: 'https://media.jameelmotors.com/wp-content/uploads/2023/12/The-worlds-largest-Lexus-Center-in-Ryadh-1.jpeg'
            },
            {
                name: 'Lexus Excellence',
                location: 'Denver, CO',
                contact: '(234) 567-8902',
                image: 'https://media.jameelmotors.com/wp-content/uploads/2023/12/The-worlds-largest-Lexus-Center-in-Ryadh-1.jpeg'
            }
        ],
        mercedes: [
            {
                name: 'Mercedes Benz Center',
                location: 'Seattle, WA',
                contact: '(345) 678-9013',
                image: 'https://cdnassets.hw.net/ae/80/9d95561f47e6bac2127ee0f5e281/mercedesbenzstadium-hok-exterior1.jpg'
            },
            {
                name: 'Mercedes Benz Center',
                location: 'Seattle, WA',
                contact: '(345) 678-9013',
                image: 'https://cdnassets.hw.net/ae/80/9d95561f47e6bac2127ee0f5e281/mercedesbenzstadium-hok-exterior1.jpg'
            },
            {
                name: 'Mercedes Benz Center',
                location: 'Seattle, WA',
                contact: '(345) 678-9013',
                image: 'https://cdnassets.hw.net/ae/80/9d95561f47e6bac2127ee0f5e281/mercedesbenzstadium-hok-exterior1.jpg'
            }
        ]
    };

        
    

    // Handle form submission
    dealerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedBrand = dealerForm.brand.value;

        // Clear previous results
        dealerList.innerHTML = '';

        // Get the dealers for the selected brand
        const selectedDealers = dealers[selectedBrand];

        if (selectedDealers && selectedDealers.length > 0) {
            selectedDealers.forEach(dealer => {
                // Create dealer card
                const dealerCard = document.createElement('div');
                dealerCard.classList.add('dealer-card');
                dealerCard.innerHTML = `
                    <img src="${dealer.image}" alt="${dealer.name}">
                    <h3>${dealer.name}</h3>
                    <p>Location: ${dealer.location}</p>
                    <p>Contact: ${dealer.contact}</p>
                `;
                dealerList.appendChild(dealerCard);
            });
        } else {
            dealerList.innerHTML = '<p>No dealers found for this brand.</p>';
        }
    });
});
//catalogue
document.addEventListener('DOMContentLoaded', () => {
    const priceRange = document.getElementById('priceRange');
    const carItems = document.querySelectorAll('.car-item');

    priceRange.addEventListener('change', () => {
        const selectedPrice = priceRange.value;

        carItems.forEach(item => {
            const priceText = item.querySelector('p').textContent;
            const price = parseInt(priceText.replace(/\D/g, ''));
            
            if (selectedPrice === 'all' || price <= parseInt(selectedPrice)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
//compare.html
