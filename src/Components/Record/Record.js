import React from 'react';
import EmpLocation from "../Form/Map/Map";
import {Link} from 'react-router-dom';

const Record = (props) => {
    return(
        <li className="col-md-6">
            <div className="card row">
                <div className="card-body col-sm-9 col-12">
                    <h5 className="card-title mb-10">{props.persons.name}</h5>
                    <h6 className="card-subtitle"><strong>Email:</strong> {props.persons.email}</h6>
                    <p className="card-text mb-0"><strong>Address: </strong>{props.persons.address.street}, {props.persons.address.suite}, {props.persons.address.city}, {props.persons.address.zipcode}</p>
                    <div>
                        <strong>Phone: </strong>
                        <a href={`tel:` + props.persons.phone}>{props.persons.phone}</a>
                    </div>
                    <div>
                        <strong>Website: </strong>
                        <a href={props.persons.website} target="_blank">{props.persons.website}</a>
                    </div>
                    <Link to="/edit-record" className="btn btn-primary btn-sm">Edit</Link>
                    <span onClick={props.deleteRec} className="btn btn-danger btn-sm">Delete</span>
                </div>
                <div className="col-sm-3 col-12">
                    <EmpLocation coords={props.persons.address.geo} />
                </div>
            </div>
        </li>
    )
}

export default Record;