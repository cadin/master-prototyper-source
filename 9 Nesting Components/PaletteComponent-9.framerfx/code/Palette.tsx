import * as React from "react"
import { Frame } from "framer"

import { Titlebar } from "./Titlebar"

export function Palette(props) {
    return (
        <Frame
            name="Palette Container"
            backgroundColor="white"
            width={props.width}
            height={props.height}
            borderRadius={10}
            drag={true}
            overflow="hidden"
            shadow="1px 1px 5px rgba(0,0,0,0.2)"
            rotate={props.rotate}
            border={props.border}
        >
            <Titlebar
                backgroundColor="#666"
                height={80}
                border="2px solid red"
            />
        </Frame>
    )
}
