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
    };


    emptyForm = ()=> {
        this.setState({loading: false,email:''});
    };

    subscribe = (e) => {
        e.preventDefault();
        const {email} = this.state;

        if (email != '') {
            this.setState({loading: true});
            subscribeUser(this.state).then(res => {
                console.log(res);
                this.emptyForm();
                message.success('You have been subscribed to our newsletter!');
            }).catch(e => {
                console.log(e);
                this.emptyForm();
                message.error('You have already subscribed to our newsletter!');
            })
        }
    };


    render() {
        const {loading} = this.state;
        return (
            <>
                <Form className={'py-5 px-5'} onSubmit={(e) => this.subscribe(e)}>
                    <InputGroup className="mb-3">
                        <FormControl
                            className={'subscribe-control mb-5 mb-lg-0'}
                            placeholder="Enter e-mail address"
                            required
                            id="email" name={'email'}
                            type={'email'}
                            value={this.state.email}
                            onChange={(e) => changeHandler(e, this)}
                            aria-label="email address"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button type={'submit'} loading={loading}  className={'py-lg-0 px-5 mw-250'} text={'Subscribe'}/>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>

            </>
        );
    }
}

export default SubcriptionForm;