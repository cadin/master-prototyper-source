import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function Switch(props) {
    let currentVariant
    if (props.isOn) {
        currentVariant = "on"
    } else {
        currentVariant = "off"
    }

    const toggleVariants = {
        on: { x: 32 },
        off: { x: 0 },
    }

    const bgVariants = {
        on: { background: "#6700C7", border: "1px solid #20003D" },
        off: { background: "#DCC2FA", border: "1px solid #C189FF" },
    }

    return (
        <Frame
            name="Background"
            width={64}
            height={32}
            borderRadius={16}
            background="#6700C7"
            border="1px solid #20003D"
            variants={bgVariants}
            initial={currentVariant}
            animate={currentVariant}
            {...props}
        >
            <Frame
                name="Toggle"
                size={26}
                background="#FFF"
                borderRadius="100%"
                top={2}
                left={2}
                shadow="1px 1px 5px rgba(0,0,0,0.2)"
                variants={toggleVariants}
            />
        </Frame>
    )
}

Switch.defaultProps = {
    isOn: false,
    width: 64,
    height: 32,
}

addPropertyControls(Switch, {
    isOn: {
        title: "State",
        type: ControlType.Boolean,
        defaultValue: false,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
})
