// Create a container div and append it to the body
const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

// Create a row div and append it to the container
const row = document.createElement("div");
row.classList.add("row");
container.append(row);

// Fetch data from the REST countries API
fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((ele) => {
    // Loop through the fetched data
    for (let i=0; i<ele.length;i++) {
      // Create a column div for each country and append it to the row
      let col = document.createElement("div");
      col.classList.add("col-lg-4", "col-sm-12");
      row.append(col);

      // Create a card div for each country
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card1");

      // Set the inner HTML of the cardDiv with country information
      cardDiv.innerHTML = `
        <div class="card h-auto w-75 mt-4 mx-2 bg-primary">
          <div class="some-class"></div>
          <div class="bg-secondary-subtle h-75 m-2 rounded-3">
            <h1 id="title" class="text-center fw-bolder fs-4 pt-2">${ele[i].name.common}</h1>
          </div>
          <img src="${ele[i].flags.png}" class="card-img-top h-100 w-75 mt-3 mx-5 rounded-4" alt="country-flag">
          <div class="card-body">
            <div class="card-text text-center m-3"><b>Capital:<i class="text-light"> ${ele[i].capital}</i></b></div>
            <div class="card-text text-center m-3"><b>Region:<i class="text-light"> ${ele[i].region}</i> </b></div>
            <div class="card-text text-center m-3"><b>Country Code:<i class="text-light"> ${ele[i].latlng}</i></b></div>
            <div class="card-text text-center m-3"><b>Country Code:<i class="text-light"> ${ele[i].cca2}</i></b></div>
            <div class="some-class"></div>
          </div>    
        </div>
      `;
      
      // Append the cardDiv to the column
      col.append(cardDiv);
    }
  });