import * as React from "react"
import { Scroll, Stack } from "framer"

import { Album } from "./Album"

import * as albums from "./albumData.json"

export function AlbumList(props) {
    const albumTags = albums.list.map(album => {
        return <Album {...album} key={album.title} />
    })

    return (
        <Scroll {...props}>
            <Stack gap={8} width="100%" height="auto" padding={8}>
                {albumTags}
            </Stack>
        </Scroll>
    )
}
