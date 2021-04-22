// CREATE AN ARRAY OF EMPLOYEES

var empList = [];
var list = "";

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
var displayEmpList = function () {
if (empList.length === 0) {
    let storage = localStorage.getItem("empList") || "";
    if (storage.length > 0) {
        empList = storage.split("|");
    }
}
 if (empList.length > 0) {
     list = empList.join("\n");
 }
 $("employees").value = list;
}
// GET DOM ELEMENTS
let form = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let empExt = document.querySelector('#extension').value;
    let empEmail = document.querySelector('#email').value;
    let empDept = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    empList.push(empId.value);
    empList.push(empName.value);
    empList.push(empExt.value);
    empList.push(empEmail.value);
    empList.push(empDept.value);
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY


    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
        empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
    }
}
        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID           
        buildGrid();

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    var tbBody = document.getElementsByTagName("tbody");
    tdBody.deleteRow(tdBody.target.parentElement.parentElement.rowIndex);
    

    // REBUILD THE TBODY FROM SCRATCH
    var tblBody = document.getElementsByTagName("body");
    var tbod = document.createElement("tbody");
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (var i = 0; i < 5; i++) {
        // REBUILDING THE ROW STRUCTURE
        var row = document.createElement("tr");
        var cellID = document.createElement("td");
        cellID.appendChild(document.createTextNode(empId));
        row.appendChild(cellID);
        tblBody.appendChild(row);
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tblBody);

    

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE
    window.localStorage.setItem('Employee ID', JSON.stringify(empId));
    window.localStorage.setItem('Employee Name', JSON.stringify(empName));
    window.localStorage.setItem('Employee Extension', JSON.stringify(empExt));
    window.localStorage.setItem('Employee Email', JSON.stringify(empEmail));
    window.localStorage.setItem('Employee Department', JSON.stringify(empDept));


};