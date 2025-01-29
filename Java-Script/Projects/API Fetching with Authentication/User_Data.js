// Login API
const Data_API = "https://api.escuelajs.co/api/v1/auth/profile";

// Select input fields and button
const Avatar = document.querySelector("#avatar");
const Name = document.querySelector("#name");
const Email = document.querySelector("#email");
const Role = document.querySelector("#role");
const Creation_At = document.querySelector("#creationAt");
const Updated_At = document.querySelector("#updatedAt");

// Function to fetch data and display user profile -- This is IIFE -- Immediately invoked function expression

(async function name(params) {
  // Function to fetch data and display user profile
  const token = localStorage.getItem("token");
  // console.log(token);

  // If token is present, proceed with API request
  if (token) {
    // Get the API Response
    const response = await fetch(Data_API, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        "Content-Type": "application/json",
      },
    });

    //  Check if the response is successful
    if (response.ok) {
      const data = await response.json(); // Get the Response Data

      // Extract data
      const avatar = data.avatar;
      const name = data.name;
      const email = data.email;
      const role = data.role;
      const create_time = data.creationAt;
      const update_time = data.updatedAt;

      // Update the HTML with the fetched data
      Avatar.src = avatar;
      Name.textContent = name;
      Email.textContent = email;
      Role.textContent = role;
      Creation_At.textContent = create_time;
      Updated_At.textContent = update_time;

    } else {
        console.error("Error: Unable to fetch data", response.status);
    }
  } else {
    console.log('Token not found in localStorage');
  }
})();
