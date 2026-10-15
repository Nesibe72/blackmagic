// This file contains the JavaScript code that handles the frontend logic for the application.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const data = {
            username: formData.get('username'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                alert(`Message saved: ${result.message}`);
                form.reset(); // Reset the form after successful submission
            } else {
                alert('Error saving message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});