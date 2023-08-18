let btn_hamb = document.getElementById("btn-hamb");
let bodyfalso = document.getElementById("bodyfalso");
let nav = document.getElementById("navdentro");


let flag = 0;
let aux = 0;

let funcao_nav = () => {
    if(flag === 0){
        console.log("abrindo");
        bodyfalso.style.marginRight = "-55%";
        bodyfalso.style.scale = "85%";
        bodyfalso.style.height = "95vh";
        bodyfalso.style.borderRadius = "35px";
        bodyfalso.style.transition = "0.3s ease-in-out";
        document.body.style.transition = "45.5s";
        document.body.style.backgroundPosition = "0% 0%";
        bodyfalso.style.boxShadow = "0px 0px 0px 0px rgba(78, 204, 163, 0.13), -13px 9px 35px 0px rgba(78, 204, 163, 0.13), -51px 38px 64px 0px rgba(78, 204, 163, 0.11), -116px 85px 86px 0px rgba(78, 204, 163, 0.07), -206px 152px 102px 0px rgba(78, 204, 163, 0.02), -322px 237px 112px 0px rgba(78, 204, 163, 0.00)"
        nav.style.visibility = "visible";
        nav.style.display = "flex";
        nav.style.animation = "fadeIn 0.3s ease-in-out";
        nav.style.transition = "0.3s ease-in-out";
        nav.style.marginLeft = "1rem";
        nav.style.opacity = "100%";
        flag = 1;
    }
}

bodyfalso.onclick = () => {
    if(flag === 1 && aux === 1){
        flag = 0;
        nav.style.animation = "fadeOut 0.3s ease-in-out";
        setTimeout(function() {
            bodyfalso.style.boxShadow = "";
            bodyfalso.style.scale = ""; 
            bodyfalso.style.marginRight = "";
            bodyfalso.style.borderRadius = "";
            nav.style.display = "";
            nav.style.opacity = "0%";
            nav.style.marginLeft = "";
            setTimeout(function(){
                nav.style.visibility = "";
                bodyfalso.style.height = "";
                document.body.style.backgroundPosition = "";
                document.body.style.transition = "0s";
            }, 500);
            aux=0;
          }, 100);
        
    }
    else if(flag === 1 && aux === 0){
        aux=1;
    }
}

let isSwiping = false;
const navbar = document.getElementById('navbar');

function handleSwipeRight(event) {
  if (isSwiping) {
    return;
  }
  isSwiping = true;
  const touch = event.changedTouches[0];
  const navbarWidth = navbar.offsetWidth; 
  const touchAreaWidth = 1000; // largura
  const minHorizontalSwipe = 30;
  if (touch.pageX > navbarWidth - touchAreaWidth &&
      touch.pageX - touch.clientX < minHorizontalSwipe) {
    btn_hamb.click();
  }
  setTimeout(() => {
    isSwiping = false;
  }, 750);
}
navbar.addEventListener('touchmove', handleSwipeRight);

// ================================================================================================================================================

let editando_aux = 0;

let editando = () =>{
  if(editando_aux === 0){
    console.log("editando");
    editando_aux = 1;
  } else{
    console.log("salvando");
    editando_aux = 0;
  }
}