import * as React from "react"
import { Frame } from "framer"

import { NavigationBar } from "./NavigationBar"
import { AlbumList } from "./AlbumList"

import { Settings } from "./Settings"

export function App(props) {
    return (
        <Frame background="#F4EDFD" size="100%">
            <NavigationBar width="100%" />
            <AlbumList width="100%" top={96} bottom={0} />

            <Frame background="#20003D" size="100%" opacity={0.5} />

            <Settings />
        </Frame>
    )
}

App.defaultProps = {
    width: 375,
    height: 812,
}
