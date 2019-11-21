import React from 'react';
import { connect } from 'react-redux';

import { CardColumns, Button } from 'react-bootstrap';
import CardListItem from '../cardListItem/cardListItem.component';
import Aux from '../../hoc/auxiliary/auxiliary.component';

import { selectCard, deleteCard, orderByName, orderById } from '../../redux/cards/cards.actions';
import { toggleModal } from '../../redux/modal/modal.actions';

const CardList = ( props ) => {

        const { cards, length } = props.cards;
        const { selectCard, showModal, deleteCard, orderByName, orderById } = props;
     
        let cardsToRender = cards.map( (cardItem) => (
                    
            <CardListItem key= { cardItem.id } 
                card= { cardItem } 
                onSelectCard = { () => {
                    selectCard( cardItem );
                    showModal();
                    
                }}
                onDeleteCard = { () => deleteCard( cardItem.id ) } 
            />
            ));
        if ( length === 0 ) {
            console.log(length);
            cardsToRender = <span>No Cards to Show!</span>;
        }

    return( 
        <Aux>
        <Button className="ml-2" variant="secondary" onClick={ () => orderByName() }>Order by Name</Button>
        <Button className="ml-2" variant="secondary" onClick={ () => orderById() }>Order by ID</Button>
        <CardColumns className="mt-5">
            { cardsToRender }

        </CardColumns>
        </Aux>
    )
    

}


const mapDispatchToProps = dispatch => {
    return {
        showModal: () => dispatch( toggleModal() ),
        selectCard: (cardItem) => dispatch( selectCard(cardItem) ),
        deleteCard: ( id ) => dispatch( deleteCard(id) ),
        orderByName: () => dispatch( orderByName() ),
        orderById: () => dispatch( orderById() )
    };
};

export default connect(null, mapDispatchToProps)(CardList);