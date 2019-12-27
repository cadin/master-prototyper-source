import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"

type Props = Partial<FrameProps> & {
    isOn: boolean
}

export function Switch(props: Props) {
    const { isOn, ...rest } = props

    return (
        <Frame
            {...rest}
            height={32}
            width={64}
            borderRadius={16}
            animate={{
                background: isOn ? "#6700C7" : "#DCC2FA",
                border: isOn ? "1px solid #20003D" : "1px solid #C189FF",
            }}
        >
            <Frame
                size={26}
                borderRadius={13}
                left={2}
                top={2}
                animate={{ x: isOn ? 32 : 0 }}
                initial={{ x: isOn ? 32 : 0 }}
                backgroundColor="#FFF"
                shadow="1px 1px 5px rgba(0,0,0,0.2)"
            />
        </Frame>
    )
}
