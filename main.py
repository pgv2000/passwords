def on_a_pressed():
    keyboard.type("10181018")
    light.set_all(0xff00ff)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

effects.confetti.start_screen_effect()
light.show_animation(light.rainbow_animation, 5000)