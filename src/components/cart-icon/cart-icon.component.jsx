import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCardHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount }from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCardHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCardHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' >  {itemCount} </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);