import React from "react"

export default function App() {
    return (
        <div>
            <h1>Best Albums of All Time</h1>

            <AlbumInfo
                image="astralWeeks.jpg"
                name="Astral Weeks"
                artist="Van Morrison"
                date="1968"
                rating="10"
            />

            <AlbumInfo
                image="timeOut.jpg"
                name="Time Out"
                artist="Dave Brubeck"
                date="1959"
                rating="9.9"
            />

            <AlbumInfo
                image="graceland.jpg"
                name="Graceland"
                artist="Paul Simon"
                date="1986"
                rating="9.8"
            />

            <AlbumInfo
                image="cypressHill.jpg"
                name="Cypress Hill"
                artist="Cypress Hill"
                date="1991"
                rating="9.7"
            />
        </div>
    )
}

function AlbumInfo({ image, name, artist, date, rating }) {
    return (
        <div
            style={{
                fontFamily: "Avenir",
                border: "1px solid #DDD",
                borderRadius: 10,
                padding: 24,
                boxShadow: "0 0 5 rgba(0,0,0,0.1)",
                margin: "10px 0",
                height: 100,
            }}
        >
            <img
                src={image}
                width="100"
                style={{
                    position: "absolute",
                    borderRadius: 4,
                    border: "1 solid #DDD",
                }}
            />
            <div style={{ position: "relative", left: 120, top: 0 }}>
                <h2
                    style={{
                        margin: 0,
                        fontWeight: "lighter",
                        fontSize: 28,
                        padding: 0,
                    }}
                >
                    {name}
                </h2>
                <h3
                    style={{
                        margin: 0,
                        fontWeight: "normal",
                        fontSize: 15,
                        color: "#666",
                    }}
                >
                    by {artist}
                </h3>
                <p
                    style={{
                        display: "inline-block",
                        fontSize: 12,
                        fontWeight: "bold",
                        backgroundColor: "#EEE",
                        padding: 4,
                        borderRadius: 6,
                        width: 70,
                        textAlign: "center",
                        marginTop: 20,
                        verticalAlign: "center",
                    }}
                >
                    <span
                        style={{
                            textTransform: "uppercase",
                            color: "#999",
                            fontWeight: "bold",
                            fontSize: 8,
                        }}
                    >
                        Year:
                    </span>
                    {date}
                </p>
                <p
                    style={{
                        display: "inline-block",
                        fontSize: 12,
                        fontWeight: "bold",
                        backgroundColor: "#EEE",
                        padding: 4,
                        borderRadius: 6,
                        width: 90,
                        textAlign: "center",
                        marginLeft: 10,
                    }}
                >
                    <span
                        style={{
                            textTransform: "uppercase",
                            color: "#999",
                            fontWeight: "bold",
                            fontSize: 8,
                        }}
                    >
                        Rating:
                    </span>
                    <span>{rating}</span> / 10
                </p>
            </div>
        </div>
    )
}
