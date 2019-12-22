import * as React from "react"
import { Frame } from "framer"

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
            <Frame
                name="Title Bar"
                width="100%"
                height={50}
                backgroundColor={props.titlebarColor}
            >
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
        </Frame>
    )
}
