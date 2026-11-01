document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! Message sent successfully.");
    e.target.reset();
}