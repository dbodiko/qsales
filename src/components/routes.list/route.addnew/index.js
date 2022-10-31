import './style.css'

import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddNewRoute = ({show, onHide, handleSave}) => {
    const [code, setCode] = useState('')
    const [name, setName] = useState('')

    const onChangeCode = (e) => {
        setCode(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleSave(name, code)
        setCode('')
        setName('')
        onHide()
    };

    return (
        <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Новий маршрут</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <input className="input-style"
                           type="text" id="code"
                           placeholder="Код"
                           value={code}
                           onChange={onChangeCode}/>

                    <input className="input-style"
                           type="text" id="name"
                           placeholder="Назва"
                           value={name}
                           onChange={onChangeName}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Закрити
                    </Button>
                    <Button variant="primary"
                            type="submit"
                            disabled={!code.length || !name.length}
                    >
                        Зберегти
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default AddNewRoute;