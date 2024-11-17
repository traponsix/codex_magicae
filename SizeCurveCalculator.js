const button = document.getElementById('addGadgetUrl');
//start when button isPressed
button.addEventListener('click', function() {
    //get value inserted in socket
    var a = document.getElementById("height").value;
    if(a == null) {
        a = 1.8;
    }  
    
    //convert unity measurement
    var unit = document.getElementById('unit').value;
    if(unit=='meters'){

    }
    else if(unit=='centimeters'){
        a = a / 100;
    }
    else if(unit=='feets'){
        a = a / 3.28084;
    }
    else if(unit==='inches'){
        a = a / 39.37008;
    }

    //find x
    var t = Math.exp(0.385)
    var b = (Math.log2(a / 1.5) / Math.log2(t))

    //round the function to the lowest int
    var c = Math.floor(b);

    //List of standard size's names
    var standard = "";
    if(c===0){
        standard = " (Medium)"
    }
    else if(c===1){
        standard = " (Big)"
    }
    else if(c===2){
        standard = " (Huge)"
    }
    else if(c===3){
        standard = " (Enormous)"
    }
    else if(c===-1){
        standard = " (Small)"
    }
    else if(c===-2){
        standard = " (Tiny)"
    }
    else{standard=""}

    //print on screen size value
    document.getElementById("curve").innerHTML =" SIZE--> " + c + standard;
});