function onFormSubmit(){
    formData = readFormData();
    insertNewRecord(formData);
}
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    // this is for the fullNAme
    cell1 = newRow.insertCell(0);
    cell1.innerHtml = data.fullName;

    // this is for the empCode
    cell2 = newRow.insertCell(1);
    cell2.innerHtml = data.empCode;

    // this is for the salary
    cell3 = newRow.insertCell(2);
    cell3.innerHtml = data.salary;

    // this is for the city
    cell4 = newRow.insertCell(3);
    cell4.innerHtml = data.city;

    // this is for the edit and delete buttons
    cell5 = newRow.insertCell(4);
    cell5.innerHtml = `<a>Edit</a>
                       <a>Delete</a>`;
}