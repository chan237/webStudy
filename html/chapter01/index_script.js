//객체를 가져온다.
let box = window.document.getElementById("box");
let position = 0; //클래스명 대신 그냥 let 쓰면 변수값에 의해 형태 결정해버림

function move_box(){
    if(position<200){
        position +=1;
        box.style.left = position + "px";
    }else{
        position = 0;
        box.style.left = position + "px";
    }
    //계속해서 movebpx를 불러주는 기능을 콜백기능을 부여
    window.requestAnimationFrame(move_box)
}

move_box();
