const nameLogin = document.querySelector('.nameLogin');
const passwordLogin = document.querySelector('.passwordLogin');
const btnSubmit = document.querySelector('.btnSubmit');
const alertModal = document.querySelector('.alertModal p');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    verifyAuthentication(nameLogin.value, passwordLogin.value);
});

function verifyAuthentication(login, passwork){

    login = nameLogin.value;
    passwork = passwordLogin.value;

    const defaultLogin = "nats@s";
    const defaultPasswork = "123456";

    if(login != defaultLogin || passwork != defaultPasswork){
        alertModal.innerHTML = "Falha ao efetua login!";
        alertModal.style.backgroundColor = "rgb(243, 159, 159)";
        alertModal.style.visibility = "visible";
        alertModal.style.animation = "verified 1s ease forwards";
        setInterval( () => {
            alertModal.style.visibility = "hidden";    
         },2000);
    }else{
        alertModal.innerHTML = "Login efetuado com sucesso!";
        alertModal.style.backgroundColor = "rgb(159, 243, 159)";
        alertModal.style.visibility = "visible";
        alertModal.style.animation = "verified 1s ease forwards";
        setInterval( () => {
            alertModal.style.visibility = "hidden";    
         },2000);
    }

}


