import React from 'react';

const TimeOffIcon = ( props ) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125">
        <title>Time Off Request</title>
        <defs>
            <clipPath id="b">
                <rect width="125" height="125"/>
            </clipPath>
        </defs>
        <g id="timeoffsvg" clipPath="url(#b)">
            <path
                d="M99.6,21.09l-8.036,8.036a50.983,50.983,0,0,0-59.818-2.773l8.262,8.262A39.553,39.553,0,0,1,94.051,88.661l8.206,8.206a50.678,50.678,0,0,0-2.716-59.7l8.036-8.036L99.6,21.09ZM76.734,1H42.779V12.318H76.734ZM54.1,48.764,65.416,60.082V40.614H54.1v8.149ZM8.937,17.978,1.75,25.165,17.313,40.784a50.911,50.911,0,0,0,42.444,79.059,50.721,50.721,0,0,0,28.183-8.489L102.088,125.5l7.187-7.187L65.642,74.683Zm50.82,90.547A39.61,39.61,0,0,1,25.519,48.99l54.1,54.1A38.859,38.859,0,0,1,59.757,108.525Z"
                transform="translate(6.339 -1)" fill={props.color}/>
        </g>
    </svg>
};

export default TimeOffIcon;
