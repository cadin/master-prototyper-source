import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"

type Props = Partial<FrameProps> & {}

export function Dimscreen(props: Props) {
    const { ...rest } = props

    return (
        <Frame
            size="100%"
            background="#20003D"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            {...rest}
        ></Frame>
    )
}
