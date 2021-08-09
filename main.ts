let Peso = 0
basic.forever(function () {
    Peso = randint(50, 150)
    led.plotBarGraph(
    Peso,
    0
    )
    basic.showNumber(Peso)
    if (Peso >= 50 && Peso <= 70) {
        basic.showIcon(IconNames.Yes)
    } else if (Peso >= 71 && Peso <= 85) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Peso >= 86 && Peso <= 100) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Peso > 100) {
        basic.showIcon(IconNames.No)
    }
})
