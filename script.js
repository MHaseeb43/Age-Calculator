//variable for datepicker

let dataPicker = document.getElementById('datePicker')
let choseDate = document.getElementById('choseDate')

//variable for printing values

let ageYear = document.getElementById('ageYear');
let ageMonth = document.getElementById('ageMonth');
let ageDays = document.getElementById('ageDays');
let ageHours = document.getElementById('ageHours');
let ageSeconds = document.getElementById('ageSeconds');
let getMilliSeconds = document.getElementById('ageMilliSeconds');

dataPicker.addEventListener('change', function(){
    let options = {year: 'numeric', month:'long', day :'numeric'};
    let getvalue = new Date(this.value);
    let DOB = getvalue.toLocaleDateString('en-US', options)
    choseDate.innerHTML =  DOB;

let Milliseconds_btw_DOB = Date.parse(DOB); 
let MilliSeconds_Btw_Now = Date.now();



let age_in_MilliSeconds = MilliSeconds_Btw_Now - Milliseconds_btw_DOB;


// console.log(age_in_Year)

let miliSeconds = age_in_MilliSeconds;
var second = 1000;
let minute = second * 60;
let hour = minute * 60 ;
let day = hour *  24;
let month = day * 30 ;
let year = day * 365 ;

var years = Math.round(miliSeconds/year)
var months = years * 12;
var days = years * 365
var hours = Math.round(miliSeconds/hour)
var seconds = Math.round(miliSeconds/second)



//Now Print the Complete Logic

ageYear.innerHTML = years
ageMonth.innerHTML = months
ageDays.innerHTML = days
ageHours.innerHTML = hours
ageSeconds.innerHTML = seconds
ageMilliSeconds.innerHTML = miliSeconds;


document.querySelector('.age-calc').classList.add('expand');

})