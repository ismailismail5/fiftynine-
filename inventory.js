// Inventory data
const carsData = [
    {
        id: 1,
        name: 'Mercedes-Benz S-Class 2024',
        price: 95000,
        year: 2024,
        km: 45000,
        brand: 'mercedes',
        fuel: 'essence',
        description: 'Luxe ultime avec technologie de pointe',
        image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        id: 2,
        name: 'BMW M440i 2023',
        price: 72500,
        year: 2023,
        km: 32000,
        brand: 'bmw',
        fuel: 'essence',
        description: 'Performance et confort réunis',
        image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 3,
        name: 'Porsche 911 Turbo 2023',
        price: 120000,
        year: 2023,
        km: 28000,
        brand: 'porsche',
        fuel: 'essence',
        description: 'Performance extrême et sportivité',
        image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        id: 4,
        name: 'Audi A8 2024',
        price: 85000,
        year: 2024,
        km: 52000,
        brand: 'audi',
        fuel: 'diesel',
        description: 'Élégance et technologie allemande',
        image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
        id: 5,
        name: 'Tesla Model S 2024',
        price: 88000,
        year: 2024,
        km: 15000,
        brand: 'tesla',
        fuel: 'electrique',
        description: 'Voiture électrique de nouvelle génération',
        image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        id: 6,
        name: 'BMW X5 2023',
        price: 76500,
        year: 2023,
        km: 38000,
        brand: 'bmw',
        fuel: 'hybrid',
        description: 'SUV premium avec motorisation hybride',
        image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
        id: 7,
        name: 'Mercedes-AMG GT 2023',
        price: 110000,
        year: 2023,
        km: 25000,
        brand: 'mercedes',
        fuel: 'essence',
        description: 'Coupé sport haut de gamme',
        image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
        id: 8,
        name: 'Audi e-tron GT 2024',
        price: 98000,
        year: 2024,
        km: 12000,
        brand: 'audi',
        fuel: 'electrique',
        description: 'Coupé électrique sportif',
        image: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'
    },
    {
        id: 9,
        name: 'Porsche Cayenne 2023',
        price: 92000,
        year: 2023,
        km: 35000,
        brand: 'porsche',
        fuel: 'hybrid',
        description: 'SUV sportif premium',
        image: 'linear-gradient(135deg, #2e2e78 0%, #662d91 100%)'
    },
];

// Display cars
function displayCars(cars) {
    const carsList = document.getElementById('carsList');
    
    if (!carsList) return;
    
    if (cars.length === 0) {
        carsList.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Aucun véhicule ne correspond à vos critères.</p>';
        return;
    }

    carsList.innerHTML = cars.map(car => `
        <div class="car-card">
            <div class="car-image" style="background: ${car.image};"></div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <p class="car-price">${formatPrice(car.price)}</p>
                <p style="color: #666; margin-bottom: 15px; font-size: 0.95rem;">${car.description}</p>
                <div class="car-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${formatKm(car.km)}</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                </div>
                <button onclick="contactAboutCar('${car.name}')" class="btn btn-small" style="width: 100%; margin-top: 15px;">
                    Nous Contacter
                </button>
            </div>
        </div>
    `).join('');
}

// Filter cars
function filterCars() {
    const brandFilter = document.getElementById('brandFilter')?.value || '';
    const priceFilter = document.getElementById('priceFilter')?.value || 200000;
    const yearFilter = document.getElementById('yearFilter')?.value || '';
    const fuelFilter = document.getElementById('fuelFilter')?.value || '';

    const filtered = carsData.filter(car => {
        return (
            (brandFilter === '' || car.brand === brandFilter) &&
            (car.price <= parseInt(priceFilter)) &&
            (yearFilter === '' || car.year == yearFilter) &&
            (fuelFilter === '' || car.fuel === fuelFilter)
        );
    });

    displayCars(filtered);
}

// Update price display
function updatePriceDisplay() {
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    
    if (priceFilter && priceValue) {
        priceValue.textContent = formatPrice(parseInt(priceFilter.value));
    }
}

// Reset filters
function resetFilters() {
    document.getElementById('brandFilter').value = '';
    document.getElementById('priceFilter').value = 200000;
    document.getElementById('yearFilter').value = '';
    document.getElementById('fuelFilter').value = '';
    
    updatePriceDisplay();
    displayCars(carsData);
}

// Contact about car
function contactAboutCar(carName) {
    window.location.href = `contact.html?car=${encodeURIComponent(carName)}`;
}

// Initialize inventory page
document.addEventListener('DOMContentLoaded', function() {
    const carsList = document.getElementById('carsList');
    
    if (carsList) {
        // Display all cars on initial load
        displayCars(carsData);
        
        // Add event listeners to filters
        const brandFilter = document.getElementById('brandFilter');
        const priceFilter = document.getElementById('priceFilter');
        const yearFilter = document.getElementById('yearFilter');
        const fuelFilter = document.getElementById('fuelFilter');
        
        if (brandFilter) {
            brandFilter.addEventListener('change', filterCars);
        }
        if (priceFilter) {
            priceFilter.addEventListener('change', function() {
                updatePriceDisplay();
                filterCars();
            });
        }
        if (yearFilter) {
            yearFilter.addEventListener('change', filterCars);
        }
        if (fuelFilter) {
            fuelFilter.addEventListener('change', filterCars);
        }
        
        // Update price display on page load
        updatePriceDisplay();

        // Check if car name is in URL (from contact page redirect)
        const urlParams = new URLSearchParams(window.location.search);
        const carName = urlParams.get('car');
        if (carName) {
            const carInput = document.querySelector('input[name="subject"]');
            if (carInput) {
                carInput.value = `Informations sur: ${carName}`;
            }
        }
    }
});

// Format currency
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

// Format kilometers
function formatKm(km) {
    return new Intl.NumberFormat('fr-FR').format(km) + ' km';
}
