function keycode(){
    let key = event.key;
    let key2 = event.code;
    let key3 = event.which;
    document.getElementById("keycode").innerHTML = key;
    document.getElementById("keycode2").innerHTML = key2;
    document.getElementById("keycode3").innerHTML = key3;
} 
