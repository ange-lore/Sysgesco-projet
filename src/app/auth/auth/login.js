function myEye(event){
    console.log(event);
    var x = document.getElementById("myInput").addEventListener;
    var y = document.getElementById("hide1").addEventListener;
    var z = document.getElementById("hide2").addEventListener;

    if(x.type === 'password'){
        x.type = 'text';
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = 'password';
        y.style.display = "none";
        z.style.display = "block";
    }
    testing the app
}
window.funtionName= myEye();
