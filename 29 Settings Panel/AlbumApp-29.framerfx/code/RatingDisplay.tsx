import * as React from "react"
import { Stack } from "framer"

import { StarFilled, StarEmpty } from "./canvas"

export function RatingDisplay(props) {
    let stars = []

    // do this 5 times:
    for (let i = 0; i < 5; i++) {
        if (props.rating > i) {
            stars.push(<StarFilled key={i} />)
        } else {
            stars.push(<StarEmpty key={i} />)
        }
    }

    return (
        <Stack height={24} direction="horizontal" gap={4}>
            {stars}
        </Stack>
    )
}
