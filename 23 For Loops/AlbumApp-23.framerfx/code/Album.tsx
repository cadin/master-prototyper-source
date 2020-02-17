import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { url } from "framer/resource"

import { RatingDisplay } from "./RatingDisplay"

export const getAssetPath = p => {
    const paths = url(p)

    const urls = paths.split("http")
    const path = "http" + urls.pop()

    let scrubbedPath = path.replace("/preview", "")
    const isFramerWebShare = document.location.href.match(/^.+(\/ui\/run.html)/)
    scrubbedPath = isFramerWebShare ? `../${scrubbedPath}` : scrubbedPath
    const finalPath = scrubbedPath.replace(/%3A/g, ":")
    return finalPath
}

export function Album(props) {
    return (
        <Frame
            background="#FFF"
            borderRadius={8}
            width="100%"
            height="auto"
            border="1px solid #EADBFA"
            {...props}
        >
            <Stack
                direction="horizontal"
                alignment="start"
                width="100%"
                height="auto"
                padding={16}
            >
                <Frame
                    name="Cover Image"
                    size={80}
                    borderRadius={4}
                    border="1px solid #e1e1e1"
                    image={getAssetPath(props.cover)}
                    backgroundColor="#eadbfa"
                />

                <Stack
                    alignment="start"
                    gap={4}
                    height="auto"
                    style={{ flex: 1 }}
                >
                    <h1
                        style={{ fontSize: 23, fontWeight: 400, color: "#333" }}
                    >
                        {props.title}
                    </h1>
                    <h2
                        style={{ fontSize: 15, fontWeight: 600, color: "#666" }}
                    >
                        by {props.artist}
                    </h2>
                    <RatingDisplay rating={props.rating} />
                    <h3
                        style={{ fontSize: 12, fontWeight: 600, color: "#999" }}
                    >
                        {props.year}
                    </h3>
                </Stack>
            </Stack>
        </Frame>
    )
}

Album.defaultProps = {
    title: "Album Name",
    artist: "Artist Name",
    year: "YEAR",
}


// Example property controls for using this component from the canvas:
addPropertyControls(Album, {
    cover: {
        title: "Cover",
        type: ControlType.Image,
    },
    title: {
        title: "Album",
        type: ControlType.String,
        defaultValue: "Album Name",
    },
    artist: {
        title: "Artist",
        type: ControlType.String,
        defaultValue: "Artist Name",
    },
    rating: {
        title: "Rating",
        type: ControlType.Number,
        defaultValue: 0,
        min: 0,
        max: 5,
    },
    year: {
        title: "Year",
        type: ControlType.String,
        defaultValue: "YEAR",
    },
})
