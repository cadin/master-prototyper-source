import * as React from "react"
import { Frame, AnimatePresence } from "framer"

import { NavigationBar } from "./NavigationBar"
import { AlbumList } from "./AlbumList"

import { Settings } from "./Settings"

export function App(props) {
    const [settingsVisible, setSettingsVisible] = React.useState(false)
    const [showRatings, setShowRatings] = React.useState(true)
    const [showYear, setShowYear] = React.useState(true)

    const handleHamburgerTap = () => {
        setSettingsVisible(true)
    }

    const handleDimScreenTap = () => {
        setSettingsVisible(false)
    }

    const handleShowRatingsTap = () => {
        setShowRatings(!showRatings)
    }

    const handleShowYearTap = () => {
        setShowYear(!showYear)
    }

    return (
        <Frame background="#F4EDFD" size="100%">
            <NavigationBar
                width="100%"
                onHamburgerTapped={handleHamburgerTap}
            />
            <AlbumList
                width="100%"
                top={96}
                bottom={0}
                showRatings={showRatings}
                showYear={showYear}
            />

            <AnimatePresence>
                {settingsVisible ? (
                    <Frame
                        key="DimScreen"
                        background="#20003D"
                        size="100%"
                        opacity={0.5}
                        onTap={handleDimScreenTap}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                ) : null}
                {settingsVisible ? (
                    <Settings
                        key="Settings"
                        initial={{ y: 300 }}
                        animate={{ y: 0 }}
                        exit={{ y: 300 }}
                        transition={{ duration: 0.2 }}
                        showRatings={showRatings}
                        showYear={showYear}
                        onShowRatingsTapped={handleShowRatingsTap}
                        onShowYearTapped={handleShowYearTap}
                    />
                ) : null}
            </AnimatePresence>
        </Frame>
    )
}

App.defaultProps = {
    width: 375,
    height: 812,
}
