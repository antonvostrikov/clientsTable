export const inputHander = ({target}) => {
    if (target.hasAttribute('data-reg')) {
        inputCheck(target)
    }
}

const inputCheck = (el) => {
    const inputValue = el.value
    const inputReg = el.getAttribute('data-reg')
    const reg = new RegExp(inputReg)

    if (reg.test(inputValue)) {
        el.style.border = '1px solid green'
        el.setAttribute('is-valid', '1')
    } else {
        el.style.border = '1px solid red'
        el.setAttribute('is-valid', '0')
    }
}