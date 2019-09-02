// from data.js
var tableData = data;

// variables initialization
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInputer = document.querySelector("#shape");
var $searchButton = document.querySelector("#filter-btn");

// add an event listener to searchbutton and add a function
$searchButton.addEventListener("click", searchData);

// function to render filetered data to the tbody
function renderTable() {

    // Clear table
    $tbody.innerHTML = "";

    // Looping through data set
    for (var i = 0; i < tableData.length; i++) {
    
        // Insert a row
        var $row = $tbody.insertRow(i);

        // Get current object & keys
        var currentSighting = tableData[i];
        var fields = Object.keys(currentSighting);

        // Insert filteredSightings
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentSighting[field];
        }
    }
}

function searchData(event){
    //to prevent the page from refreshing
    event.preventDefault();

    var filterDate = $dateInput.value.trim();
    //if(filterDate != ""){
        tableData = data.filter(function (data){
            var dataDate = data.datetime;
            return (dataDate === filterDate);
        });
    //};

    // Render the table 
    renderTable();

}

// Render the table 
renderTable();