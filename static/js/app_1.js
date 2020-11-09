// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 library for dashboards, visualizatons
var tbody = d3.select("tbody");

// Build table function
function buildTable(data){
    // setting an empty string to clear data
    tbody.html("");
    // loops through the array
    data.forEach((dataRow)=>{
        // appends new row to tbody
        let row = tbody.append("tr");
        //loops through each field in dataRow
        Object.values(dataRow).forEach((val) => {
            // appends each field to a cell
            let cell = row.append("td");
            // gets the value of the field
            cell.text(val);
        });
    });
}

// Filter function
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // if date was entered filter the table
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //build new table, if no date table will remain unchaged
    buildTable(filteredData);  
}

// listen to click od a button
d3.selectAll("#filter-btn").on("click", handleClick);

// build final table
buildTable(tableData)

