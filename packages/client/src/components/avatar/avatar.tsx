import React from "react";

import './avatar.scss';
import logo from './../../assets/images/logo-round-shadow.png';
import editIcon from './../../assets/images/Edit.svg';

export const Avatar: React.FC = (): JSX.Element => {
    return (
        <div className="avatar">
            <div className="avatar-image">
                <img src={logo} alt="" />
            </div>
            <div className="avatar-edit">
                <img src={editIcon} alt="" />
            </div>
        </div>
    )
}