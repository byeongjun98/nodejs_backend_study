const messageContainer = document.querySelector('#d-day-message')
const dDayContainer = document.querySelector('#d-day-container')
//dDayContainer.style.display = 'none'
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
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다</h3>'
    } else if (isNaN(remaining)) {
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다</h3>'
    }

    // const remainingDate = Math.floor(remaining / 3600 / 24)
    // const remainingHours = Math.floor(remaining / 3600) % 24
    // const remainingMin = Math.floor(remaining / 60) % 60
    // const remainingSec = Math.floor(remaining) % 60
    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    }

    // const days = document.getElementById('days')
    // const hours = document.getElementById('hours')
    // const min = document.getElementById('min')
    // const sec = document.getElementById('sec')

    const documentObj = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        min: document.getElementById('min'),
        sec: document.getElementById('sec')
    }

    documentObj.textContent = remainingObj.remainingDate
    documentObj.hours.textContent = remainingObj.remainingHours
    documentObj.min.textContent = remainingObj.remainingMin
    documentObj.sec.textContent = remainingObj.remainingSec

    // console.log(remainingDate, remainingHours, remainingMin, remainingSec)
}
