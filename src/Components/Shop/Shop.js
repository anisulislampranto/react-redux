import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../redux/actions/cartActions';

const Shop = (props) => {
    console.log(props);
    const {products, addToCart} = props;
    
    return (
        <div>
            <h1>Shop</h1>
            {
                products.map(pd => <Product product={pd} key={pd.id} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart,   
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connect(mapDispatchToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);