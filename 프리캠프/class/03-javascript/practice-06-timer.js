// // let time = 180

// // setInterval(function timer(){
// //     if(time >= 0){
// //         let min = Math.floor(time/60)
// //         let sec = String(time % 60).padStart(2,"0")
// //         document.getElementById("time").innerText = deadLine
// //         let deadLine = Stirng(min + ":" + sec)
// //         console.log(min + ":" + sec);
// //         time--;
// //     }
// // }, 1000)

// // const sendNum = () => {
// //     const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// //     document.getElementById("numarea").innerText = token
// //     document.getElementById("numarea").style.color = "#" + token

// //     let time = 180

// //     setInterval(function timer(){
// //         if(time >= 0){
// //             let min = Math.floor(time/60)
// //             let sec = String(time % 60).padStart(2,"0")
// //             document.getElementById("time").innerText = min + ":" + sec
// //             time--;
// //         } else {
// //             document.getElementById("finish").disabled = true
// //             document.getElementById("time").innerText = '0:00'

// //         }
// //     }, 1000)
// // }

// let isStrated = false;

// let sendNum = () => {
//     if(isStrated === false){
//         isStrated = true
//         document.getElementById("finish").disabled = false
//         const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
//         document.getElementById("numarea").innerText = token
//         document.getElementById("numarea").style.color = "#" + token

//         let time = 10
//         let timer

//         timer = setInterval(function timer(){
//             if(time >= 0){
//                 let min = Math.floor(time/60)
//                 let sec = String(time % 60).padStart(2,"0")
//                 document.getElementById("time").innerText = min + ":" + sec
//                 time--;
//             } else {
//                 document.getElementById("finish").disabled = true
//                 isStrated = false
//                 clearInterval(timer)
//                 // document.getElementById("time").innerText = '0:00'
//             }
//         }, 1000)
//     } else{

//     }
// }

let isStrated = false;
let timer;  // timer 변수를 함수 밖에 선언하여 전역으로 사용

let sendNum = () => {
    if(isStrated === false){
        isStrated = true;
        document.getElementById("finish").disabled = false;
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("numarea").innerText = token;
        document.getElementById("numarea").style.color = "#" + token;

        let time = 180;  // 3분(180초) 타이머 설정

        timer = setInterval(() => {
            if(time >= 0){
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0");
                document.getElementById("time").innerText = min + ":" + sec;
                time--;
            } else {
                document.getElementById("finish").disabled = true;
                isStrated = false;
                clearInterval(timer);
            }
        }, 1000);
    } else {
        alert("타이머가 이미 실행 중입니다.");  
    }
}
