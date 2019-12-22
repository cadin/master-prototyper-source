import * as React from "react"
import { Frame } from "framer"

export function Titlebar(props) {
    return (
        <Frame name="Title Bar" height={50} {...props} width="100%">
            <Frame
                name="Close Button"
                backgroundColor="white"
                size={28}
                borderRadius="50%"
                center="y"
                left={8}
            >
                ✕
            </Frame>
        </Frame>
    )
}
