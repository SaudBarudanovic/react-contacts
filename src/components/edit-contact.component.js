import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditContact extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeLabels = this.onChangeLabels.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            phone: 0,
            email: '',
            title: '',
            company: '',
            labels: '',
            contacts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    phone: res.data.phone,
                    email: res.data.email,
                    title: res.data.title,
                    company: res.data.company,
                    labels: res.data.labels,
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }    

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }   

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }   

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }   

    onChangeCompany(e) {
        this.setState({
            company: e.target.value
        })
    }   

    onChangeLabels(e) {
        this.setState({
            labels: e.target.value
        })
    }   

    onSubmit(e) {
        e.preventDefault();

        const contact = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            title: this.state.title,
            company: this.state.company,
            labels: this.state.labels
        }

        axios.post('http://localhost:5000/update/'+this.props.match.params.id, contact)
            .then(res => console.log(res.data));

        window.location = '/'
    }
    
    render() {
        return (
            <div>
                <h3>Create new contact</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" required className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>

                    <div className="form-group">
                        <label>Phone: </label>
                        <input type="text" required className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} />
                    </div>

                    <div className="form-group">
                        <label>Company: </label>
                        <input type="text" className="form-control" value={this.state.company} onChange={this.onChangeCompany} />
                    </div>

                    <div className="form-group">
                        <label>Labels: </label>
                        <input type="text" className="form-control" value={this.state.labels} onChange={this.onChangeLabels} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-icon"><i className="material-icons">&#xE147;</i> <span>Save contact</span></button>
                    </div>
                </form>

                
                
            </div>
        )
    }
}