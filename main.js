document.getElementById('display').addEventListener('keyup', (e) => {
    if (e.keyCode == 107 || e.keyCode == 106 || e.keyCode == 111 || e.keyCode == 109) {
        let value = document.getElementById('display').value;
        document.getElementById('display').value = value.substr(0, value.length - 1);
        return outputDisplay(e.key)
    }
    if(e.keyCode == 13)
        return outputDisplay('=')
})

document.getElementById('delete-icon').addEventListener('click', e => {
    const displayDelete = document.getElementById('display');
    displayDelete.value = displayDelete.value.slice(0, displayDelete.value.length - 1);
    document.getElementById('audio').src = 'Button-SoundBible.com-1420500901.mp3';
    document.getElementById('audio').play();
})

document.querySelectorAll('.elements').forEach(element => {
    element.addEventListener('click', (e) => {
        outputDisplay(e.target.innerText);
        let audioSrc = './Click On-SoundBible.com-1697535117.mp3';
        if(e.target.innerText == 'c') 
            audioSrc = 'Fuzzy Beep-SoundBible.com-1580329899.mp3';
        if(e.target.innerText == '=')
            audioSrc = 'Click2-Sebastian-759472264.mp3';    
        if(e.target.innerText == '*' || e.target.innerText == '/' || e.target.innerText == '+' || e.target.innerText == '-')
            audioSrc = 'Button-SoundBible.com-1420500901.mp3';

        document.getElementById('audio').src = audioSrc;
        document.getElementById('audio').play();
    })

    element.addEventListener('mouseup', () => {
        document.getElementById('audio').pause();
        document.getElementById('audio').currentTime = 0;
    })
})

function outputDisplay(itme) {
    const display = document.getElementById('display');
    const txt = document.getElementById('txt');
    const amal = document.getElementById('amal');

    let value = display.value;
    const bool2 = itme == '*' || itme == '/' || itme == '+' || itme == '-';
    const lable = txt.innerText;
    const amalTxt = amal.innerText;

    if (itme == 'c') {
        display.value = '';
        txt.innerText = '';
        amal.innerText = '';
        return;
    }

    if (itme == '=' && lable.length != 0 && value.length != 0) {
        const result = calculator(lable, value, amalTxt);
        txt.innerText = '';
        display.value = result;
        amal.innerText = '';
        return;
    }

    if (bool2 && lable.length != 0 && value.length != 0) {
        const result = calculator(lable, value, amalTxt)
        txt.innerText = result;
        display.value = '';
        amal.innerText = itme;
        return;
    }

    if (bool2 && lable.length == 0 && value.length != 0) {
        txt.innerText = value;
        display.value = '';
        amal.innerText = itme;
        return;
    }

    if (bool2 && lable.length != 0 && value.length == 0) {
        amal.innerText = itme;
        return;
    }

    if (!bool2 && itme != '=')
        return display.value += itme;

}

function calculator(a, b, itme) {
    const number1 = Number(a);
    const number2 = Number(b);

    if (itme == '+')
        return (number1 + number2).toString();
    if (itme == '-')
        return (number1 - number2).toString();
    if (itme == '*')
        return (number1 * number2).toString();
    if (itme == '/')
        return (number1 / number2).toString();
}