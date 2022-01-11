input.onGesture(Gesture.Shake, function () {
    I += 1
})
let I = 0
game.startCountdown(60000)
basic.forever(function () {
    basic.showNumber(I)
    basic.pause(5000)
    basic.showNumber(game.score())
    if (game.score() == 5) {
        basic.showString("You win")
        I = 0
        game.setScore(0)
    }
})
basic.forever(function () {
    if (I == 11) {
        I = 0
        game.addScore(1)
    }
})
