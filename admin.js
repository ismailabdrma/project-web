// Get car data from local storage or initialize an empty array
let cars = JSON.parse(localStorage.getItem('cars')) || [];

// Add car
function addCar(event) {
  event.preventDefault();

  const brandInput = document.getElementById('brand');
  const priceInput = document.getElementById('price');
  const kmInput = document.getElementById('km');
  const yearInput = document.getElementById('year');
  const photoInput = document.getElementById('photo');

  const newCar = {
    brand: brandInput.value,
    price: Number(priceInput.value),
    km: Number(kmInput.value),
    year: Number(yearInput.value),
    photo: photoInput.files[0].name
  };

  cars.push(newCar);

  // Save cars to local storage
  localStorage.setItem('cars', JSON.stringify(cars));

  // Clear form inputs
  brandInput.value = '';
  priceInput.value = '';
  kmInput.value = '';
  yearInput.value = '';
  photoInput.value = '';

  alert('Car added successfully!');
}

// Add event listener to add car form
document.getElementById('add-car-form').addEventListener('submit', addCar);
