import React, { useRef, useState } from "react";
import { Modal, Button } from "../index";

import './avatar.scss';
import logo from './../../assets/images/logo-round-shadow.png';
import editIcon from './../../assets/images/Edit.svg';

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);

    function toggleValue(): void {
        setValue(previousValue => !previousValue);
    }

    return [value, toggleValue];
}

export const Avatar: React.FC = (): JSX.Element => {

    const [value, toggleValue] = useToggle();
    const [name, setValue] = useState<string>();

    const changeFileName = (name: string) => {
        setValue(name);
    }
    const inputRef: any = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event: any) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }
        changeFileName(fileObj.name);

    };

    return (
        <>
            <div className="avatar">
                <div className="avatar-image">
                    <img src={logo} alt="" />
                </div>
                <div onClick={toggleValue} className="avatar-edit">
                    <img src={editIcon} alt="" />
                </div>
            </div>
            {value &&
                <Modal close={toggleValue}>
                    <h1 className="avatar-title">Поменять аватар</h1>
                    <input
                        style={{ display: 'none' }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                    />

                    <Button
                        events={{
                            onClick: handleClick
                        }}

                        classes="button--light mb-28"
                        type='button'
                        text="Выберите файл"
                    />
                    <Button
                        classes="mb-28"
                        text="Сохранить"
                        type="submit"
                    />
                    <p>{name ?? "Файл не выбран"}</p>
                </Modal>
            }

        </>

    )
}