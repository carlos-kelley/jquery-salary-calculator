$( document ).ready( onReady );

let employees = [];

function onReady(){
    // click handler
    $( '#submitButton' ).on( 'click', addEmployee );
    $( '#employeesOut' ).on( 'click', '.removeEmployeeButton', removeEmployee );
}

function addEmployee(){
    console.log( 'in addEmployee' );
    let employee = {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $( '#lastNameIn' ).val(),
        IDNumber: $( '#IDNumberIn' ).val(),
        jobTitle: $( '#jobTitleIn' ).val(),
        annualSalary: $( '#annualSalaryIn' ).val(),
    }
    console.log( employee );
    employees.push( employee );
    console.log( employees );
    displayEmployees( employees );
    // empty input fields
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#IDNumberIn' ).val( '' );
    $( '#jobTitleIn' ).val( '' );
    $( '#annualSalaryIn' ).val( '' );
} // end addItem

function displayEmployees( arrayToDisplay ){
    console.log( 'in displayEmployees' );
    let el = $( '#employeesOut' );
    el.empty();
    let employeeSalary = 0;
    for( let i=0; i<arrayToDisplay.length; i++){
        el.append( `<li>${ arrayToDisplay[i].firstName } ${ arrayToDisplay[i].lastName }: ${ arrayToDisplay[i].IDNumber }, ${ arrayToDisplay[i].annualSalary }, ${ arrayToDisplay[i].jobTitle }  
        <button class="removeEmployeeButton" data-index="${i}">Remove Employee</button></li>` );
        employeeSalary += Number( arrayToDisplay[i].annualSalary );
    }
    el = $( '#totalMonthlyCostOut' );
    el.empty();
    el.append( (employeeSalary / 12).toFixed( 2 ) );
}

function removeEmployee(){
    console.log( 'in removeEmployee' );
    $( this ).parent().remove();   
}           