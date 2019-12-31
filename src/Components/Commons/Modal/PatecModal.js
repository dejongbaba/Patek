import React, {useState} from 'react';
import {Modal} from "react-bootstrap";

const PatecModal = ({children,show,closeModal,modalHeading}) => {
    return (
        <>
            <Modal show={show} size={'md'} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalHeading}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={'position-relative'}>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PatecModal;