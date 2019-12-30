import React, {Component} from 'react';
import {Form, FormControl, InputGroup} from "react-bootstrap";
import Button from "../Button/Button";
import {Icon, message} from "antd";
import './subscriptionform.css';
import {changeHandler} from "../../../Facades/Facade";
import {subscribeUser} from "../../../Api/api";

class SubcriptionForm extends Component {

    state = {
        loading: false,
        email: '',
        status: 'subscribed',
        apikey: '0f2e859931da8548d66e9670b97ef280-us20',
    };

    subscribe = (e) => {
        e.preventDefault();
        const {email} = this.state;

        if (email != '') {
            this.setState({loading: true});
            subscribeUser(this.state).then(res => {
                console.log(res);
                this.setState({loading: false});
                message.success('You have been subscribed to our newsletter!');
            }).catch(e => {
                console.log(e);
                message.error('unable to subscribe at the moment!');
            })
        }
    };


    render() {
        const {loading} = this.state;
        return (
            <>
                <Form className={'py-5 px-5'}>
                    <InputGroup className="mb-3">
                        <FormControl
                            className={'subscribe-control mb-5 mb-lg-0'}
                            placeholder="Enter e-mail address"
                            id="email" name={'email'} onChange={(e) => changeHandler(e, this)}
                            aria-label="email address"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button className={'py-lg-0 px-5'} text={'Subscribe'} onClick={(e) => this.subscribe(e)}/>
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