input.onButtonPressed(Button.A, function () {
    if (random == 7) {
        basic.showNumber(random)
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        basic.showNumber(random)
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (random == 7) {
        basic.showNumber(random)
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        basic.showNumber(random)
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
let random = 0
random = 0
basic.forever(function () {
    random = randint(0, 10)
})
