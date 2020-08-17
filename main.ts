controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    light.setBrightness(0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    keyboard.type("10181018")
    light.setBrightness(20)
    light.setAll(0xff00ff)
})
effects.confetti.startScreenEffect()
light.showAnimation(light.rainbowAnimation, 5000)
