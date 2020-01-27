import * as React from "react"
import { Frame, Stack } from "framer"

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
                    <Frame height={18} width="100%" />
                    <Frame height={18} width={100} />
                    <Frame height={18} width={150} />
                    <Frame height={18} width={50} />
                </Stack>
            </Stack>
        </Frame>
    )
}
