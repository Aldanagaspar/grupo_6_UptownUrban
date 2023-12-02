window.addEventListener("load", function(){
    let formulario = document.querySelector("form.createProduct");
    let nombreProd = document.querySelector("#nombreProd");
    let password = document.querySelector("#password");
    let email = document.querySelector("#email");

    formulario.addEventListener("submit", function(e){
        if (fullname.value == "" || fullname.value.length < 5 || password.value == "" || password.value.length < 5 || email.value == "" || !emailRegex.test(email.value)){
            e.preventDefault();
            alert("Complete el formulario")
            
        }else{
            alert("El perfil se registro perfectamente") 
        }
    });
    nombreProd.addEventListener("blur", function(e){
        document.querySelector("#error_nombreProd").style.display ="none";
        document.querySelector("#error_nombreProd_length").style.display ="none";
        if (nombreProd.value == ""){
            document.querySelector("#error_nombreProd").style.display ="block";
            return
        }else{
            document.querySelector("#error_nombreProd").style.display ="none";
        }
        if (nombreProd.value.length < 5){
            document.querySelector("#error_nombreProd_length").style.display ="block";
            return
        }else{
            document.querySelector("#error_nombreProd_length").style.display ="none";
        }
    })
})