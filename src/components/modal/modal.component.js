import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { clearSelectedCard } from '../../redux/cards/cards.actions';

import './modal.styles.css';

const Modal = ({ show, children, onClose }) => {
  
    if(!show) {
      return null;
    }

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 100,
      margin: '0 auto',
      padding: 30,
      position: 'fixed',
      display: 'inherit'
    };
   
    return (
      <div className="backdrop" >
        <div className="modal" style={modalStyle}>
          
            <Button 
              className="mb-3 float-right" 
              variant="info" 
              onClick={ () => {
                clearSelectedCard();
                onClose();
                }}>
              
                Close
            </Button>
          
          {children}

        </div>
      </div>
    );
  
}

const mapDispatchToProps = dispatch => {
  return {
    clearSelectedCard: () => dispatch( clearSelectedCard() ) 
  }
}

export default connect(null, mapDispatchToProps)(Modal);
