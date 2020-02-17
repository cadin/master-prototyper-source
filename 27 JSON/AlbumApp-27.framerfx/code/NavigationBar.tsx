import * as React from "react"
import { Frame } from "framer"

export function NavigationBar(props) {
    return (
        <Frame
            background="#6700C7"
            height={96}
            width="100%"
            shadow="0 1px 5px rgba(0,0,0,0.3)"
            style={{ zIndex: 0 }}
        >
            <h1
                style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#fff",
                    position: "absolute",
                    bottom: 8,
                    left: 24,
                    margin: 0,
                }}
            >
                10 Best Albums
            </h1>

            <HamburgerIcon
                right={16}
                bottom={16}
                onTap={props.onHamburgerTapped}
            />
        </Frame>
    )
}

function HamburgerIcon(props) {
    return (
        <Frame width={24} height={17} background="none" {...props}>
            <svg viewBox="0 0 24 17">
                <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <g
                        id="Artboard"
                        transform="translate(-8.000000, -11.000000)"
                        fill="#FFFFFF"
                    >
                        <g
                            id="hamburgerIcon"
                            transform="translate(8.000000, 11.000000)"
                        >
                            <rect
                                id="hamburger-3"
                                x="0"
                                y="0"
                                width="24"
                                height="1.5"
                                rx="0.75"
                            ></rect>
                            <rect
                                id="hamburger-2"
                                x="0"
                                y="7.5"
                                width="24"
                                height="1.5"
                                rx="0.75"
                            ></rect>
                            <rect
                                id="hamburger-1"
                                x="0"
                                y="15"
                                width="24"
                                height="1.5"
                                rx="0.75"
                            ></rect>
                        </g>
                    </g>
                </g>
            </svg>
        </Frame>
    )
}
