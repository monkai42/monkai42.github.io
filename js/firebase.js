'use strict';

//grab a form
const form = document.querySelector('#signupForm');

//grab an input
const inputEmail = form.querySelector('#inputEmail');

//config your firebase push
const config = {
    apiKey: "AIzaSyA_c9JMsDWlyCTxYg055OX2cavZsjvpgNA",
    authDomain: "monkai-42.firebaseapp.com",
    databaseURL: "https://monkai-42.firebaseio.com",
    projectId: "monkai-42",
    storageBucket: "monkai-42.appspot.com",
    messagingSenderId: "1008642570062"
};


//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            if (inputEmail.value == "") {
                return alert("Please enter your email address!")
            };
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Thank you. We will reach out to you shortly!');
        })
    }