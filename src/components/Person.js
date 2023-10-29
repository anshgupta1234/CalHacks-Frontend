import React from "react";
import Avatar from '@mui/material/Avatar';

export function Person({image_path, name}){
    return (
        <div className="personParent">
            <Avatar
                className="person"
                src={image_path}
                alt={name}
                size={100}
            />
            <text className="personName">{name}</text>
        </div>
    );
}