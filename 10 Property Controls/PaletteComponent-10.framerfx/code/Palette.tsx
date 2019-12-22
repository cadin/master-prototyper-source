import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import { Titlebar } from "./Titlebar"

export function Palette(props) {
    return (
        <Frame
            name="Palette Container"
            backgroundColor={props.backgroundColor}
            width={props.width}
            height={props.height}
            borderRadius={10}
            drag={true}
            overflow="hidden"
            shadow="1px 1px 5px rgba(0,0,0,0.2)"
            rotate={props.rotate}
            border={props.border}
        >
            <Titlebar backgroundColor="#ddd" title={props.title} />
        </Frame>
    )
}

addPropertyControls(Palette, {
    backgroundColor: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#FFF",
    },

    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "Palette",
    },
})
