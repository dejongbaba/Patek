import React, {Component} from 'react';
import {Form, FormControl, InputGroup} from "react-bootstrap";
import Button from "../Button/Button";
import {Icon} from "antd";
import './subscriptionform.css';

class SubcriptionForm extends Component {

    state = {
        loading: false
    };

    subscribe = (e) => {
        e.preventDefault();
        // this.setState({loading: true});
    };

    render() {
        const {loading} = this.state;
        return (
            <>
                <Form className={'py-5 px-5'}>
                    <InputGroup className="mb-3">
                        <FormControl
                            className={'subscribe-control'}
                            placeholder="Enter e-mail address"
                            aria-label="email address"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button className={'py-0 px-5'} text={'Subscribe'} onClick={() => this.subscribe}/>
                        </InputGroup.Append>
                    </InputGroup>

                </Form>
                <div className='text-left h-25-px my-2 mb-lg-2'>
                    {loading ? <Icon type={'loading'} style={{fontSize: 24}} spin/> : ''}
                </div>
            </>
        );
    }
}

export default SubcriptionForm;