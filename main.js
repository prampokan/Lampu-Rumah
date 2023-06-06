function keluarga(){
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggleKeluarga = document.getElementById("default-toggleKeluarga");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if(toggle1.checked){
        lampu1.src = "assets/on.gif";
    }
    else{
        lampu1.src = "assets/off.gif";
    }
    if(toggle2.checked){
        lampu2.src = "assets/on.gif";
    }
    else{
        lampu2.src = "assets/off.gif";
    }
    if(toggle3.checked){
        lampu3.src = "assets/on.gif";
    }
    else{
        lampu3.src = "assets/off.gif";
    }
    if(toggle1.checked && toggle2.checked && toggle3.checked){
        toggleKeluarga.checked = true;
    }
    else if(toggle1.checked || toggle2.checked || toggle3.checked == false){
        toggleKeluarga.checked = false;
    }
}
function keluargaSemua(){
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggleKeluarga = document.getElementById("default-toggleKeluarga");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if(toggleKeluarga.checked){
        toggle1.checked = true;
        lampu1.src = "assets/on.gif";
        toggle2.checked = true;
        lampu2.src = "assets/on.gif";
        toggle3.checked = true;
        lampu3.src = "assets/on.gif";
    }
    else{
        toggle1.checked = false;
        lampu1.src = "assets/off.gif";
        toggle2.checked = false;
        lampu2.src = "assets/off.gif";
        toggle3.checked = false;
        lampu3.src = "assets/off.gif";
    }    
}
function makan(){
    let toggle4 = document.getElementById("default-toggle4");
    let toggleMakan = document.getElementById("default-toggleMakan");
    let lampu4 = document.getElementById("lampu4");

    if(toggle4.checked){
        lampu4.src = "assets/on.gif";
    }
    else{
        lampu4.src = "assets/off.gif";     
    }
    if(toggle4.checked){
        toggleMakan.checked = true;
    }
    else if(toggle4.checked == false){
        toggleMakan.checked = false;
    }
}

function makanSemua(){
    let toggle4 = document.getElementById("default-toggle4");
    let toggleMakan = document.getElementById("default-toggleMakan");
    let lampu4 = document.getElementById("lampu4");

    if(toggleMakan.checked){
        toggle4.checked = true;
        lampu4.src = "assets/on.gif";
    }
    else{
        toggle4.checked = false;
        lampu4.src = "assets/off.gif";
    }
}
function tidur(){
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggleTidur = document.getElementById("default-toggleTidur");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");

    if(toggle5.checked){
        lampu5.src = "assets/on.gif";
    }
    else{
        lampu5.src = "assets/off.gif";
    }
    if(toggle6.checked){
        lampu6.src = "assets/on.gif";
    }
    else{
        lampu6.src = "assets/off.gif";
    }
    if(toggle5.checked && toggle6.checked){
        toggleTidur.checked = true;
    }
    else if(toggle5.checked || toggle6.checked == false){
        toggleTidur.checked = false;
    }
}

function tidurSemua(){
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggleTidur = document.getElementById("default-toggleTidur");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");

    if(toggleTidur.checked){
        toggle5.checked = true;
        lampu5.src = "assets/on.gif";
        toggle6.checked = true;
        lampu6.src = "assets/on.gif";
    }
    else{
        toggle5.checked = false;
        lampu5.src = "assets/off.gif";
        toggle6.checked = false;
        lampu6.src = "assets/off.gif";
    }
}

function tamu(){
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");
    let toggleTamu = document.getElementById("default-toggleTamu");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");

    if(toggle7.checked){
        lampu7.src = "assets/on.gif";
    }
    else{
        lampu7.src = "assets/off.gif";
    }
    if(toggle8.checked){
        lampu8.src = "assets/on.gif";
    }
    else{
        lampu8.src = "assets/off.gif";
    }
    if(toggle9.checked){
        lampu9.src = "assets/on.gif";
    }
    else{
        lampu9.src = "assets/off.gif";
    }
    if(toggle10.checked){
        lampu10.src = "assets/on.gif";
    }
    else{
        lampu10.src = "assets/off.gif";
    }
    if(toggle7.checked && toggle8.checked && toggle9.checked && toggle10.checked){
        toggleTamu.checked = true;
    }
    else if(toggle7.checked || toggle8.checked || toggle9.checked || toggle10.checked == false){
        toggleTamu.checked = false;
    }
}

function tamuSemua(){
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");
    let toggleTamu = document.getElementById("default-toggleTamu");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");

    if(toggleTamu.checked){
        toggle7.checked = true;
        lampu7.src = "assets/on.gif";
        toggle8.checked = true;
        lampu8.src = "assets/on.gif";
        toggle9.checked = true;
        lampu9.src = "assets/on.gif";
        toggle10.checked = true;
        lampu10.src = "assets/on.gif";
    }
    else{
        toggle7.checked = false;
        lampu7.src = "assets/off.gif";
        toggle8.checked = false;
        lampu8.src = "assets/off.gif";
        toggle9.checked = false;
        lampu9.src = "assets/off.gif";
        toggle10.checked = false;
        lampu10.src = "assets/off.gif";
    }
}