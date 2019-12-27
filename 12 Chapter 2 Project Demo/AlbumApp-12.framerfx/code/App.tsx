import * as React from "react"
import {
    Frame,
    FrameProps,
    addPropertyControls,
    ControlType,
    AnimatePresence,
} from "framer"

import { AlbumList } from "./AlbumList"
import { NavigationBar } from "./NavigationBar"
import { Settings } from "./Settings"
import { Dimscreen } from "./Dimscreen"

type Props = Partial<FrameProps> & {}

export function App(props: Props) {
    const { ...rest } = props

    const [settingsVisible, setSettingsVisible] = React.useState(false)
    const [showRatings, setShowRatings] = React.useState(true)
    const [showYear, setShowYear] = React.useState(true)

    const showSettings = () => {
        setSettingsVisible(true)
    }

    const onDimscreenTap = () => {
        setSettingsVisible(false)
    }

    const handleShowRatingsTap = () => {
        setShowRatings(!showRatings)
    }

    const handleShowYearTap = () => {
        setShowYear(!showYear)
    }

    return (
        <Frame {...rest} width="100%" height="100%" background="#F7F2FD">
            <AlbumList
                showRatings={showRatings}
                showYear={showYear}
                width="100%"
                top={96}
                bottom={0}
            />
            <NavigationBar onHamburgerTap={showSettings} />
            <AnimatePresence>
                {settingsVisible && (
                    <Dimscreen key="Dimscreen" onTap={onDimscreenTap} />
                )}
                {settingsVisible && (
                    <Settings
                        key="Settings"
                        showRatings={showRatings}
                        showYear={showYear}
                        onShowRatingsTap={handleShowRatingsTap}
                        onShowYearTap={handleShowYearTap}
                    />
                )}
            </AnimatePresence>
        </Frame>
    )
}

App.defaultProps = {
    width: 375,
    height: 812,
}
