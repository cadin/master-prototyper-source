import * as React from "react"
import {
    Frame,
    FrameProps,
    addPropertyControls,
    ControlType,
    Stack,
} from "framer"

import styled from "styled-components"
import { Switch } from "./Switch"

type Props = Partial<FrameProps> & {
    onShowRatingsTap: any
    onShowYearTap: any
    showRatings: boolean
    showYear: boolean
}

export function Settings(props: Props) {
    const {
        showRatings,
        showYear,
        onShowRatingsTap,
        onShowYearTap,
        ...rest
    } = props

    return (
        <Frame
            width="100%"
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ y: 300 }}
            height={300}
            bottom={0}
            background="#B06BFF"
            transition={{ duration: 0.18 }}
            borderRadius="16px 16px 0 0 "
            onTap={() => {}}
            style={{ zIndex: 0 }}
            {...rest}
        >
            <Frame
                right={0}
                left={24}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                height={72}
                background="none"
            >
                <TitleLabel>Settings</TitleLabel>
            </Frame>
            <Stack top={96} left={24} right={16} alignment="start" gap={16}>
                <Frame height={32} width="100%" background="none">
                    <OptionLabel>Show Ratings</OptionLabel>
                    <Switch
                        isOn={showRatings}
                        right={0}
                        center="y"
                        onTap={onShowRatingsTap}
                    />
                </Frame>

                <Frame height={32} width="100%" background="none">
                    <OptionLabel>Show Year</OptionLabel>
                    <Switch
                        isOn={showYear}
                        right={0}
                        center="y"
                        onTap={onShowYearTap}
                    />
                </Frame>
            </Stack>
        </Frame>
    )
}

const TitleLabel = styled.h1`
    font-size: 32px;
    font-weight: 800;
    color: #fff;
    position: absolute;
    bottom: 8px;
    margin: 0;
`

const OptionLabel = styled.h3`
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    line-height: 32px;
    margin: 0;
`
