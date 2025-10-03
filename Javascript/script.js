 colorPicker= document.getElementById("colorPicker");
    
colorPicker.addEventListener("change",function(){
    display=document.getElementById("display");
    display.style.backgroundColor=colorPicker.value;
});
    