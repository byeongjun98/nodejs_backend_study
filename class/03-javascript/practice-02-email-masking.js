/*
* 형편없는 내 코드..
let email = 'examle@gmail.com'
let userEmail = email.split('@')[0]
let company = email.split('@')[1]
console.log(userEmail);
console.log(company);

let maskingMail = [];
let mailLength = userEmail.length
console.log (mailLength)

let rule = mailLength 

for(let i = 0; i<(rule-4);i++){
    maskingMail.push(userEmail[i])
    for (let j = i; j >rule; j++){
        maskingMail.push(userEmail[j])
    }
}
console.log(maskingMail.join())*/

//stack overflow example
var maskid = "";
var myemailId =  "examle@gmail.com";
var prefix= myemailId.substring(0, myemailId.lastIndexOf("@"));
var postfix= myemailId.substring(myemailId.lastIndexOf("@"));

for(var i=0; i<prefix.length; i++) {
    if(i == 0 || i == prefix.length - 4) {
        maskid = maskid + prefix[i].toString();
    } else {
        maskid = maskid + "*";
    }
}
maskid = maskid + postfix;
console.log(maskid);