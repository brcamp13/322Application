import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



const containerStyle = {
    textAlign: 'center', 
    paddingTop: '15em', 
    border: '1rem rounded black', 
    marginBottom: '2rem'
}

const textStyle = {
    fontFamily: 'PT Sans'
}

const inputRowStyle = {
    fontFamily: 'PT Sans', 
    paddingTop: '1rem'
}

const buttonRowStyle = {
    fontFamily: 'PT Sans', 
    paddingTop: '1rem'
}


class Login extends React.Component {

    constructor(props) {
		super(props);
    }

    

    render() {
        return (
            <div>
                <div style={containerStyle}>
                    <Container>
                        <Form>
                            <Row>
                                <Col align='center' md={{ span: 6, offset: 3 }}>
                                    <h1 style={textStyle}>Enter your ID</h1>
                                </Col>
                            </Row>
                            <Row style={inputRowStyle}>
                                <Col align='center' md={{ span: 2, offset: 5 }} xs={{ span: 4, offset: 4}}>
                                    <Form.Control size="lg" type="text" placeholder="ID" onChange={this.props.onIdChange} />
                                </Col>
                            </Row>
                            <Row style={buttonRowStyle}>
                                <Col>
                                    <Button variant="primary" onClick={this.props.onButtonSubmit}>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
    
}

export default Login;