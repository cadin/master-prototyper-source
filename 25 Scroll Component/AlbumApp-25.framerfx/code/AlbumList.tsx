import * as React from "react"
import { Scroll, Stack } from "framer"

import { Album } from "./Album"

export function AlbumList(props) {
    return (
        <Scroll {...props}>
            <Stack gap={8} width="100%" height="auto" padding={8}>
                <Album
                    title="Astral Weeks"
                    artist="Van Morrison"
                    cover="design/albums/AstralWeeks.jpg"
                    year="1968"
                    rating={5}
                />

                <Album
                    title="Time Out"
                    artist="Dave Brubeck"
                    cover="design/albums/TimeOut.jpg"
                    year="1959"
                    rating={3}
                />
                <Album
                    title="Siamese Dream"
                    artist="Smashing Pumpkins"
                    cover="/design/albums/siameseDream.jpg"
                    year={1993}
                    rating={4}
                />
                <Album
                    title="Graceland"
                    artist="Paul Simon"
                    cover="/design/albums/graceland.jpg"
                    year={1986}
                    rating={5}
                />
                <Album
                    title="Cypress Hill"
                    artist="Cypress Hill"
                    cover="/design/albums/cypressHill.jpg"
                    year={1991}
                    rating={3}
                />
                <Album
                    title="Nevermind"
                    artist="Nirvana"
                    cover="/design/albums/nevermind.jpg"
                    year={1991}
                    rating={4}
                />
                <Album
                    title="The Dark Side of the Moon"
                    artist="Pink Floyd"
                    cover="/design/albums/theDarkSideOfTheMoon.jpg"
                    year={1973}
                    rating={3}
                />
                <Album
                    title="Evil Empire"
                    artist="Rage Against the Machine"
                    cover="/design/albums/evilEmpire.jpg"
                    year={1996}
                    rating={4}
                />
                <Album
                    title="Revolver"
                    artist="The Beatles"
                    rating={3}
                    year={1966}
                    cover="/design/albums/revolver.jpg"
                />
                <Album
                    title="The Chronic"
                    artist="Dr. Dre"
                    cover="/design/albums/theChronic.jpg"
                    year={1992}
                    rating={4}
                />
            </Stack>
        </Scroll>
    )
}
