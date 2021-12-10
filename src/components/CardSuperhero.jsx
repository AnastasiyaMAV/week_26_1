import {Card, Col, Modal, Button} from 'react-bootstrap';
import { useState } from 'react';

function CardSuperhero(props) {
    let [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <Col>
        <Card style={{ height: '45rem' }}>
            <Card.Img variant="top" src={props.picture} />
            <Card.Body>
                <Card.Title>Вселенная: {props.universe}</Card.Title>
                <Card.Text>
                    <p>Альтер эго: {props.alterEgo}</p>
                    <h4>{props.name}</h4>
                    <p>Род деятельности: {props.occupation}</p>
                    <p>Друзья: {props.friends}</p>
                    <p>Суперсилы: {props.superPowers}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={handleShow}>Подробнее</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{props.info}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Footer>
        </Card>
    </Col>);
}

export default CardSuperhero;