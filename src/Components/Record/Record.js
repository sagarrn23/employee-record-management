import React from 'react';
import EmpLocation from "../Form/Map/Map";
import {Link} from 'react-router-dom';

const recordDom = (data) => {    
    return(
        <li className="col-md-6" key={data.id}>
            <div className="card row">
                <div className="card-body col-sm-9 col-12">
                    <h5 className="card-title mb-10">{data.name}</h5>
                    <h6 className="card-subtitle"><strong>Email:</strong> {data.email}</h6>
                    <p className="card-text mb-0"><strong>Address: </strong>{data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}</p>
                    <div>
                        <strong>Phone: </strong>
                        <a href={`tel:`+data.phone}>{data.phone}</a>
                    </div>
                    <div>
                        <strong>Website: </strong>
                        <a href={data.website} target="_blank">{data.website}</a>
                    </div>
                    <Link to="/edit-record" className="btn btn-primary btn-sm">Edit</Link>
                    <Link to="/edit-record" className="btn btn-danger btn-sm">Delete</Link>
                </div>
                <div className="col-sm-3 col-12">
                    <EmpLocation coords={data.address.geo}/>
                </div>
            </div>
        </li>
    )
}

const Record = (props) => {
    return props.persons.map(person => {
        return recordDom(person);
    })
}

export default Record;