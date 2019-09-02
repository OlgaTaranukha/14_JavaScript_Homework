// from data.js
var tableData = data;

// Select the input elements
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

// Select the button
var FilterBtn = d3.select("#filter-btn");

// Select table body
var tbody = d3.select("tbody");

// To display for the first time
var filteredData = tableData;

// function to render filetered data to the tbody
function renderTable(dataSet) {
    // Remove any data from the table
    tbody.html("");
    // Build Sightings Table
    dataSet.forEach((Sighting) => {
        var row = tbody.append("tr");
        Object.entries(Sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });       
    });
}

// add an event listener function to filter-btn
FilterBtn.on("click", function() {
    // Get the value of the input elements   
    var filterDate = $dateInput.value.trim();
    var filterCity = $cityInput.value.trim();
    var filterState = $stateInput.value.trim();
    var filterCountry = $countryInput.value.trim();
    var filterShape = $shapeInput.value.trim();

    // Filter the data
    filteredData = tableData;
    if(filterDate != ""){ 
        filteredData = filteredData.filter(data => data.datetime === filterDate);
    };
    if(filterCity != ""){ 
        filteredData = filteredData.filter(data => data.city === filterCity);
    };
    if(filterState != ""){ 
        filteredData = filteredData.filter(data => data.state === filterState);
    };
    if(filterCountry != ""){ 
        filteredData = filteredData.filter(data => data.country === filterCountry);
    };
    if(filterShape != ""){ 
        filteredData = filteredData.filter(data => data.shape === filterShape);
    };
    
    // Render the table 
    renderTable(filteredData);

});

// Render the table to display for the first time
renderTable(tableData);