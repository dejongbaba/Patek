import React, {Component} from 'react';
import {Form, Icon, Input,Button} from "antd";

class SubcriptionForm extends Component {

    state = {
        loading: false,
    };

    subscribe = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // make request to login
                this.setState({loading: true});
                console.log('values', values);
                //TODO handle subscription
            }
        });
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        const {loading} = this.state;

        return (
            <>

                <Form onSubmit={this.subscribe}>
                    <div className="input-group">
                        <Form.Item className={'form-control px-0 py-0 bg-transparent no-border'}>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input placeholder={'Enter email address'} className={'form-control bg-transparent no-border'}/>)}
                        </Form.Item>
                        <div className="input-group-append">
                            <Button className="btn btn-patek-green py-0" text={'Invite'} htmlType={'submit'}>Invite</Button>
                        </div>
                    </div>
                </Form>
                <div className='text-left h-25-px my-2 mb-lg-2'>
                {loading ? <Icon type={'loading'}  style={{fontSize: 24}} spin /> :''}
                </div>
            </>
        );
    }
}

export default Form.create({name: 'subscribe_form'})(SubcriptionForm);