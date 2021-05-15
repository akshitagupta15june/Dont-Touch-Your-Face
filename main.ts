basic.forever(function () {
    if (input.acceleration(Dimension.X) > 350) {
        music.playMelody("- - - A - - - - ", 120)
        basic.showIcon(IconNames.Sad)
    } else if (input.acceleration(Dimension.Y) > 350) {
        music.playMelody("- - - A - - - - ", 120)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.clearScreen()
    }
})
