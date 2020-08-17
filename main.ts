controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    light.setBrightness(0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    keyboard.type("10181018")
    light.setBrightness(20)
    light.setAll(0xff00ff)
})
effects.bubbles.startScreenEffect()
light.showAnimation(light.rainbowAnimation, 5000)
game.onUpdateInterval(5000, function () {
    light.setAll(0x000000)
})
