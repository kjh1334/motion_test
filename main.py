run = 0
count = 0
pins.servo_write_pin(AnalogPin.P2, 0)

def on_forever():
    global run, count
    if pins.analog_read_pin(AnalogPin.P1) == 10:
        run = 1
    elif pins.analog_read_pin(AnalogPin.P1) == 80:
        run = 0
        count = 0
        pins.servo_write_pin(AnalogPin.P2, 0)
    if run == 0:
        if count < 60:
            pins.servo_write_pin(AnalogPin.P2, 40)
            basic.pause(500)
            pins.servo_write_pin(AnalogPin.P2, 0)
            basic.pause(500)
            count += 1
        elif count < 180:
            basic.pause(1000)
            count += 1
        else:
            count = 0
basic.forever(on_forever)
