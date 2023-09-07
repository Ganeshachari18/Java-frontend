const customers = {
    customer1: {
        name: "Customer 1",
        email: "customer1@example.com",
        phone: "123-456-7890",
    },
    customer2: {
        name: "Customer 2",
        email: "customer2@example.com",
        phone: "987-654-3210",
    },
    // Add more customer data as needed
};

function showCustomerDetails(customerId) {
    const customer = customers[customerId];
    if (customer) {
        const detailsDiv = document.getElementById("customer-details");
        detailsDiv.innerHTML = `
            <h2>${customer.name}</h2>
            <p>Email: ${customer.email}</p>
            <p>Phone: ${customer.phone}</p>
        `;
        detailsDiv.style.display = "block";
    }
}