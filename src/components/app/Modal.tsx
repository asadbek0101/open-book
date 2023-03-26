import "./assets/modal.scss"
import React, { ReactNode } from "react";

interface Props{
    readonly show?: boolean;
    readonly children?: ReactNode;
    readonly modalClassName?: string;
    readonly childrenclassName?: string;
    readonly width?: string;
    readonly height?: string;
    readonly onClose: () => void;
}

export default function Modal({ show, onClose, children, modalClassName,childrenclassName, width, height }: Props){

        window.onclick = function(event: any) {
            if(event.target.matches('.modal-container')){
                onClose();
            }
        }

      
    
    return(
        <>
            {show && (
                <div className={`modal-container ${modalClassName}`}>
                    <div id="modal-children" className={`children ${childrenclassName}`} style={{ width: width, height: height}}>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}