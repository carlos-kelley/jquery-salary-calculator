$( document ).ready( onReady );

let employees = [];

function onReady(){
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
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#IDNumberIn' ).val( '' );
    $( '#jobTitleIn' ).val( '' );
    $( '#annualSalaryIn' ).val( '' );
} 

function displayEmployees( arrayToDisplay ){
    console.log( 'in displayEmployees' );
    let el = $( '#employeesOut' );
    el.empty();
    let employeeSalary = 0;
    for( let i=0; i<arrayToDisplay.length; i++){
        el.append( `<li>${ arrayToDisplay[i].firstName } ${ arrayToDisplay[i].lastName }: ID #${ arrayToDisplay[i].IDNumber }, Annual Salary $${ arrayToDisplay[i].annualSalary }, ${ arrayToDisplay[i].jobTitle }  
        <button class="removeEmployeeButton" data-index="${i}">Remove Employee</button></li>` );
        employeeSalary += Number( arrayToDisplay[i].annualSalary );
    }
    el = $( '#totalMonthlyCostOut' );
    el.empty();
    let totalMonthlyCost = (employeeSalary / 12);
    el.append( totalMonthlyCost.toFixed ( 2 ) );
    console.log(totalMonthlyCost);
    let clasChanger = document.getElementById('totalMonthlyCostOut');
    if(totalMonthlyCost > 20000){
        $('#totalMonthlyCostOut').addClass('redClass');
    }
}

function removeEmployee(){
    console.log( 'in removeEmployee' );
    console.log( $( this ).data( 'index' ) );
    employees.splice( $( this ).data( 'index' ), 1 );
    displayEmployees( employees ); 
}           