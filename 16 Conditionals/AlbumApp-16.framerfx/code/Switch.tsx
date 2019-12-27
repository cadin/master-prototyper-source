import * as React from "react"
import { Frame } from "framer"

export function Switch(props) {
    const [xPos, setXPos] = React.useState(0)

    const handleTap = () => {
        console.log("TAP!")

        if (xPos == 0) {
            setXPos(32)
        } else {
            setXPos(0)
        }
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
        >
            <Frame
                name="Toggle"
                size={26}
                background="#FFF"
                borderRadius="100%"
                top={2}
                left={2}
                shadow="1px 1px 5px rgba(0,0,0,0.2)"
                x={xPos}
            />
        </Frame>
    )
}
