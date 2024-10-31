function carousel() {
    //화면객체
    let slideshow = document.querySelector(".slideshow");
    let slideshow_slides = document.querySelector(".slideshow_slides");
    let slidesArray = document.querySelectorAll(".slideshow_slides a");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let indicatorArray = document.querySelectorAll(".slideshow_indicator a");

    //현재이미지 인덱스, 인터벌 아이디, 슬라이드 갯수
    let currentIndex = 0;
    let timerID = null;
    let slideCount = slidesArray.length;

    //이미지정렬
    for(let i=0; i<slideCount; i++) {
        let newLeft = (i*100)+`%`;
        slidesArray[i].style.left = newLeft;
    }

    //함수생성
    function gotoslide(index){
        currentIndex = index;
        let newLeft = (index * -100)+`%`;
        slideshow_slides.style.left = newLeft;
        for(let i=0; i<slideCount; i++) {
            indicatorArray[i].classList.remove('active');
        }
        indicatorArray[index].classList.add('active');
    }

    //3초마다 gotoslide()
    function startTimer() {
        timerID = setInterval(()=>{
            let index = (currentIndex + 1) % slideCount;
            currentIndex = index;
            gotoslide(index);
        },3000);
    }
    startTimer();
    
    // 이벤트등록 핸들러기능
    slideshow_slides.addEventListener("mouseenter",(event)=>{
        clearInterval(timerID);
    });
    slideshow_slides.addEventListener("mouseleave",(event)=>{
        startTimer();
    });
    prev.addEventListener("mouseenter",(event)=>{
        clearInterval(timerID);
    });
    prev.addEventListener("mouseleave",(event)=>{
        startTimer();
    });
    next.addEventListener("mouseenter",(event)=>{
        clearInterval(timerID);
    });
    next.addEventListener("mouseleave",(event)=>{
        startTimer();
    });
    prev.addEventListener("click",(event)=>{
        event.preventDefault();
        currentIndex = currentIndex-1
        if(currentIndex < 0) {
            currentIndex = slideCount -1;
        }
        gotoslide(currentIndex);
    });
    next.addEventListener("click",(event)=>{
        event.preventDefault(); 
        currentIndex = currentIndex+1
        if(currentIndex > (slideCount-1)) {
            currentIndex = 0;
        }
        gotoslide(currentIndex);
    });

    //indicator 클릭하면 해당된 페이지로 이동한다.
    for(let i=0; i<slideCount; i++) {
        indicatorArray[i].addEventListener("mouseenter",(event)=>{
            clearInterval(timerID);
        });
    }
    for(let i=0; i<slideCount; i++) {
        indicatorArray[i].addEventListener("mouseleave",(event)=>{
            startTimer();
        });
    }
    for(let i=0; i<slideCount; i++) {
        indicatorArray[i].addEventListener("click",(event)=>{
            event.preventDefault();
            gotoslide(i);
        });
    }
}