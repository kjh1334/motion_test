input.onButtonPressed(Button.A, function () {
    run = 1
})
input.onButtonPressed(Button.B, function () {
    run = 0
    count = 0
    pins.servoWritePin(AnalogPin.P2, 0)
})
let count = 0
let run = 0
run = 0
count = 0
pins.servoWritePin(AnalogPin.P2, 0)
basic.forever(function () {
    if (run == 1) {
        if (count < 60) {
            pins.servoWritePin(AnalogPin.P2, 30)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P2, 0)
            basic.pause(500)
            count += 1
        } else if (count < 180) {
            basic.pause(1000)
            count += 1
        } else {
            count = 0
        }
    }
})
