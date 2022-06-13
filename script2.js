class regLogin{
    constructor(username,password,email,passwrd2){
        this.username = username;
        this.password = password;
        this.mail = email;
        this.passwrd2 = passwrd2;
    }
}


let arrValues = [];

function registration(){
    let theUserName = document.getElementById('#regUserName').value;
    let thePassWrd = document.querySelector('#regPassWrd').value;
    let validatePass = document.querySelector('#regPassWrd2').value;
    let theEmail = document.querySelector('#regMail').value;

   

    for(let i = 0; i < arrValues.length();i++){
        if(theUserName === "" || thePassWrd === "" || validatePass === "" || theEmail === ""){
            alert('Field cannot be empty, re-check and re-enter');
        }
        else{
            arrValues.push(username);
            arrValues.push(password);
            alert('Successfully registered');
        }

    }

    
}