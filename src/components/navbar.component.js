import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-5">
						<h2>Contacts</h2>
					</div>
					<div className="col-sm-7">
                        <Link to="/create" className="btn btn-primary"><i className="material-icons">&#xE147;</i> <span>Add New Contact</span></Link>
					</div>
                </div>
            </div>
        );
    }
}