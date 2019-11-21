import React from 'react';

import { Button, Card } from 'react-bootstrap';

import './cardListItem.styles.css';

const CardListItem = ({ card, onSelectCard, onDeleteCard }) => {
return(
    <Card>
    <Card.Img variant="top" src={ card.imageUrl } />
    <Card.Header>
        <Card.Title className="pt-2">{ card.name }</Card.Title>
    </Card.Header>    
    <Card.Body>
      <Card.Text>
            {card.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <div className='buttons'>
       
            <Button onClick={ onSelectCard } variant="primary">Edit</Button>
            <Button onClick={ onDeleteCard } variant="danger" className="ml-2">Delete</Button>
        </div>
    </Card.Footer>
  </Card>
);
}

export default CardListItem;