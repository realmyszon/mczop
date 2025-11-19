const form = document.getElementById('rzepak-form');
const formContainer = document.getElementById('form-container');
const idCardContainer = document.getElementById('id-card-container');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('id-firstName').textContent = document.getElementById('firstName').value;
    document.getElementById('id-lastName').textContent = document.getElementById('lastName').value;
    document.getElementById('id-birthDate').textContent = document.getElementById('birthDate').value;
    document.getElementById('id-rzepakNumber').textContent = document.getElementById('rzepakNumber').value;

    const photoInput = document.getElementById('photo');
    const idPhoto = document.getElementById('id-photo');

    if(photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            idPhoto.src = e.target.result;
        }
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        idPhoto.src = "default-photo.png"; // opcjonalnie domyślne zdjęcie
    }

    formContainer.style.display = 'none';
    idCardContainer.style.display = 'block';
});
