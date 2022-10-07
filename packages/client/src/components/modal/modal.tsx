import { ReactNode } from 'react';
import closeImg from './../../assets/images/close.svg';
import './modal.scss';
interface IMofal {
    children: ReactNode;
    close: () => void;
}

export const Modal: React.FC<IMofal> = ({ children, close }: IMofal): JSX.Element => {
    return (
        <div className="modal">
            <div className="modal-mask"></div>
            <div className="modal-view">
                <img className="modal-view-close" onClick={close} src={closeImg} alt="" />
                {children}
            </div>
        </div>
    )
}
