import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';


const titleStyle = {
    fontFamily: 'PT Sans', 
    paddingBottom: '2rem'
}

const buttonRowStyle = {
    fontFamily: 'PT Sans', 
    paddingTop: '.6rem'
}

const containerStyle = {
    paddingTop: '7rem', 
}

const formInputStyle = {
    paddingBottom: '2rem'
}


const initialState = {
    race: {
            title: 'President', 
            candidates: [
                {
                    name: 'John Deere', 
                    voteCount: 5
                }, 
                {
                    name: 'Sally Albert', 
                    voteCount: 3
                }, 
                {
                    name: 'Dear Smith', 
                    voteCount: 70
                }
            ]
        },
    choice: ''
}



class Vote extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState
        this.onButtonSubmit = this.onButtonSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.search = this.search.bind(this)
    }

    search = (nameKey, myArray) => {
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return myArray[i];
            }
        }
    }

    //When the user submits a vote, update vote count, don't let them submit again
    onButtonSubmit = () => {
        console.log(this.state.choice)
        this.setState((state) => ({candidates: state.race.candidates[
            state.race.candidates.findIndex(obj => obj.name == state.choice)
        ].voteCount+=1}))
    }

    onInputChange = (event) => {
        this.setState({choice: event.target.value})
    }


    render() {
        return (
            <div>

                <Container>
                        <Row style={buttonRowStyle}>
                            <Col align='center' md={{ span: 1, offset: 11 }}>
                                <Button variant="primary" onClick={this.props.onLogoutSubmit}>Logout</Button>
                            </Col>
                        </Row>
                    </Container>

                <div style={containerStyle}>

                    <Row>
                        <Col align='center' md={{ span: 4, offset: 4}}>
                            <h1 style={titleStyle}><strong>Cast Your Vote, User {this.props.userId}</strong></h1>
                        </Col>
                    </Row>

                    <Container>
                        <Row>
                            <Col md={{ span: 4, offset: 4}} align='center'>
                                <h2>{this.state.race.title}</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={{ span: 8, offset: 2}}>

                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Name</th>
                                        <th>Votes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>{this.state.race.candidates[0].name}</td>
                                        <td>{this.state.race.candidates[0].voteCount}</td>
                                        </tr>
                                        <tr>
                                        <td>{this.state.race.candidates[1].name}</td>
                                        <td>{this.state.race.candidates[1].voteCount}</td>
                                        </tr>
                                        <tr>
                                        <td>{this.state.race.candidates[2].name}</td>
                                        <td>{this.state.race.candidates[2].voteCount}</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Form>
                                    <Row>
                                        <Col md={{span: 6, offset: 3}}>
                                            <div style={formInputStyle}>
                                                <Form.Control size="lg" type="text" placeholder="Type Your Selection" onChange={this.onInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>

                                <Row>
                                    <Col md={{span: 6, offset: 3}} align="center">
                                        <Button variant="primary" onClick={this.onButtonSubmit}>Submit</Button>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
    
}


export default Vote;