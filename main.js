//랜덤번호 지정
//유저가 번호를 입력  -> go 버튼 누름
//만약 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 < 유저번호 Down ! 
//랜덤번호가 > 유저번호 Yp ! 
//reset 버튼 -> 게임 reset
//5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측불가, 버튼disable)
//유저가 1~100 범위 밖 숫자 알려준다 기회깍지 않음
// 유저가 이미 입력한 숫자를 입력하면 알려준다, 기회깍지 않음

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){
    userInput.value="";
});

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;
    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100사이 숫자만 입력해주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해 주세요"
        return;
    }
    chances --;
    chanceArea.textContent=`남은기회:${chances}번`;
    

    if(userValue < computerNum){
        resultArea.textContent = "UP!!!";
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!!";
    }else{
        resultArea.textContent = "맞췄습니다.!!!";
        gameOver=true;
    }

    history.push(userValue);

    if(chances < 1){
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    //user input 창 깨끗하게 정리
    userInput.value = ""
    //새로운 번호가 생성되고
    pickRandomNum();
    resultArea.textContent="결과값이 여기 나옵니다."
    chanceArea.textContent="남은 찬스:5번"


}

pickRandomNum();

