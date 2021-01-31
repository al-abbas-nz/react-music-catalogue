import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

export default function MusicStock() {
    const [data, setData] = useState({}); 
    useEffect(() => {
        Tabletop.init({
            key: process.env.REACT_APP_GOOGLE_DOC_ID,
            simpleSheet: true,
        }).then(function (data) {
            setData(data);
        });
    }, []);
    const music = Array.from(data); 
    console.log(music)
    return (
        <div className='card-container'>
            {music.map((record) => (
                <div className='record-card' key={record.catalogID}>
                    <h1>Artist: {record.artist ? record.artist : record.title}</h1>
                    <h2>Title: {record.title}</h2>
                    <p>{`Stock Level: ${record.stockLevelAR} | Central Warehouse: ${record.stockLevelCW}`}</p>
                    <ul>
                        <li>Release Date: {record.releaseDate}</li>
                        <li>Label: {record.label}</li>
                        <li>Format: {record.itemFormat}</li>
                    </ul>
                </div>
            ))}
            </div>
        )
};
