import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ContactsList extends Component {
    constructor(props) {
        super(props);

        this.deleteContact = this.deleteContact.bind(this);

        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        contacts: res.data
                    })
                }
            })
    }

    deleteContact(id) {
        axios.delete('http://localhost:5000/' + id)
            .then(res => console.log(res.data));
        this.setState({
            contacts: this.state.contacts.filter(el => el._id !== id)
        })
    }

    
    render() {
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>						
						<th>Phone</th>
						<th>Email</th>
                        <th>Title</th>
						<th>Company</th>
						<th>Labels</th>
						<th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.contacts.map((contact) => {
                            return <tr key={contact._id}>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>{contact.title}</td>
                                <td>{contact.company}</td>
                                <td>{contact.labels}</td>
                                <td className="actions">
                                    <a title="Edit" href={'http://localhost:3000/edit/' + contact._id}><i className="material-icons">&#xE8B8;</i></a>
                                    <button title="Delete" className="delete-button" onClick={() => this.deleteContact(contact._id) }><i className="material-icons">&#xE5C9;</i></button>
                                </td>       
                            </tr>
                        })
                    }
                </tbody>
            </table>
        )
    }
}