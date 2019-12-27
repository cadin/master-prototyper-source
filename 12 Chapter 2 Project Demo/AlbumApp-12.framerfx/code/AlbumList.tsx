import * as React from "react"
import {
    Frame,
    FrameProps,
    addPropertyControls,
    ControlType,
    Scroll,
    Stack,
} from "framer"
import { url } from "framer/resource"
import { Album } from "./Album"
import * as albumData from "./albumData.json"

type Props = Partial<FrameProps> & {
    showRatings: boolean
    showYear: boolean
}

export function AlbumList(props: Props) {
    const { showRatings, showYear, ...rest } = props

    const albums = albumData.map(album => {
        return (
            <Album
                {...album}
                cover={url(album.cover)}
                showRatings={showRatings}
                showYear={showYear}
            />
        )
    })

    return (
        <Frame {...rest} background="none">
            <Scroll width="100%" height="100%" overflow="hidden">
                <Stack
                    gap={8}
                    width="100%"
                    direction="vertical"
                    distribution="start"
                    height="auto"
                    padding={8}
                >
                    {albums}

                    {/* <Album
                        title="Astral Weeks"
                        artist="Van Morrison"
                        cover={url("/design/albums/astralWeeks.jpg")}
                        year={1968}
                        rating={5}
                        showRatings={showRatings}
                        showYear={showYear}
                    />

                    <Album
                        title="Time Out"
                        artist="Dave Brubeck"
                        cover="/design/albums/timeOut.jpg"
                        year={1959}
                        rating={3}
                        showRatings={showRatings}
                        showYear={showYear}
                    />
                    <Album
                        title="Siamese Dream"
                        artist="Smashing Pumpkins"
                        cover="/design/albums/siameseDream.jpg"
                        year={1993}
                        rating={4}
                        showRatings={showRatings}
                        showYear={showYear}
                    />
                    <Album
                        title="Graceland"
                        artist="Paul Simon"
                        cover="/design/albums/graceland.jpg"
                        year={1986}
                        rating={5}
                        showRatings={showRatings}
                        showYear={showYear}
                    />
                    <Album
                        title="Cypress Hill"
                        artist="Cypress Hill"
                        cover="/design/albums/cypressHill.jpg"
                        year={1991}
                        rating={3}
                        showRatings={showRatings}
                        showYear={showYear}
                    />
                    <Album
                        title="Nevermind"
                        artist="Nirvana"
                        cover="/design/albums/nevermind.jpg"
                        year={1991}
                        rating={4}
                        showRatings={showRatings}
                        showYear={showYear}
                    />
                    <Album
                        title="The Dark Side of the Moon"
                        artist="Pink Floyd"
                        cover="/design/albums/theDarkSideOfTheMoon.jpg"
                        year={1973}
                        rating={3}
                        showRatings={showRatings}
                        showYear={showYear}
                    />
                    <Album
                        title="Evil Empire"
                        artist="Rage Against the Machine"
                        cover="/design/albums/evilEmpire.jpg"
                        year={1996}
                        rating={4}
                        showRatings={showRatings}
                        showYear={showYear}
                    />
                    <Album
                        title="Revolver"
                        artist="The Beatles"
                        rating={3}
                        year={1966}
                        cover="/design/albums/revolver.jpg"
                        showRatings={showRatings}
                        showYear={showYear}
                    />
                    <Album
                        title="The Chronic"
                        artist="Dr. Dre"
                        cover="/design/albums/theChronic.jpg"
                        year={1992}
                        rating={4}
                        showRatings={showRatings}
                        showYear={showYear}
                    /> */}
                </Stack>
            </Scroll>
        </Frame>
    )
}
