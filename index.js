const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
  ];




function displayFreelancers(){
const freelancersList = document.getElementById("freelancersList")
freelancersList.innerHTML ="";

freelancers.forEach((freelancer) =>{
    const freelancerDiv = document.createElement("div")
      freelancerDiv.innerHTML = `<p>Name: ${freelancer.name}</p>
                                 <p>Occupation: ${freelancer.occupation}</p>
                                 <p>Starting Price: $${freelancer.startingPrice}</p>`;
    freelancersList.appendChild(freelancerDiv)
})
};
// function that calculates average starting price
function calculateAverageStartingPrice() {
const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalPrices / freelancers.length;
    const averagePriceSpan = document.getElementById("averagePrice");
    averagePriceSpan.textContent = `$${averagePrice.toFixed(2)}`;
}
// add a freelancer to the existing array
function addnewFreelancer() {
    const newFreelancer = { name: "Carol", occupation: "Programmer", startingPrice: 70};
freelancers.push(newFreelancer);
displayFreelancers();
calculateAverageStartingPrice();
    //  add a bunch of carols
}
// iterate through freelancers to create an element for each one, add info to the element
function renderFreelancers (freelancers) {
// iterates through array ....

}

// function that renders items onto the DOM
function render() {

}


setInterval(addnewFreelancer, 3000);

displayFreelancers();
calculateAverageStartingPrice();
