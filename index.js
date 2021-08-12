const birthdate = document.querySelector("#birthdate");
const luckyno = document.querySelector("#luckyno");
const calculatebtn = document.querySelector("#calculate");
const output = document.querySelector(".output");
const gif1 = document.querySelector(".gif1");
const gif2 = document.querySelector(".gif2");

function checkForLuckyBirthday() {
    let sum = 0;
    let birthDayString = (birthdate.value.split('-')).join('');
    for (let item of birthDayString) {
        sum += parseInt(item);
    }
    console.log(sum);

    if (sum % parseInt(luckyno.value) === 0) {
        output.innerHTML = "Hurray!!You are a lucky person!";
        gif1.classList.remove('hide');
    } else {
        output.innerHTML = "Oops!!Your birthday is not a lucky number";
        gif2.classList.remove('hide');
    }

}

function resetGIF() {
    gif1.classList.add('hide');
    gif2.classList.add('hide');
}

function validateInput() {
    resetGIF();

    if (birthdate.value == "" || luckyno.value == "" || luckyno.value <= 0) {
        output.innerHTML = "Please Enter Valid Input to continue";
    } else {
        checkForLuckyBirthday();
    }


}

calculatebtn.addEventListener('click', validateInput)