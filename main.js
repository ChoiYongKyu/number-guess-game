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

playButton.addEventListener("click",play)

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답", computerNum);
}

function play(){
    
}

pickRandomNum();

