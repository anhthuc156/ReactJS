import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';
import ActionCreators from '../../actions/ActionCreators';

class ProductListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }
    showProducts = (products) => {
        var result = [];
        if (products.length > 0) {
            result = products.map((product, index) =>
                <ProductItem key={index} handleDelete={this.handleDelete}
                    product={product}
                    index={index}
                />
            )
        }
        return result
    }
    handleDelete = (id) => {
        var { products } = this.state;
        callApi(`products/${id}`, 'DELETE', null)
            .then(res => {
                if (res.status === 200) {
                    products = products.filter(product => {
                        return product.id !== id;
                    })
                    this.setState({
                        products
                    })
                }
                
            })
    }
    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info">Add Product</Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }


}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(ActionCreators.fetchProductsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
