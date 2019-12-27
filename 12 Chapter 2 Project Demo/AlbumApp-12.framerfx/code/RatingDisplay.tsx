import * as React from "react"
import {
    Frame,
    FrameProps,
    addPropertyControls,
    ControlType,
    Stack,
} from "framer"

import { StarFilled, StarEmpty } from "./canvas"

type Props = Partial<FrameProps> & {
    rating: number
}

export function RatingDisplay(props: Props) {
    const { rating, ...rest } = props

    let stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(i < rating ? <StarFilled key={i} /> : <StarEmpty key={i} />)
    }

    return (
        <Frame {...rest} width="100%" background="none" height={24}>
            <Stack gap={4} direction="horizontal" height="100%">
                {stars}
            </Stack>
        </Frame>
    )
}
