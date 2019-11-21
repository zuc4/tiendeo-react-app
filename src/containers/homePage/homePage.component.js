import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from 'react-bootstrap';
import Modal from '../../components/modal/modal.component';
import CardList from '../../components/cardList/cardList.component';
import FormComponent from '../../components/cardForm/cardForm.component';
import Aux from '../../hoc/auxiliary/auxiliary.component';

import { toggleModal } from '../../redux/modal/modal.actions';
import { getData } from '../../redux/cards/cards.actions';
import { selectCardsData } from '../../redux/cards/cards.selector';
import { selectModalVisibility } from '../../redux/modal/modal.selector';

class HomePage extends Component {

    unsuscribeFromCards = null;
    
    componentDidMount(){
        this.unsuscribeFromCards= this.props.getData();

    }

    componentWillUnmount(){
        this.unsuscribeFromCards();
    }

    render(){
        return(
            <Aux>
                <h1 className="mb-4">Tiendeo React App</h1>
                <Button variant="primary" 
                    onClick={this.props.showModal}>
                    Add
                </Button>
                <CardList cards={ this.props.cards }/>
                <Modal show={this.props.hidden}
                    onClose={this.props.showModal}>
                    <FormComponent />
                </Modal>
            </Aux>
        )
    };
};

const mapStateToProps = createStructuredSelector({

    cards: selectCardsData,
    hidden: selectModalVisibility
    
});

const mapDispatchToProps = dispatch => {
    return {
        showModal: () => dispatch( toggleModal() ),
        getData: () => dispatch( getData() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);