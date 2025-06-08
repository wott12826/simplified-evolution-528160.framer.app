document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.framer-141ojcc');
    const formContainer = document.querySelector('.framer-xi8p9d');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('Name');
        const email = formData.get('Email');
        const message = formData.get('Message');
        
        // Create thank you message
        const thankYouMessage = document.createElement('div');
        thankYouMessage.style.cssText = `
            color: white;
            text-align: center;
            padding: 20px;
            font-family: 'Outfit', sans-serif;
            font-size: 18px;
        `;
        thankYouMessage.innerHTML = `
            <h2 style="margin-bottom: 10px;">Thank You!</h2>
            <p>We have received your message and will get back to you soon.</p>
        `;
        
        // Replace form with thank you message
        formContainer.innerHTML = '';
        formContainer.appendChild(thankYouMessage);
        
        // Optional: Send form data to server
        // You can add your server endpoint here
        console.log('Form submitted:', { name, email, message });
    });
}); 