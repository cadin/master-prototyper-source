import * as React from "react"
import { Frame, Stack } from "framer"

import { Switch } from "./Switch"

export function Settings(props) {
    return (
        <Frame
            background="#B06BFF"
            width="100%"
            height={300}
            borderRadius={16}
            bottom={0}
            style={{ zIndex: 0 }}
            {...props}
        >
            <Frame
                style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                height={72}
                left={24}
                right={0}
                background="none"
            >
                <h1
                    style={{
                        fontSize: 32,
                        fontWeight: 800,
                        color: "#FFF",
                        margin: 0,
                        position: "absolute",
                        bottom: 8,
                    }}
                >
                    Settings
                </h1>
            </Frame>

            <Stack top={96} left={24} right={16} alignment="start" gap={16}>
                <Frame
                    name="Ratings Control"
                    height={32}
                    width="100%"
                    background="none"
                >
                    <h3
                        style={{
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#FFF",
                            lineHeight: "32px",
                            margin: 0,
                        }}
                    >
                        Show Ratings
                    </h3>

                    <Switch right={0} center="y" />
                </Frame>

                <Frame
                    name="Year Control"
                    height={32}
                    width="100%"
                    background="none"
                >
                    <h3
                        style={{
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#FFF",
                            lineHeight: "32px",
                            margin: 0,
                        }}
                    >
                        Show Year
                    </h3>

                    <Switch right={0} center="y" />
                </Frame>
            </Stack>
        </Frame>
    )
}
