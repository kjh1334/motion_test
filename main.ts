led.enable(false)
let run = 1
pins.digitalWritePin(DigitalPin.P5, 1)
pins.digitalWritePin(DigitalPin.P6, 0)
let count = 0
pins.servoWritePin(AnalogPin.P1, 0)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
basic.forever(function () {
    if (run == 1) {
        if (pins.digitalReadPin(DigitalPin.P9) == 0) {
            run = 0
            pins.digitalWritePin(DigitalPin.P5, 0)
            pins.digitalWritePin(DigitalPin.P6, 1)
        }
        if (count < 60) {
            pins.servoWritePin(AnalogPin.P1, 12)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(500)
            count += 1
        } else if (count < 180) {
            pins.digitalWritePin(DigitalPin.P3, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(500)
            count += 1
        } else {
            count = 0
            pins.servoWritePin(AnalogPin.P1, 0)
        }
    } else {
        if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            run = 1
            count = 0
            pins.digitalWritePin(DigitalPin.P5, 1)
            pins.digitalWritePin(DigitalPin.P6, 0)
        }
    }
})
