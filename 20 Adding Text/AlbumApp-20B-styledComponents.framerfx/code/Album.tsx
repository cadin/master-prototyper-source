import * as React from "react"
import { Frame, Stack } from "framer"

// Here's an example of using styled-components to set up the text labels
// look at how nice and clean that JSX is 😳

// Before you import styled-components, you'll need to install it (see styled-components.com)
// You install it using yarn, which you'll also need to install (see yarnpkg.com)
// Aaaand you install yarn through Node.js, which you'll also need to install (see nodejs.org)
// once all that's done, import it:
import styled from "styled-components"

// And then you can define custom text components with REAL CSS RULES
// using this styled-components syntax:
const TitleLabel = styled.h1`
    font-size: 23px;
    font-weight: 400;
    color: #333;
`
const ArtistLabel = styled.h2`
    font-size: 15px;
    font-weight: 600;
    color: #666;
`
const YearLabel = styled.h3`
    font-size: 12px;
    font-weight: 600;
    color: #999;
`

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
                />

                <Stack
                    alignment="start"
                    gap={4}
                    height="auto"
                    style={{ flex: 1 }}
                >
                    <TitleLabel>{props.title}</TitleLabel>
                    <ArtistLabel>by {props.artist}</ArtistLabel>
                    <Frame height={18} width={150} />
                    <YearLabel>{props.year}</YearLabel>
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
