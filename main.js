// let imageNeeded;
let button = document.getElementById('dog-button');
let divForImage = document.getElementById('image-container');

function dataThing(data) {
    return data.message; // Return the image URL directly
}

button.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resolve => resolve.json())
        .then(data => {
            const imageNeeded = dataThing(data); // Get the image URL
            console.log(imageNeeded); // Log the image URL after it's assigned
            
            // Set the body's background image
            document.body.style.backgroundImage = `url(${imageNeeded})`;
            document.body.style.backgroundSize = 'cover'; // Ensure the image covers the entire background
            document.body.style.backgroundPosition = 'center'; // Center the image
            document.body.style.backgroundRepeat = 'no-repeat'; // Prevent the image from repeating
        })
        .catch(error => console.error('Error fetching the dog image:', error)); // Handle any errors
});