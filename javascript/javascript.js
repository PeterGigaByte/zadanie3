
function displayRadioValue() {

        var ele = document.getElementsByName('decision');

        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                if(ele[i].value === 'Yes'){
                    document.getElementById("height_block").style.display = "inline";
                    document.getElementById("weight_block").style.display = "inline";
                }if(ele[i].value === 'No'){
                    document.getElementById("height_block").style.display = "none";
                    document.getElementById("weight_block").style.display = "none";
                }
            }


        }
}
