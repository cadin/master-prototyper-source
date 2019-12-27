import * as React from "react"
import {
    Frame,
    FrameProps,
    addPropertyControls,
    ControlType,
    Stack,
} from "framer"
import { RatingDisplay } from "./RatingDisplay"
import styled from "styled-components"

type Props = Partial<FrameProps> & {
    title: string
    artist: string
    rating: number
    year: number
    cover: string
    showRatings: boolean
    showYear: boolean
}

export function Album(props: Props) {
    const {
        title,
        artist,
        rating,
        cover,
        year,
        showRatings,
        showYear,
        ...rest
    } = props

    return (
        <Frame
            width="100%"
            height="auto"
            {...rest}
            background="#FFF"
            borderRadius={8}
            border="1px solid #EADBFA"
        >
            <Stack
                direction="horizontal"
                height="auto"
                position="relative"
                alignment="start"
                style={{ padding: 16 }}
                width="100%"
            >
                <Frame
                    size={80}
                    borderRadius={4}
                    border="1px solid #e1e1e1"
                    image={cover}
                />

                <Stack
                    style={{ flexGrow: 2 }}
                    gap={4}
                    alignment="start"
                    height="auto"
                >
                    <TitleLabel>{title}</TitleLabel>
                    <ArtistLabel>by {artist}</ArtistLabel>

                    {showRatings && <RatingDisplay rating={rating} />}
                    {showYear && <YearLabel>{year}</YearLabel>}
                </Stack>
            </Stack>
        </Frame>
    )
}

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
