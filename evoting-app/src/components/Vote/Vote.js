import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const titleStyle = {
    fontFamily: 'PT Sans'
}

const buttonRowStyle = {
    fontFamily: 'PT Sans', 
    paddingTop: '.6rem'
}

const containerStyle = {
    textAlign: 'center', 
    paddingTop: '15em', 
    border: '1rem rounded black', 
    marginBottom: '2rem'
}


class Vote extends React.Component {

    constructor(props) {
		super(props);
    }

    render() {
        return (
            <div>
                <div style={containerStyle}>
                    <Container>
                        <Row>
                            <Col align='center' md={{span: 6, offset: 3 }}>
                                <h1 style={titleStyle}>Welcome {this.props.userId}</h1>
                            </Col>
                        </Row>
                        <Row style={buttonRowStyle}>
                            <Col align='center'>
                                <br></br>
                                <Button variant="primary" onClick={this.props.onLogoutSubmit}>Logout</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
    
}


export default Vote;