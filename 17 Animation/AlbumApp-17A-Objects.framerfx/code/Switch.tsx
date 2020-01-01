import * as React from "react"
import { Frame } from "framer"

export function Switch(props) {
    const [isOn, setIsOn] = React.useState(false)

    const handleTap = () => {
        console.log("TAP!")

        if (isOn) {
            setIsOn(false)
        } else {
            setIsOn(true)
        }
    }

    let bgAnimation
    let toggleAnimation

    if (isOn) {
        bgAnimation = { background: "#6700C7", border: "1px solid #20003D" }
        toggleAnimation = { x: 32 }
    } else {
        bgAnimation = { background: "#DCC2FA", border: "1px solid #C189FF" }
        toggleAnimation = { x: 0 }
    }

    return (
        <Frame
            name="Background"
            width={64}
            height={32}
            borderRadius={16}
            background="#6700C7"
            border="1px solid #20003D"
            onTap={handleTap}
            animate={bgAnimation}
        >
            <Frame
                name="Toggle"
                size={26}
                background="#FFF"
                borderRadius="100%"
                top={2}
                left={2}
                shadow="1px 1px 5px rgba(0,0,0,0.2)"
                animate={toggleAnimation}
            />
        </Frame>
    )
}
