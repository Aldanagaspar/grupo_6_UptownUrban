window.addEventListener("load", function(){
    let formulario = document.querySelector("form.edit");
    let fullname = document.querySelector("#fullname");
    let password = document.querySelector("#password");

    formulario.addEventListener("submit", function(e){
        if (fullname.value == "" || fullname.value.length < 5 || password.value == "" || password.value.length < 5){
            e.preventDefault();
            alert("Complete el formulario")
            
        }else{
            alert("El perfil se edito perfectamente")  
        }
    });
    fullname.addEventListener("blur", function(e){
        document.querySelector("#error_fullname").style.display ="none";
        document.querySelector("#error_fullname_length").style.display ="none";
        if (fullname.value == ""){
            document.querySelector("#error_fullname").style.display ="block";
            return
        }else{
            document.querySelector("#error_fullname").style.display ="none";
        }
        if (fullname.value.length < 5){
            document.querySelector("#error_fullname_length").style.display ="block";
            return
        }else{
            document.querySelector("#error_fullname_length").style.display ="none";
        } 
    })
    password.addEventListener("blur", function(e){
        document.querySelector("#error_password").style.display ="none";
        document.querySelector("#error_password_length").style.display ="none";
        if (password.value == ""){
            document.querySelector("#error_password").style.display ="block";
            return
        }else{
            document.querySelector("#error_password").style.display ="none";
        }
        if (password.value.length < 5){
            document.querySelector("#error_password_length").style.display ="block";
            return
        }else{
            document.querySelector("#error_password_length").style.display ="none";
        } 
    })
});