window.addEventListener("load", function(){
    let formulario = document.querySelector("form.createProduct");
    let nombreProd = document.querySelector("#nombreProd");
    let precio = document.querySelector("#precio");
    let email = document.querySelector("#email");

    formulario.addEventListener("submit", function(e){
        if (nombreProd.value == "" || nombreProd.value.length < 5 || precio.value == "" || precio.value < 0){
            e.preventDefault();            
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
    precio.addEventListener("blur", function(e){
        document.querySelector("#error_precio").style.display ="none";
        if (precio.value == "" || precio.value < 0){
            document.querySelector("#error_precio").style.display ="block";
            return
        }else{
            document.querySelector("#error_precio").style.display ="none";
        }
    })
})