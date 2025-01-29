// Login API
const Login_API = "https://api.escuelajs.co/api/v1/auth/login";

// Select input fields and button
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const submit_button = document.querySelector("#submit-btn");

//API Fetching Function
async function Login_User(Email, Password) {
  // POST request using fetch()
  // console.log(Email);
  // console.log(Password);
  const response = await fetch(Login_API, {
    // Adding method type
    method: "POST",

    headers: {
      // "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: Email,
      password: Password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("token", data.access_token); // Save token in localStorage
    // console.log(localStorage);

    // Optionally, redirect to a secure page
    window.location.href = "/Projects/API%20Fetching%20with%20Authentication/index.html";  // Replace with your dashboard URL
  } else {
    // Handle errors, for example: invalid credentials
    alert("Invalid login credentials. Please try again.");
  }
}

//Submit Button Event Listener
submit_button.addEventListener("click", () => {
  const Email = email_input.value;
  const Password = password_input.value;

  //Check if Email and Password Field is not empty
  if (isNaN(Email) && isNaN(Password)) {
    Login_User(Email, Password);
  } else {
    alert("Please enter valid Email & Password!");
  }
});
