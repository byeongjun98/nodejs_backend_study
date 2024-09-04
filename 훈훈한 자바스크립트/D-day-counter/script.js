const messageContainer = document.querySelector('#d-day-message')
const dDayContainer = document.querySelector('#d-day-container')
dDayContainer.style.display = 'none'
messageContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>'

const dataFormMaker = () => {
    const getYear = document.querySelector('#yearInput').value
    const getMonth = document.querySelector('#monthInput').value
    const getDate = document.querySelector('#dateInput').value

    const dateFormat = `${getYear}-${getMonth}-${getDate}`
    return dateFormat;
}

const counterMaker = () => {
    const targetDateInput = dataFormMaker()
    const nowDate = new Date()
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0)
    const remaining = (targetDate - nowDate) / 1000
    if (remaining <= 0) {
        dDayContainer.style.display = 'none'
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다</h3>'
        messageContainer.style.display = 'flex'
        return;
    } else if (isNaN(remaining)) {
        dDayContainer.style.display = 'none'
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다</h3>'
        messageContainer.style.display = 'flex'
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

    // for of문
    let i = 0;
    for (let tag of documentArr) {
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
        i++;
    }

    // const docKeys = Object.keys(documentObj)
    // for 문
    // for (let i = 0; i < timeKeys.length; i++) {
    //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]
    // }

    // const documentObj = {
    //     days: document.getElementById('days'),
    //     hours: document.getElementById('hours'),
    //     min: document.getElementById('min'),
    // //     sec: document.getElementById('sec')
    // }
    // for in 문
    // let i = 0;
    // for (let key in documentObj) {
    //     documentObj[key].textContent = remainingObj[timeKeys[i]]
    //     i++;
    // }

    // documentObj.days.textContent = remainingObj.remainingDate
    // documentObj.hours.textContent = remainingObj.remainingHours
    // documentObj.min.textContent = remainingObj.remainingMin
    // documentObj.sec.textContent = remainingObj.remainingSec

};

const starter = function () {
    dDayContainer.style.display = 'flex'
    messageContainer.style.display = 'none'
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            counterMaker()
        }, 1000 * i)
    }
};
