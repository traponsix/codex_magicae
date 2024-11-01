let d = new Date();

const button = document.getElementById('addGadgetUrl');
button.addEventListener('click', function() {
    var a = document.getElementById("height").value;
    if(a == null) {
        a = 1.8;
    }

    var unit = document.getElementById('unit').value;
    
    if(unit=='meters'){

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
    document.getElementById("curve").innerHTML = b + " --> " + c;
});