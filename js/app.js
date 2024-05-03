let forms = document.getElementById('form');
forms.addEventListener('submit', submitInput);

let input_one = document.getElementById('input_1');
let input_two = document.getElementById('input_2');
let submit = document.getElementById('submit');

function submitInput(event){
    console.log(forms);
    event.preventDefault();
    let email = input_1.value
    let password = input_2.value
    let submit_1 = submit.value
    submitaxios()  
}


function successfunction(response){
    console.log(response);
    if(response.status === 200){
        const token = response.data.token
        localStorage.setItem('token', token);
        window.location.href = 'http://127.0.0.1:5500/homepage.html'
    }
}


function failurefunction(error){
    console.log(error);
}




function  submitaxios(){
axios.request({

    method: "POST",
    url: "https://reqres.in/api/login",
    data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }
    
}).then(successfunction).catch(failurefunction)
   
}