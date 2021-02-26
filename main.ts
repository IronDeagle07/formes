let FORMES = 0
input.onGesture(Gesture.Shake, function () {
    FORMES = randint(0, 3)
    if (FORMES == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showString("Merci!")
    } else if (FORMES == 1) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showString("Merci!")
    } else if (FORMES == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            `)
        basic.showString("Merci!")
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showString("Merci!")
    }
})
