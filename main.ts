// P1=Light
pins.digitalWritePin(DigitalPin.P1, 1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P4, 90)
        pins.servoWritePin(AnalogPin.P4, 0)
    }
})
