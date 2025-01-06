// Handling the form submission with JavaScript
document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const customerName = document.getElementById("customer-name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const payment = document.getElementById("payment").value;

    // Create a summary message for the user
    const orderSummary = `
        Product: ${product}
        Quantity: ${quantity}
        Name: ${customerName}
        Address: ${address}
        Email: ${email}
        Phone: ${phone}
        Payment Method: ${payment}
    `;

    // Show an alert with the order summary
    alert("Order Details:\n" + orderSummary);

    // Optionally, clear the form after submission
    document.getElementById("order-form").reset();
});