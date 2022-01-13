input.onButtonPressed(Button.A, function () {
    run = 1
    count = 0
})
input.onButtonPressed(Button.B, function () {
    run = 0
    count = 0
    pins.servoWritePin(AnalogPin.P1, 0)
})
let count = 0
let run = 0
led.enable(false)
run = 0
count = 0
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    if (run == 1) {
        if (count < 60) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.servoWritePin(AnalogPin.P1, 10)
            basic.pause(250)
            pins.servoWritePin(AnalogPin.P1, 20)
            basic.pause(250)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.servoWritePin(AnalogPin.P1, 10)
            basic.pause(250)
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(300)
            count += 1
        } else if (count < 180) {
            basic.pause(1000)
            count += 1
        } else {
            count = 0
            pins.servoWritePin(AnalogPin.P1, 0)
        }
    }
})
