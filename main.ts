let distance = 0
basic.forever(function () {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 59)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 59)
    pins.digitalWritePin(DigitalPin.P10, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P10, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P10, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P1, PulseValue.High), 58)
    if (distance < 50) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 30)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 30)
        basic.pause(500)
    }
    basic.pause(50)
})
