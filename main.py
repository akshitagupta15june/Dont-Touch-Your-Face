def on_forever():
    if input.acceleration(Dimension.X) > 550:
        basic.show_icon(IconNames.SAD)
    elif input.acceleration(Dimension.Y) > 550:
        basic.show_icon(IconNames.SAD)
    else:
        basic.clear_screen()
basic.forever(on_forever)
