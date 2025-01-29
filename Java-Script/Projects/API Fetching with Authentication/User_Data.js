// Login API
const Data_API = "https://api.escuelajs.co/api/v1/auth/profile";

// Select input fields and button
const Name = document.querySelector("#name");
const Email = document.querySelector("#email");
const Role = document.querySelector("#role");
const Creation_At = document.querySelector("#creationAt");
const Updated_At = document.querySelector("#updatedAt");

// Function to fetch data and display user profile -- This is IIFE -- Immediately invoked function expression

(async function name(params) {
    // Show skeleton loader initially
    document.querySelector('.skeleton').style.display = 'flex';
    document.querySelector('.container').style.display = 'none';

    const token = localStorage.getItem("token");

    if (token) {
        try {
            // Fetch user profile data from the API
            const response = await fetch(Data_API, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                
                // Extract data
                const name = data.name;
                const email = data.email;
                const role = data.role;
                const create_time = data.creationAt;
                const update_time = data.updatedAt;

                // Update the HTML with the fetched data
                document.getElementById("name").textContent = name;
                document.getElementById("email").textContent = email;
                document.getElementById("role").textContent = role;
                document.getElementById("creationAt").textContent = create_time;
                document.getElementById("updatedAt").textContent = update_time;

                // Hide skeleton loader and show user details
                document.querySelector('.skeleton').style.display = 'none';
                document.querySelector('.container').style.display = 'block';
            } else {
                console.error("Error fetching user data.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            // Handle the error gracefully (maybe show an error message)
        }
    } else {
        console.log('Token not found in localStorage');
    }
})();
