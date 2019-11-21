export const addCard = ( cards, cardItemToAdd ) => {
    return cards.concat(cardItemToAdd);
       
};

export const orderByName = ( cards ) => {
    const orderedCards = cards
        .sort( (a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 

        console.log( orderedCards );
    return orderedCards;
    
};

export const orderById = ( cards ) => {
    const orderedCards = cards
        .sort( (a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 

        console.log( orderedCards );
    return orderedCards;
    
};

export const editCard = ( cards, cardToEdit ) => {
    const existingCards = cards
        .find( cardItem => cardItem.id === cardToEdit.id );
    console.log(existingCards)
    if ( existingCards ) {
        return cards
            .map( cardItem => cardItem.id === cardToEdit.id 
                ? {...cardToEdit}
                : cardItem 
            );
    }

    return cards
};

