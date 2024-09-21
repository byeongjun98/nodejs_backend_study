const messageContainer = document.querySelector('#d-day-message');
const dDayContainer = document.querySelector('#d-day-container');
const intervalIdArr = [];

// 초기 상태 설정
dDayContainer.style.display = 'none';
messageContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>';

// 날짜 입력을 하나의 객체로 포맷팅하는 함수
const getFormattedDate = () => {
    const year = document.querySelector('#yearInput').value;
    const month = document.querySelector('#monthInput').value;
    const date = document.querySelector('#dateInput').value;

    return `${year}-${month}-${date}`;
};

// 타이머 계산 및 화면 업데이트 함수
const updateTimerDisplay = () => {
    const targetDateInput = getFormattedDate();
    const now = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
    const remainingSeconds = (targetDate - now) / 1000;

    if (remainingSeconds <= 0) {
        dDayContainer.style.display = 'none';
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다</h3>';
        messageContainer.style.display = 'flex';
        clearAllIntervals();
        return;
    } else if (isNaN(remainingSeconds)) {
        dDayContainer.style.display = 'none';
        messageContainer.innerHTML = '<h3>유효한 날짜를 입력해주세요</h3>';
        messageContainer.style.display = 'flex';
        clearAllIntervals();
        return;
    }

    // 남은 시간 계산
    const remainingTime = {
        days: Math.floor(remainingSeconds / 3600 / 24),
        hours: Math.floor(remainingSeconds / 3600) % 24,
        minutes: Math.floor(remainingSeconds / 60) % 60,
        seconds: Math.floor(remainingSeconds) % 60
    };

    // 화면에 남은 시간 업데이트
    document.getElementById('days').textContent = remainingTime.days;
    document.getElementById('hours').textContent = remainingTime.hours;
    document.getElementById('min').textContent = remainingTime.minutes;
    document.getElementById('sec').textContent = remainingTime.seconds;
};

// 타이머 시작 함수
const startTimer = () => {
    dDayContainer.style.display = 'flex';
    messageContainer.style.display = 'none';
    updateTimerDisplay();
    const intervalId = setInterval(updateTimerDisplay, 1000);
    intervalIdArr.push(intervalId);
};

// 모든 타이머 멈추기
const clearAllIntervals = () => {
    intervalIdArr.forEach(intervalId => clearInterval(intervalId));
    intervalIdArr.length = 0; // 배열 초기화
};

// 타이머 초기화 버튼 클릭 시 호출되는 함수
const resetTimer = () => {
    dDayContainer.style.display = 'none';
    messageContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>';
    messageContainer.style.display = 'flex';
    clearAllIntervals();
};
