import React from 'react';

const BugIcon = ( props ) => {
    let color = props.color;
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="716 0 111 125">
        <defs>
            <clipPath id="b">
                <rect x="716" width="111" height="125"/>
            </clipPath>
        </defs>
        <g id="bugsvg" clipPath="url(#b)">
            <path
                d="M114.683,37.588H95.244A41.4,41.4,0,0,0,82.654,24.03L93.93,12.754,84.176,3,69.164,18.011a41.959,41.959,0,0,0-9.823-1.176,40.939,40.939,0,0,0-9.754,1.176L34.507,3l-9.754,9.754L35.96,24.03A41.936,41.936,0,0,0,23.439,37.588H4V51.424H18.458a45.918,45.918,0,0,0-.623,6.918v6.918H4V79.094H17.835v6.918a45.918,45.918,0,0,0,.623,6.918H4v13.835H23.439a41.432,41.432,0,0,0,71.805,0h19.439V92.93H100.225a45.919,45.919,0,0,0,.623-6.918V79.094h13.835V65.259H100.847V58.341a45.92,45.92,0,0,0-.623-6.918h14.458ZM73.177,92.93H45.506V79.094H73.177Zm0-27.671H45.506V51.424H73.177Z"
                transform="translate(711.984 -2.518)" fill={props.color}/>
        </g>
    </svg>
};

export default BugIcon