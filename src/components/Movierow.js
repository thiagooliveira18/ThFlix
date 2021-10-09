import React, { useState } from "react";
import './Movierow.css';

import ArrowLeft from '../assets/arrow-left.png';
import ArrowRight from '../assets/arrow-right.png';
//importação da biblioteca Material-ui
//import { AddIcon } from '@material-ui/icons-material';
//import AddIcon from '@mui/icons-material/Add';


export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 3);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 3);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <img src={ArrowLeft} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <img src={ArrowRight} />
            </div>

            <div className="movieRow--listarea">

                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}