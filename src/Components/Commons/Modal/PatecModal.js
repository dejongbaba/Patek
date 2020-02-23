import React from 'react';
import {Modal} from "react-bootstrap";
import "./modal.css";

const PatecModal = ({children, show, className, closeModal, header, modalHeading}) => {
    return (
        <>
            <Modal show={show} className={className ? className : ''}
                   size={'md'} onHide={closeModal}>
                {header ?
                    <Modal.Header closeButton>
                        <Modal.Title>{modalHeading}</Modal.Title>
                    </Modal.Header> : null
                }
                <Modal.Body className={'position-relative'}>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PatecModal;