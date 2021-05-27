var nameString = document.querySelector(".enterName");
var helloPlusName = document.querySelector(".greetingAndName");
var buttonForGreetMe = document.querySelector(".greetMeBtn");
var counterRef = document.querySelector(".counter1")
var emptyStringRef = document.querySelector(".greetingAndName1");
var resetBtnRef = document.querySelector(".resetBtn")


var emptyString = "Please enter name";


var count = 0;
var namesGreeted = {};

var retrievedCount;

var retrievedNames;

emptyStringRef.classList.add('danger');

if (localStorage['spot']) {
    retrievedCount = localStorage.getItem('spot');
}

if (localStorage['s']) {

    retrievedNames = localStorage.getItem('s');

}

counterRef.innerHTML = retrievedCount;


function clearTextArea() {

    nameString.value = null;

}

function clearEmptyStringArea() {
    emptyStringRef.innerHTML = " ";
}

function clearGreetingArea() {
    helloPlusName.innerHTML = " ";
}

function clearCounterArea() {
    counterRef.innerHTML = " ";
}

var myVar;

function myFunction() {
  myVar = setTimeout(function(){
      emptyStringRef.innerHTML = null;}
      ,5000);

      return;
}

function greet() {

    var nam = nameString.value;
    var name = nam.charAt(0).toUpperCase() + nam.slice(1).toLowerCase();


    var radio = document.querySelector("input[name='langRadioBtn']:checked");
    var radioBtn = radio.value;

    radioBtn.checked = false;

    if (localStorage['spot']) {

        count = Number(localStorage['spot']);

    }

    if (localStorage['s']) {

        namesGreeted = JSON.parse(localStorage['s']);

    }

    if (!radioBtn && name == "") {
        emptyStringRef.innerHTML = "Please enter name and choose language";
        emptyStringRef.classList.add('danger');
        clearGreetingArea();

        setTimeout(function(){
            emptyStringRef.innerHTML = null;}
            ,3000);
    
    }

    else if (!radioBtn) {
        emptyStringRef.innerHTML = "Please choose language";
        emptyStringRef.classList.add('danger');
        clearGreetingArea();
        clearTextArea();
    }


 
    else if (radioBtn) {
        radioBtn.checked = false;


        if (name == " ") {

            emptyStringRef.innerHTML = emptyString;

            clearGreetingArea();
            myFunction();
        }

        else if (name == Number(nameString.value)) {
            emptyStringRef.innerHTML = emptyString;
            clearGreetingArea();
            clearTextArea();
            myFunction();

        }

        else if (radioBtn === "English" && namesGreeted[name] === undefined) {
            namesGreeted[name] = 0;
            count++;

            counterRef.innerHTML = count;

            clearEmptyStringArea();
            clearTextArea();

            helloPlusName.innerHTML = 'Hello, ' + name;
            ;
            helloPlusName.classList.remove('danger');


        }

        else if (radioBtn === "English") {
            helloPlusName.innerHTML = 'Hello, ' + name;
            helloPlusName.classList.remove('danger');

            clearEmptyStringArea();
            clearTextArea();
        }



        else if (radioBtn === "isiXhosa" && namesGreeted[name] === undefined) {

            count++;

            namesGreeted[name] = 0;

            counterRef.innerHTML = count;
            helloPlusName.innerHTML = 'Molo, ' + name;
            helloPlusName.classList.remove('danger');


            clearEmptyStringArea();
            clearTextArea();

        }

        else if (radioBtn === "isiXhosa") {

            helloPlusName.innerHTML = 'Molo, ' + name;
            helloPlusName.classList.remove('danger');

            clearEmptyStringArea();
            clearTextArea();
        }



        else if (radioBtn === "Afrikaans" && namesGreeted[name] === undefined) {

            count++;

            namesGreeted[name] = 0;

            counterRef.innerHTML = count;
            helloPlusName.innerHTML = 'Hallo, ' + name;
            helloPlusName.classList.remove('danger');
            clearEmptyStringArea();
            clearTextArea();

        }

        else if (radioBtn === "Afrikaans") {

            helloPlusName.innerHTML = 'Hallo, ' + name;
            helloPlusName.classList.remove('danger');
            clearEmptyStringArea();
            clearTextArea();
        }

    }

    localStorage['spot'] = count;
    localStorage['s'] = JSON.stringify(namesGreeted);
}



function reset() {
    count1 = 0;
    counterRef.innerHTML = 0;
   

    localStorage.clear();
    localStorage['spot'] = 0;
    location.reload();

   

    clearGreetingArea();
    clearEmptyStringArea();
}


buttonForGreetMe.addEventListener('click', greet);
resetBtnRef.addEventListener('click', reset);