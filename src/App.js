import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Record from "./Components/Record/Record";
import Form from "./Components/Form/Form";
import axios from "axios";

class App extends React.Component {
    state = {
        title: "Employee Record Management",
        empRecord: [],
        empInitRecord: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({
                empRecord: res.data,
                empInitRecord: res.data
            });
        });
    }

    filterEmp(result) {
        this.setState({
            empRecord: result
        });
    }

    deleteRecord(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                return axios.get(`https://jsonplaceholder.typicode.com/users`)
            })
            .then((res) => {
                this.setState({
                    empRecord: res.data
                });
            })
    }

    render() {
        let displayRecords = this.state.empRecord.map((record) => {
            return <Record
                key={record.id}
                persons={record}
                deleteRec={() => this.deleteRecord(record.id)}
            />;
        });

        return (
            <Router>
                <div className="container-fluid">
                    <div className="row text-center">
                        <Header title={this.state.title} />
                        
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <Search
                                    searchItem={this.state.empInitRecord}
                                    searchHandler={this.filterEmp.bind(this)}
                                />
                                
                                <div className="col-md-12">
                                    <ul className="row">
                                        {displayRecords}
                                    </ul>
                                </div>
                            </React.Fragment>
                        )}/>

                        <Route path="/edit-record" component={Form}></Route>
                        
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
