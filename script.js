let btn_hamb = document.getElementById("btn-hamb");
let bodyfalso = document.getElementById("bodyfalso");
let nav = document.getElementById("navdentro");

let flag = 0;
let aux = 0;

let funcao_nav = () => {
    if(flag == 0){
        console.log("abrindo");
        bodyfalso.style.marginRight = "-55%";
        bodyfalso.style.scale = "85%";
        bodyfalso.style.borderRadius = "35px";
        bodyfalso.style.marginTop = "-10%";
        nav.style.display = "flex";
        nav.style.animation = "fadeIn 0.5s ease-in-out";
        nav.style.opacity = "100%";
        flag =1;
    }
}

bodyfalso.onclick = () => {
    if(flag === 1 && aux == 1){
        flag = 0;
        nav.style.animation = "fadeOut 0.5s ease-in-out";
        setTimeout(function() {
            bodyfalso.style.marginRight = "";
            bodyfalso.style.scale = "";
            bodyfalso.style.borderRadius = "";
            bodyfalso.style.marginTop = "";
            nav.style.display = "";
            nav.style.opacity = "0%";
            aux=0;
          }, 100);
        
    }
    else if(flag === 1 && aux == 0){
        aux=1;
    }
}

