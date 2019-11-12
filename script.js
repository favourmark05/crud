var selectedRow = null;

function onFormSubmit(){
    formData = readFormData();
    if (selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData);
    resetForm();
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
    cell1.innerHTML = data.fullName;

    // this is for the empCode
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;

    // this is for the salary
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    // this is for the city
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    // this is for the edit and delete buttons
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    var selectedRow = null;
}


// this is the edit functionality

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML
    document.getElementById("city").value = selectedRow.cells[3].innerHTML

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName
    selectedRow.cells[1].innerHTML = formData.empCode
    selectedRow.cells[2].innerHTML = formData.salary
    selectedRow.cells[3].innerHTML = formData.city

};

function onDelete(td){
    if(confirm("ARE YOU SURE YOU WANT TO DELETE THIS?")){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
    alert("content deleted successfully");
}
else (alert("content not deleted"));
}
