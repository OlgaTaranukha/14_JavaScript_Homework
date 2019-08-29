// from data.js
var tableData = data;

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");
var $dataInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInputer = document.querySelector("#shape");
var $searchButton = document.querySelector("#filter-btn");

// add an event listener to searchbutton and add a function

$searchButton.addEventListener("click", searchData);

// Set fileteredData to dataSet 
var filteredData = dataSet;

//Set starting index and results per page
var startingIndex = 0;
var resultsPerPage = 1000;
// function to render filetered data to the tbody

function renderTable() {

    // Set the value of ending index
    var endingIndex = startingIndex + resultsPerPage;

    // Looping through data set
    for (var i = 0; i < filteredData.length; i++) {
    
        // Insert a row
        var $row = $tbody.insertRow(i);

        // Get current object & keys
        var currentSighting = filteredData[i];
        var fields = Object.keys(currentSighting);

        // Insert filteredSightings
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentSighting[field];
        };
    };
};
function searchData(event){
	//to prevent the page from refreshing
	event.preventDefault();

	var filteredDate = $dateInput.value.trim() //trim removes any white spaces in between
	if(filteredDate !=""){
		filteredData = dataSet.filter(function (data){
			var dataDate = data.datetime;
			return dataDate ===filteredDate;
		});

	};
		renderTable();

	}

	function resetForm() {
		document.getElementsByClassName("filters").reset();
	}

	// Render the table 

	renderTable();