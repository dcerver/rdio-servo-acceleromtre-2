angle = 0
millig = 0
servos.P0.set_angle(90)
basic.pause(2000)

def on_forever():
    global millig, angle
    millig = input.acceleration(Dimension.X)
    angle = pins.map(millig, -1023, 1023, 0, 180)
    servos.P0.set_angle(angle)
basic.forever(on_forever)
