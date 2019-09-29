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
        empRecord: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({
                empRecord: res.data
            });
        });
    }

    filterEmp(result) {
        this.setState({
            empRecord: result
        });
    }

    updateFreshList(e) {
        if(e.keyCode === 8 || e.keyCode === 46) {
            axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
                this.setState({
                    empRecord: res.data
                });
            });
        }
    }

    deleteRecord() {

    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row text-center">
                        <Header title={this.state.title} />
                        
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <Search
                                    searchItem={this.state.empRecord}
                                    searchHandler={this.filterEmp.bind(this)}
                                    listReset={this.updateFreshList.bind(this)}
                                />
                                
                                <div className="col-md-12">
                                    <ul className="row">
                                        <Record 
                                            persons={this.state.empRecord} 
                                            deleteRec={this.deleteRecord}
                                        />
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
