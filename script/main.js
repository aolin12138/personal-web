// script/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Example: handle form submission
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    // Typically you'll send via AJAX or an email API
    fetch('https://example.com/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: data.get('email'),
        message: data.get('message')
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      alert('Thanks for your message!');
      form.reset();
    }).catch(err => {
      alert('Oops, something went wrong.');
      console.error(err);
    });
  });
});