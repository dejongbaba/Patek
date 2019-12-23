import React, {Component} from 'react';
import {Button, Form, Icon, Input, message, Spin} from "antd";
import {Col, Row} from "react-bootstrap";
import './contactform.css';
import formLeaf from '../../assets/img/form-leaf.svg';
import emailjs from 'emailjs-com'

const {TextArea} = Input;

export const antIcon = <Icon type="loading" style={{fontSize: 24,color:'green'}} spin/>;


class ContactForm extends Component {

    state = {
        isLoading: false,
    };


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({isLoading: true});
                this.sendmail(values);
            }
        });
    };

    sendmail = (params) => {
        let template_params = {
            "from_name": `${params.firstname} ${params.lastname}`,
            "from_email": `${params.email}`,
            "to_name": "Patek Firm",
            "message_html": `${params.message}`
        };

        let service_id = "sendgrid";
        let template_id = "template_bl8XEm9r";
        let user_id = "user_uozLxKcauc2rN7DEnqxP9";


        emailjs.send(service_id, template_id, template_params, user_id)
            .then(result => {
                message.success('Email Sent!');
                this.setState({isLoading: false});

                this.props.form.resetFields();
            })
            .catch(err => {
                this.setState({isLoading: false});
                message.error('Unable to send mail at the moment.');
                console.log('err', err);
            })
    };

    render() {
        const {form: {getFieldDecorator}, bgLeaf} = this.props;
        const {isLoading} = this.state;

        return (
            <div className='position-lg-absolute w-lg-35 mt-3 right-9 z-index-1'>
                {bgLeaf && <img src={formLeaf} className={'position-absolute w-75 right--250 z-index--1'}
                                alt="form background leaf"/>}
                <Form
                    className='contact-form bg-white px-5 bs-2'
                    onSubmit={this.handleSubmit}
                >
                    <div className="pt-5">
                        <Row>
                            <Col md={6}>
                                <Form.Item className={'contact-input'} label="First Name">
                                    {getFieldDecorator('firstname', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your first name',
                                            },
                                        ],
                                    })(<Input placeholder={'Adekunle'}/>)}
                                </Form.Item>
                            </Col>
                            <Col md={6}>
                                <Form.Item className={'contact-input'} label="Last Name">
                                    {getFieldDecorator('lastname', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your last name',
                                            },
                                        ],
                                    })(<Input placeholder={'Ciroma'}/>)}
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item className={'contact-input'} label="E-mail">
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {
                                                required: true,
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                        ],
                                    })(<Input placeholder={'adekunleciroma@gmail.com'}/>)}
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item className={'contact-input'} label="Message">
                                    {getFieldDecorator('message', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your project address',
                                            },
                                        ]
                                    })(<TextArea rows={4} placeholder={'tell us about your project'}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        className='mr-3 btn-block contact-input'
                                        htmlType="button"
                                        onClick={this.handleSubmit}
                                        disabled={isLoading}
                                    >
                                        Create Project
                                    </Button>
                                    {isLoading ? <Spin indicator={antIcon}/> : null}
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Form.create({name: 'contact_form'})(ContactForm);