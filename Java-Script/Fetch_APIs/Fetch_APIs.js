const URL = "https://cat-fact.herokuapp.com/facts"; //Assign the Api to the Const Data type

const getFacts = async () => {
  //Async Arrow Function stores in getFacts
  console.log("Getting Data......");
  let response = await fetch(URL); //await function for fetch API stores in promise let data type
  let data = await response.json(); //.json humara async function esliya hum usko await krenge aur uska response data mein store kra lenge -- response JSON formate mein hai

  // Assuming there are elements in the HTML with unique IDs or classes for each fact
  const container = document.querySelector("#facts-container"); // Select the container where you want to display facts

  data.forEach((fact, index) => {
    //Create a new element for each fact
    let factElement = document.createElement("p");
    factElement.textContent = `${index + 1}. ${fact.text}`; //add the fact Text
    container.appendChild(factElement); //append it to the child 
    console.log(fact.text); //Log the text in the console
  });
};
