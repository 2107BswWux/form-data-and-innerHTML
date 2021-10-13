console.log("script is linked");

const submit = document.querySelector("#submit");
const test = document.querySelector("#registerForm");

function refreshForm(){
    test.reset();
};

function profile(a,b,c){
    const name = document.querySelector("#name");
    const discription = document.querySelector("#discription");
    name.innerHTML = `${a} ${b}`;
    discription.innerHTML = `${c}`;
}

function register(event){
    event.preventDefault();

    // getting the id from the html element so that we are able to target it through the use of javascript
    let firstName = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let bio = document.querySelector('#bio');
    // conole.log the value to make sure that we are targeting the right thing
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(bio.value);
    profile(firstName.value,lastName.value,bio.value);


    // passing values through variables from this function to the profile function
    profile(firstName.value,lastName.value);
    refreshForm();
 
};


submit.addEventListener("click",register);
