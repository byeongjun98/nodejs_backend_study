//반복문

const children = ['철수', '영희', '훈이']
for(let i = 0; i<children.length;i++){
    console.log(children[i] + '입니다.');
};

let persons = [
    {name: '철수', age: 22},
    {name: '짱구', age: 21},
    {name: '영희', age: 20},
    {name: '훈이', age: 19},
]

for(let i=0; i<persons.length; i++){
    if(persons[i].age >=20){
        console.log(persons[i].name + ' 님은 성인입니다.');
    } else if (persons[i].age <= 20) {
        console.log(persons[i].name + '님은 미성년자입니다');
    }
}

//Quiz
const fruits = [
    {number : 1, title:"레드향" },
    {number : 2, title:"샤인머스켓" },
    {number : 3, title: "산청딸기"},
    {number : 4, title: "한라봉"},
    {number : 5, title: "사과"},
    {number : 6, title: "애플망고"},
    {number : 7, title: "딸기"},
    {number : 8, title: "천혜향"}
]

for(let i = 0; i< fruits.length; i++){
    //console.log(fruits[i].number + ' ' + fruits[i].title);
    console.log(`${fruits[i].number} ${fruits[i].title}`);//윗줄과 동일하게 동작
}