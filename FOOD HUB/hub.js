document.getElementById('order-form').addEventListener('submit', function (e) {
    const phone = document.getElementById('phone').value;
    if (!/^\d{10,11}$/.test(phone)) {
        alert('Please enter a valid phone number.');
        e.preventDefault();
    }
});