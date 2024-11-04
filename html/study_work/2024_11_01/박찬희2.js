function onLoad(){
    const inputID = document.querySelector("#id"); 
    const inputPW1 = document.querySelector("#pwd"); 
    const inputPW2 = document.querySelector("#pwd2"); 
    const idPattern = /^[\w]$/; //[\w]는 영문자, 숫자, _만 입력 가능
    const pwdPattern = /^.*(?=^.{8,32}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    //이벤트리스너등록및 핸들러처리
    inputID.addEventListener("blur",()=>validate(inputID, idPattern));
    inputPW1.addEventListener("blur",()=>validate(inputPW1,pwdPattern));
    inputPW2.addEventListener("blur",()=>{
        validate(inputPW2,pwdPattern);
        if(inputPW1.value !== inputPW2.value){
            inputPW2.nextSibling.textContent ="패스워드가 일치하지 않음";
            inputPW2.nextSibling.style.color ="red";
            inputPW1.value="";
            inputPW2.value="";
            return; 
        }
    });
    
    //핸들러처리기능    
    function validate(userInput, pattern){
        if(userInput.value.match(pattern)){
           }else{
            userInput.nextSibling.innerHTML = "필수 입력 항목 입니다."
            userInput.value = "";
            return; 
           }
    }
}