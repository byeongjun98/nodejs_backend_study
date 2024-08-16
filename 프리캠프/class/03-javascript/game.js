const startWord=() => {
    let word = document.getElementById("word").innerText
    let myWord = document.getElementById("myword").value

    let lastWord = word[word.length - 1]
    let firstWord  = myWord[0]

    if(lastWord === firstWord){
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myWord
        document.getElementById("myword").value = ""
    } else{
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").innerText=""
    }
}
