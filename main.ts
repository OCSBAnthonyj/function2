function Subtract (Number1: number, Number2: number) {
    sum = Number1 - Number2
    return sum
}
input.onButtonPressed(Button.A, function () {
    number1 += -1
    basic.showNumber(number1)
})
function Add (Number1: number, Number2: number) {
    sum = Number1 + Number2
    return sum
}
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(Subtract(number1, number2))
})
input.onButtonPressed(Button.B, function () {
    number1 += 1
    basic.showNumber(number1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(Add(number1, number2))
})
input.onGesture(Gesture.Shake, function () {
    number2 = number1
})
let number2 = 0
let sum = 0
let number1 = 0
number1 = 0
basic.showNumber(number1)
