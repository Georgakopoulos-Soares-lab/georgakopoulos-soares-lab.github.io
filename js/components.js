document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            
        })
        .catch(error => console.error('Error loading header:', error));

        fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
        
        fetch('contact_form.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-form-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});

