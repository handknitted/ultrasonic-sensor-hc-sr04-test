function thereIsSpace () {
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 0)
        duration = pins.pulseIn(DigitalPin.P2, PulseValue.High, 40000)
if (duration != 0 && duration > 38000 || Math.idiv(duration, 58) > 20) {
            return 1
        }
    }
    return 0
}
let distance = 0
let duration = 0
basic.forever(function () {
    led.enable(false)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 59)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 59)
    basic.pause(100)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    distance = 10
    while (thereIsSpace() == 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 50)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 50)
        basic.pause(100)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    }
})
