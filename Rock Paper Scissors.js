
// 게임에 필요한 정보를 저장할 객체
const gameData = {
    computerChoice : ['바위', '가위', '보'],
    myChoice : ['바위', '가위', '보'],
    result : '',
    gameCount : 0,
    winCount : 0,
    defeatCount : 0
};

// 버튼에 리스너 추가
const $btn = document.getElementById('buttons');
const $resultBtn = document.getElementById('resultBtns');

$btn.addEventListener('click', e => {
    if(e.target.matches('#rock')) {
        console.log('바위 클릭됌!');
    } else if(e.target.matches('#scissors')) {
        console.log('가위 클릭됌!');
    } else if(e.target.matches('#paper')) {
        console.log('보 클릭됌!');
    } 
    else return;
});

$resultBtn.addEventListener('click', e => {
    if(e.target.matches('#restart')) {
        console.log('다시하기 클릭됌!');
    } else if(e.target.matches('#quit')) {
        console.log('그만하기 클릭됌!');
    }
});

// 컴퓨터의 가위바위보 값을 결정할 함수
function decisionComputerChoice() {
    const decisionRPS = Math.floor(Math.random() * 3);
    return decisionRPS;
}

