// Animación del NAV
var changeNav = document.getElementsByClassName("divNav");
Object.keys(changeNav).forEach((item)=>{
    changeNav[item].addEventListener("mouseover",()=>{changeNav[item].style.color="#54ffc0ff";
    changeNav[item].style.textDecoration="underline"})
});
Object.keys(changeNav).forEach((item)=>{
    changeNav[item].addEventListener("mouseout",()=>{changeNav[item].style.color="white";
    changeNav[item].style.textDecoration="none"})
});
//Animación Botón del form
var changeButton = document.getElementById("sendButton")
changeButton.addEventListener("mouseover",()=>{
    changeButton.style.backgroundColor="#239cff"
})
changeButton.addEventListener("mouseout",()=>{
    changeButton.style.backgroundColor="#008CFF"
})
//Condición en el Select para solicitar llenar el campo "Empresa donde trabaja" 
var select1 = document.getElementById("selectForm1")
select1.addEventListener("change",()=>{
    let myInput = document.getElementById("empresaForm")
    if (select1.value === "empleado" && !myInput.value){
        myInput.setAttribute("required","")
        var myP1 = document.getElementById("innerP1")
        myP1.innerHTML = "Porfavor escribe el nombre de la empresa donde trabajas"
    } else {
        myInput.removeAttribute("required","");
        var myP1 = document.getElementById("innerP1")
        myP1.innerHTML = ""
    }
})
//Almacenamiento Formulario en Local Storage 
    
function sendFunction1(){

    //Almacenar los valores de inputs en un object
    console.log("Almacenando datos en Object...")
    let nombreDeInput = document.getElementById ("nombreForm").value
    let apellidoDeInput = document.getElementById ("apellidoForm").value
    let correoDeInput = document.getElementById ("correoForm").value
    let telefonoDeInput = document.getElementById("telefonoForm").value
    let selectBoxPosicion = document.getElementById("selectForm1")
    let posicionDeInput = selectBoxPosicion.options[selectBoxPosicion.selectedIndex].text
    let empresaDeInput = document.getElementById ("empresaForm").value
    
    var inputValores = {
        nombre:nombreDeInput,
        apellido:apellidoDeInput,
        correoElectronico:correoDeInput,
        telefono:telefonoDeInput,
        posición:posicionDeInput,
        empresa:empresaDeInput,
    }    
    console.log(inputValores)

    // Llevando datos al local Storage
    let saveData = localStorage.getItem("personalInformation");
    console.log("Valores en localstorage =>", saveData);
    if(saveData){
        // Si hay datos en el localStorage...
        let dataEncode = JSON.parse(saveData)
        let newData =[...dataEncode,inputValores]
        console.log(newData)
        localStorage.setItem("personalInformation", JSON.stringify(newData))
    }else{
        // No hay datos aún en el LocalStorage...
        let dataForLocal = []  //Array vacio para almacenar los datos
        dataForLocal.push(inputValores)
        console.log(dataForLocal)
        localStorage.setItem("personalInformation",JSON.stringify(dataForLocal))
}}

//Listener para el Botón Enviar 
let sendFormButton = document.getElementById("sendButton")
sendFormButton.addEventListener("click",sendFunction1)