var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["user_name"] = document.getElementById("user_name").value;
    formData["user_age"] = document.getElementById("user_age").value;
    formData["user_gender"] = document.getElementById("user_gender").value;
    formData["user_address"] = document.getElementById("user_address").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.user_name;

    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.user_age;

    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.user_gender;

    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.user_address;

    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("user_name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("user_age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("user_gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("user_address").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.user_name;
    selectedRow.cells[1].innerHTML = formData.user_age;
    selectedRow.cells[2].innerHTML = formData.user_gender;
    selectedRow.cells[3].innerHTML = formData.user_address;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("user_name").value = '';
    document.getElementById("user_age").value = '';
    document.getElementById("user_gender").value = '';
    document.getElementById("user_address").value = '';
    selectedRow = null;
}