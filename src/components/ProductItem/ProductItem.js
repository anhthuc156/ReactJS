import React from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends React.Component {
    handleDelete = (id) => {
        if (confirm('Are you sure to delete item?')) { //eslint-disable-line
            this.props.handleDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={product.status ? 'label label-success' : 'label label-warning'}>
                        {product.status ? 'Avaiable' : 'Out of stocks'}
                    </span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-primary">Edit</Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.handleDelete(product.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;
