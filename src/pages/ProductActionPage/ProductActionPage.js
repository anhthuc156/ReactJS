import React from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';

class ProductActionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: ''
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'GET', null)
                .then(res => {
                    var { data } = res;
                    this.setState({
                        id: data.id,
                        name: data.name,
                        price: data.price,
                        status: data.status
                    })
                })
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var { id, name, price, status } = this.state;
        var { history } = this.props;
        if (id) {
            callApi(`products/${id}`, 'PUT',
                {
                    name,
                    price,
                    status
                }
            )
            .then(res => {
                history.goBack();
            })
        } else {
            callApi('products', 'POST',
                {
                    name,
                    price,
                    status
                }
            )
            .then(res => {
                history.goBack();
            })
        }

    }
    render() {
        var { name, price, status } = this.state;
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" name="price" value={price} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="status" checked={status} value={status} onChange={this.handleChange} />
                            Avaiable
                    </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to='/product-list' className="btn btn-danger">Go back</Link>
                </form>
            </div>
        );
    }
}





export default ProductActionPage;
