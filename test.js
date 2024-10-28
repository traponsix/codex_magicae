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

    //find x
    var t = Math.exp(0.77)
    var b = (Math.log2(a / 1.5) / Math.log2(t)) *2

    //round the function to the lowest int
    var c = Math.floor(b);
    document.getElementById("curve").innerHTML = b + " --> " + c;
});