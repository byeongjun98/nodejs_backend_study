const messageContainer = document.querySelector('#d-day-message')
const dDayContainer = document.querySelector('#d-day-container')
dDayContainer.style.display = 'none'
messageContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>'
const intervalIdArr = []

const dataFormMaker = () => {
    const getYear = document.querySelector('#yearInput').value
    const getMonth = document.querySelector('#monthInput').value
    const getDate = document.querySelector('#dateInput').value

    const dateFormat = `${getYear}-${getMonth}-${getDate}`
    return dateFormat;
}

const counterMaker = (data) => {
    const nowDate = new Date()
    const targetDate = new Date(data).setHours(0, 0, 0, 0)
    const remaining = (targetDate - nowDate) / 1000
    if (remaining <= 0) {
        dDayContainer.style.display = 'none'
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다</h3>'
        messageContainer.style.display = 'flex'
        setClearInterval()
        return;
    } else if (isNaN(remaining)) {
        dDayContainer.style.display = 'none'
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다</h3>'
        messageContainer.style.display = 'flex'
        setClearInterval()
        return
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    }

    const documentArr = ['days', 'hours', 'min', 'sec']
    const timeKeys = Object.keys(remainingObj)


    const format = function (time) {
        if (time < 10) {
            return '0' + time
        } else {
            return time
        }
    }
    // for of문
    let i = 0;
    for (let tag of documentArr) {
        const remainingTime = format(remainingObj[timeKeys[i]])
        document.getElementById(tag).textContent = remainingTime;
        i++;
    }
};

const starter = function () {
    const targetDateInput = dataFormMaker()
    dDayContainer.style.display = 'flex'
    messageContainer.style.display = 'none'
    setClearInterval()
    counterMaker(targetDateInput)
    const intervalId = setInterval(() => counterMaker(targetDateInput), 1000)
    intervalIdArr.push(intervalId)
};

const setClearInterval = () => {
    for (let i = 0; i < intervalIdArr.length; i++) {
        clearInterval(intervalIdArr[i])
    }
}

const resetTimer = function () {
    dDayContainer.style.display = 'none'
    messageContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>'
    messageContainer.style.display = 'flex'
    setClearInterval()
}
