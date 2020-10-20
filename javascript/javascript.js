
function displayRadioValue() {

        const ele = document.getElementsByName('decision');
        document.getElementById("success").style.display = 'none';
        document.getElementById('country').style.display = 'none';
        document.getElementById('scenes').style.display = 'none';
        document.getElementById("height_block").style.display = "none";
        document.getElementById("weight_block").style.display = "none";
        document.getElementById("project").style.display = "none";
        document.getElementById('custom_value').style.display = 'none';
        document.getElementById('position').style.display = 'none';
        document.getElementById('textarea-block').style.display = "none";
        document.getElementById('custom_value3').style.display = "none";
         document.getElementById('custom_value2').style.display = 'none';
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                if(ele[i].value === 'Yes'){
                    document.getElementById("height_block").style.display = "inline";
                    document.getElementById("weight_block").style.display = "inline";
                    document.getElementById("project").style.display = "inline";
                }if(ele[i].value === 'No'){
                    document.getElementById('textarea-block').style.display = "inline";
                }
            }
        }
}
function displaySelectValue() {
    const ele = document.getElementById('select_project').value;
    document.getElementById('custom_value').style.display = 'none';
    document.getElementById('position').style.display = 'none';
    document.getElementById('textarea-block').style.display = "none";
    document.getElementById('custom_value3').style.display = "none";
    document.getElementById("success").style.display = 'none';
    document.getElementById('scenes').style.display = 'none';
    document.getElementById('country').style.display = 'none';
    document.getElementById('custom_value2').style.display = 'none';
    if(ele==='Komparz'){
        document.getElementById('custom_value3').style.display = "inline";
    }if(ele==='Filmový herec'){
        document.getElementById('position').style.display = 'inline';
    }if(ele==='Seriálový herec'){
        document.getElementById('position').style.display = 'inline';
    }if(ele==='Účinkoval v relácii'){
        document.getElementById('custom_value3').style.display = "inline";
    }if(ele==='Zábavný program'){
        document.getElementById('custom_value3').style.display = "inline";
        document.getElementById("success").style.display = 'inline';
    }if(ele==='Vlastné'){
        document.getElementById('custom_value').style.display = 'inline';
    }if(ele==='Nebol'){
        document.getElementById('textarea-block').style.display = "inline";
    }

}
function displaySelectValue2() {
    const ele = document.getElementById('select_position').value;
    document.getElementById('country').style.display = 'none';
    document.getElementById('scenes').style.display = 'none';
    document.getElementById('custom_value2').style.display = 'none';
    if(ele==="Hlavná rola"){
        document.getElementById('country').style.display = 'inline';

    }if(ele==="Veďlajšia rola"){
        document.getElementById('scenes').style.display = 'inline';
    }
}
function displaySelectValue3() {
    const ele = document.getElementById('select_country').value;
    document.getElementById('custom_value2').style.display = 'none';
    if(ele==="Vlastné"){
        document.getElementById('custom_value2').style.display = 'inline';
    }
}
let options;

function createOptions(select){
    for(let i = 0; i < options.length; i++) {
        const opt = options[i];
        const el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

function validateForm(){
    let x = document.forms["form_actors"]["firstName"].value;
    if (x === "") {
        alert("Meno musí byť vyplnené");
        return false;
    }
    x=document.forms["form_actors"]["lastName"].value;
    if (x === "") {
        alert("Priezvisko musí byť vyplnené");
        return false;
    }
    x=document.forms["form_actors"]["birthDate"].value;
    if (x === "") {
        alert("Dátum narodenia musí byť vyplnený");
        return false;
    }

    if(validateAge() !== true || validateEmail()!== true){
        return false
    }


}
function validateEmail(){
    let x = document.forms["form_actors"]["email"].value;
    const res = x.split("@", 1);
    res[0]=res[0].length;
    if(res < 3){
        alert("Pred @ musia byť aspoň 3 znaky.");
        return false;
    }

    const dom = x.split(".");
    let domLength = dom.length;
    if(dom.length<3){
        alert("Musia byť aspoň dve domény.");
        return false;
    }
    for (let i = 1; i < domLength;i++) {
        if(dom[i].length < 2||dom[i].length > 4){
            alert("Domény musia obsahovať aspoň 2 znaky a max 4.");
            return false;}
    }
    return true;
}

function validateAge(){

    const age=document.forms["form_actors"]["age"].value;
    let currentDate = new Date(); //17.10.2020
    const year = new Date(document.getElementById("birthDate").value).getFullYear();//1999
    const month = new Date(document.getElementById("birthDate").value).getMonth();//08
    const day = new Date(document.getElementById("birthDate").value).getDate();//11
    let ageMy = currentDate.getFullYear() - year;
    if(age === ""){
        return true;
    }
    if(currentDate.getMonth() - month < 0){
        ageMy= ageMy-1;
    }
    if(currentDate.getMonth() === month){
        if(currentDate.getDate() - day < 0){
            ageMy= ageMy-1;
        }
    }
    if(ageMy!=age){
        alert("Zlý vek\n"+"\n"+"Poďla narodenia "+ageMy+"\n"+"Podľa vstupu "+age);
        return false;
    }
    return true;
}

let select = document.getElementById("select_project");
options = ['Vlastné', "Nebol", "Komparz", "Filmový herec", "Seriálový herec", "Účinkoval v relácii", "Zábavný program"];
createOptions(select);
select = document.getElementById("select_position");
options = ['Hlavná rola','Veďlajšia rola'];
createOptions(select);
select = document.getElementById("select_scenes");
options = ['Stále','Často','Menej často','Zriedkavo','Občas','Takmer nikdy'];
createOptions(select)
select = document.getElementById("select_country");
options = ['Slovensko','Česko','Rakúsko','Nemecko','USA','Vlastné'];
createOptions(select)

