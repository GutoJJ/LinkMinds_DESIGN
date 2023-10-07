let btn_hamb = document.getElementById("btn-hamb");
let bodyfalso = document.getElementById("bodyfalso");
let nav = document.getElementById("navdentro");


let flag = 0;
let aux = 0;

let funcao_nav = () => {
    if(flag === 0){
        console.log("abrindo");
        bodyfalso.style.marginRight = "-60%";
        bodyfalso.style.scale = "90%";
        bodyfalso.style.height = "95vh";
        bodyfalso.style.borderRadius = "15px";
        bodyfalso.style.transition = "0.3s ";
        nav.style.visibility = "visible";
        nav.style.display = "flex";
        nav.style.animation = "fadeIn 0.3s ";
        nav.style.transition = "0.3s ";
        nav.style.marginLeft = ".5rem";
        nav.style.opacity = "100%";
        flag = 1;
    }
}

bodyfalso.onclick = () => {
    if(flag === 1 && aux === 1){
        flag = 0;
        nav.style.animation = "fadeOut 0.3s ";
        setTimeout(function() {
            bodyfalso.style.boxShadow = "";
            bodyfalso.style.scale = ""; 
            bodyfalso.style.marginRight = "";
            bodyfalso.style.borderRadius = "";
            nav.style.display = "";
            nav.style.opacity = "0%";
            nav.style.marginLeft = "";
            setTimeout(function(){
                nav.style = "";
                bodyfalso.style = "";
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
