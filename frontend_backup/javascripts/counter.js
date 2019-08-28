const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const mins = document.querySelector('.mins')
const secs = document.querySelector('.secs')

function setDigits(section, digit) {
    const tens = [...section.children[0].children]
    const ones = [...section.children[1].children]
    tens.forEach(number => number.classList.remove('active'))
    tens[digit[0]].classList.add('active')
    ones.forEach(number => number.classList.remove('active'))
    ones[digit[1]].classList.add('active')
}