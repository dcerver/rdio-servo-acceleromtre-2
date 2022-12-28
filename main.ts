// El nombre rebut per ràdio és l'angle en graus que li passem a la variable "angle" que fixa l'angle de gir del Servo. 
radio.onReceivedNumber(function (receivedNumber) {
    angle = receivedNumber
    servos.P0.setAngle(angle)
})
let angle = 0
// Fixem el canal de transmissió igual que a l'emissor. 
radio.setGroup(20)
servos.P0.setAngle(90)
basic.forever(function () {
    if (angle >= 90) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
