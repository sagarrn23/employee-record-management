import React from 'react'

const Form = () => {
    return (
        <div className="col-sm-12 text-left">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Name</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Email</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    )
}

export default Form;