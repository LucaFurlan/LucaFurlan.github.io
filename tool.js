const red_b="#ff000082";
const green_b="#43f25ed1";
const red_f="#6f0707";
const green_f="#027e02";

function check() {
    document.getElementById("risultato").innerHTML="";
    var pwd=document.getElementById('pwd_input').value;
    var result=true;
    if (pwd.length>13){
        if (pwd.length<22){
        document.getElementById("lunghezza").style.backgroundColor = green_b;
        document.getElementById("lunghezza").style.color = green_f;
        document.getElementById("lunghezza").style.borderColor = green_f;
        document.getElementById("lunghezza").innerHTML=" La password contiene dai 14 ai 21 caratteri";
        }else{
            document.getElementById("lunghezza").style.backgroundColor = red_b;
            document.getElementById("lunghezza").style.color = red_f;
            document.getElementById("lunghezza").style.borderColor = red_f;
            document.getElementById("lunghezza").innerHTML=" La password non può contenere più di 21 caratteri";
            result=false;
        }
    }
    else{
        document.getElementById("lunghezza").style.backgroundColor = red_b;
        document.getElementById("lunghezza").style.color = red_f;
        document.getElementById("lunghezza").style.borderColor = red_f;
        document.getElementById("lunghezza").innerHTML=" La password deve contenere almeno 14 caratteri"
        result=false;
    }

    if (!(/[A-Z]+/.test(pwd)))
    {
        document.getElementById("maiuscole").style.backgroundColor = red_b;
        document.getElementById("maiuscole").style.color = red_f;
        document.getElementById("maiuscole").style.borderColor = red_f;
        document.getElementById("maiuscole").innerHTML=" La password deve contenere almeno una lettera maiuscola";
        result=false;
    }else if(!(/[a-z]+/.test(pwd)))
    {
        document.getElementById("maiuscole").style.backgroundColor = red_b;
        document.getElementById("maiuscole").style.color = red_f;
        document.getElementById("maiuscole").style.borderColor = red_f;
        document.getElementById("maiuscole").innerHTML=" La password deve contenere almeno una lettera minuscola";
        result=false;
    }else
    {
        document.getElementById("maiuscole").style.backgroundColor = green_b;
        document.getElementById("maiuscole").style.color = green_f;
        document.getElementById("maiuscole").style.borderColor = green_f;
        document.getElementById("maiuscole").innerHTML=" La password contiene lettere maiuscole e minuscole";
    }
    if (!(/[0-9]{1,}.[0-9]{1,}/.test(pwd)) && !(/[0-9]{2,}/.test(pwd))){
        document.getElementById("numeri").style.backgroundColor = red_b;
        document.getElementById("numeri").style.color = red_f;
        document.getElementById("numeri").style.borderColor = red_f;
        document.getElementById("numeri").innerHTML=" La password deve contenere almeno due numeri";
        result=false;
    }else if((/^[0-9]/.test(pwd)))
    {
        document.getElementById("numeri").style.backgroundColor = red_b;
        document.getElementById("numeri").style.color = red_f;
        document.getElementById("numeri").style.borderColor = red_f;
        document.getElementById("numeri").innerHTML=" La password non può cominciare con un numero";
        result=false;
    }else if((/[0-9]$/.test(pwd)))
    {
        document.getElementById("numeri").style.backgroundColor = red_b;
        document.getElementById("numeri").style.color = red_f;
        document.getElementById("numeri").style.borderColor = red_f;
        document.getElementById("numeri").innerHTML=" La password non può terminare con un numero";
        result=false;
    }else{
        document.getElementById("numeri").style.backgroundColor = green_b;
        document.getElementById("numeri").style.color = green_f;
        document.getElementById("numeri").style.borderColor = green_f;
        document.getElementById("numeri").innerHTML=" La password contiene due numeri";
    }
    if (/[^0-9a-zA-Z]{1,}/.test(pwd))
    {
        document.getElementById("simboli").style.backgroundColor = green_b;
        document.getElementById("simboli").style.color = green_f;
        document.getElementById("simboli").style.borderColor = green_f;
        document.getElementById("simboli").innerHTML=" La password contiene un carattere speciale";
    }
    else{
        document.getElementById("simboli").style.backgroundColor = red_b;
        document.getElementById("simboli").style.color = red_f;
        document.getElementById("simboli").style.borderColor = red_f;
        document.getElementById("simboli").innerHTML=" La password deve contere almeno un carattere speciale";
        result=false;
    }
    if (/[\t | \s]{1,}/.test(pwd))
    {
        document.getElementById("simboli").style.backgroundColor = red_b;
        document.getElementById("simboli").style.color = red_f;
        document.getElementById("simboli").style.borderColor = red_f;
        document.getElementById("simboli").innerHTML=" La password non può contenere spazi";
        result=false;
    }
    
    


    document.getElementById("controlli").style.display="block";
    return result;
}

function check_button(){
    if (check()){
    document.getElementById("risultato").innerHTML=" La password <strong style=\"font-size: 18px; \">" + document.getElementById('pwd_input').value + "</strong> soddisfa tutti i requisiti di sicurezza </br> Utilizzala per proteggere tutti i tuoi account!";
}else{
    document.getElementById("risultato").innerHTML=" La password <strong style=\"font-size: 18px; \">" + document.getElementById('pwd_input').value + "</strong> non soddisfa tutti i requisiti di sicurezza. </br> Migliorala seguendo le indicazioni!";

}}
