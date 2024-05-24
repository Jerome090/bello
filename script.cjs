document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the form from submitting
    
    // Get form data
    var formData = new FormData(this);
    
    // Send form data to the server
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            document.getElementById('contact-form').reset(); // Reset form after submission
        } else {
            alert('Failed to submit form.');
        }
    })
    .catch(error => {
        alert('An error occurred while submitting the form.');
        console.error('Error:', error);
    });
});