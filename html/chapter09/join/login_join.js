function onLoad(){
    //패턴검색내용
    const idpattern = /^[\w]{3,}$/;
    const pwdPattern = /^[\w]{6,10}$/;
    const namePattern = /^[가-힣]{2,4}|[A-Z]{1}[a-zA-z\x20]{1,9}$/;
    const nickNamePattern = /^[\w가-힣]{4,}$/;
    const emailPattern = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    const telPattern = /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4])-)(\d{3,4}-)(\d{4})$/;
    const mobilePattern = /^010-\d{3,4}-(\d{4})$/;

    //객체찾기
    const inputID = document.querySelector("#input-id");
    const inputPW1 = document.querySelector("#input-pw1");
    const inputPW2 = document.querySelector("#input-pw2");
    const inputName = document.querySelector("#input-name");
    const inputNickName = document.querySelector("#input-nickname");
    const inputemail = document.querySelector("#input-email");
    const inputTel = document.querySelector("#input-tel");
    const inputMobile = document.querySelector("#input-mobile");
    const zipcode = document.querySelector("#zipcode");
    const addr1 = document.querySelector("#addr1");
    const addr2 = document.querySelector("#addr2");
    const btnSearchAddr = document.querySelector("#btn-searchAddr");
    const myform = document.querySelector(".myform");

    myform.addEventListener("submit",(e)=>{
        e.preventDefault();
        inputID.addEventListener("blur",()=> validate(inputID,idpattern,"영문자, 숫자, 만 입력 가능"));
        inputPW1.addEventListener("blur",()=> validate(inputPW1,pwdPattern,"영문자, 숫자, 만 입력 가능"));
        inputPW2.addEventListener("blur",()=> validate(inputPW2,pwdPattern,"영문자, 숫자, 만 입력 가능"));
        inputName.addEventListener("blur",()=> validate(inputName,namePattern,"한글 2~4글자 영문 대문자로 시작할 것(20글자까지)"));
        inputNickName.addEventListener("blur",()=> validate(inputNickName,nickNamePattern,"공백없이 한글,영문,숫자만 입력 가능"));
        inputemail.addEventListener("blur",()=> validate(inputemail,emailPattern,"email 형식에 맞지않습니다."));
        inputTel.addEventListener("blur",()=> validate(inputTel,telPattern,"전화번호 형식에 맞지않습니다."));
        inputMobile.addEventListener("blur",()=> validate(inputMobile,mobilePattern,"휴대폰번호 형식에 맞지않습니다."));
        if(zipcode.value==="" || addr1.value===""){
            zipcode.nextSibling.textContent="주소선택해주세요";
            zipcode.focus();
            return;
        }
        alert("서버로 전송하겠습니다.");
        myform.submit();
    });

    //이벤트리스너 등록 및 핸들러 처리
    inputID.addEventListener("blur",()=> validate(inputID,idpattern,"영문자, 숫자, 만 입력 가능"));
    inputPW1.addEventListener("blur",()=> validate(inputPW1,pwdPattern,"영문자, 숫자, 만 입력 가능"));
    inputPW2.addEventListener("blur",()=> validate(inputPW2,pwdPattern,"영문자, 숫자, 만 입력 가능"));
    inputName.addEventListener("blur",()=> validate(inputName,namePattern,"한글 2~4글자 영문 대문자로 시작할 것(20글자까지)"));
    inputNickName.addEventListener("blur",()=> validate(inputNickName,nickNamePattern,"공백없이 한글,영문,숫자만 입력 가능"));
    inputemail.addEventListener("blur",()=> validate(inputemail,emailPattern,"email 형식에 맞지않습니다."));
    inputTel.addEventListener("blur",()=> validate(inputTel,telPattern,"전화번호 형식에 맞지않습니다."));
    inputMobile.addEventListener("blur",()=> validate(inputMobile,mobilePattern,"휴대폰번호 형식에 맞지않습니다."));
    function validate(userInput,pattern,message){
        if(userInput.value.match(pattern)){
            userInput.nextSibling.innerHTML = "성공";
            userInput.nextSibling.style.color = "blue";
        }else{
            userInput.nextSibling.innerHTML = message;
            userInput.nextSibling.style.color = "red";
            userInput.value="";
            userInput.focus();
            return;
        }
    }
    btnSearchAddr.addEventListener("click",()=>{
        new daum.Postcode({
            oncomplete: function(data) {
              document.getElementById("zipcode").value = data.zonecode;
              document.getElementById("addr1").value = data.roadAddress;
            }
          }).open();
    });
}