import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"

import styled from "styled-components"

type Props = Partial<FrameProps> & {
    onHamburgerTap: Function
}

export function NavigationBar(props: Props) {
    const { onHamburgerTap, ...rest } = props

    return (
        <Frame
            background="#6700C7"
            {...rest}
            width="100%"
            height={96}
            shadow="0 1px 5px rgba(0,0,0,0.3)"
            overflow="visible"
            style={{ zIndex: 0 }}
        >
            <TitleLabel>10 Best Albums</TitleLabel>
            <HamburgerIcon right={16} bottom={16} onTap={onHamburgerTap} />
        </Frame>
    )
}

const TitleLabel = styled.h1`
    font-size: 32px;
    font-weight: 800;
    color: #fff;

    
    position: absolute;
    bottom: 8px;
    left: 24px;
    margin: 0;
`

const HamburgerIcon = props => {
    return (
        <Frame width={24} height={18} background="none" {...props}>
            <svg viewBox="0 0 24 18" version="1.1">
                <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g id="hamburgerIcon" fill="#FFF">
                        <rect
                            id="hamburger-3"
                            x="0"
                            y="0.75"
                            width="24"
                            height="1.5"
                            rx="0.75"
                        ></rect>
                        <rect
                            id="hamburger-2"
                            x="0"
                            y="8.25"
                            width="24"
                            height="1.5"
                            rx="0.75"
                        ></rect>
                        <rect
                            id="hamburger-1"
                            x="0"
                            y="15.75"
                            width="24"
                            height="1.5"
                            rx="0.75"
                        ></rect>
                    </g>
                </g>
            </svg>
        </Frame>
    )
}
