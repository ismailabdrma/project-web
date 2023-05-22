// Sample car data
let cars = [
  { brand: 'Toyota', price: 10000, km: 50000, year: 2018, photo: 'car1.jpg' },
  { brand: 'Honda', price: 8000, km: 60000, year: 2017, photo: 'car2.jpg' },
  { brand: 'Ford', price: 12000, km: 70000, year: 2019, photo: 'car3.jpg' },
  { brand: 'Chevrolet', price: 15000, km: 80000, year: 2016, photo: 'car4.jpg' }
];

// Display cars
function displayCars(cars) {
  const carList = document.getElementById('car-list');
  carList.innerHTML = '';
  cars.forEach(car => {
    const carDiv = document.createElement('div');
    carDiv.classList.add('car-item');

    const carImage = document.createElement('img');
    carImage.src = car.photo;
    carImage.alt = car.brand;
    carImage.classList.add('car-image');
    carDiv.appendChild(carImage);

    const brandParagraph = document.createElement('p');
    brandParagraph.innerHTML = `<strong>Brand:</strong> ${car.brand}`;
    carDiv.appendChild(brandParagraph);

    const priceParagraph = document.createElement('p');
    priceParagraph.innerHTML = `<strong>Price:</strong> $${car.price}`;
    carDiv.appendChild(priceParagraph);

    const kmParagraph = document.createElement('p');
    kmParagraph.innerHTML = `<strong>KM:</strong> ${car.km}`;
    carDiv.appendChild(kmParagraph);

    const yearParagraph = document.createElement('p');
    yearParagraph.innerHTML = `<strong>Year:</strong> ${car.year}`;
    carDiv.appendChild(yearParagraph);

    carList.appendChild(carDiv);
  });
}

// Filter cars based on search criteria
function filterCars() {
  const brandSearch = document.getElementById('brand-search').value.toLowerCase();
  const priceSearch = Number(document.getElementById('price-search').value);

  let filteredCars = cars.filter(car => {
    return car.brand.toLowerCase().includes(brandSearch) &&
      car.price <= priceSearch;
  });

  displayCars(filteredCars);
}

// Add event listener to search form
document.getElementById('search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  filterCars();
});

// Display all cars initially
displayCars(cars);
