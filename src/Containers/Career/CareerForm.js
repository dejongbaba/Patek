import React, {Component} from 'react';
import {Button, Form, Icon, Input, message, Upload} from "antd";
import {Col, Row} from "react-bootstrap";
import './careerForm.css';
import {postUserApplication} from "../../Api/api";

const {TextArea} = Input;

export const antIcon = <Icon type="loading" style={{fontSize: 24, color: 'green'}} spin/>;


class CareerForm extends Component {

    state = {
        isLoading: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({isLoading: true});
                postUserApplication(values).then(res => {
                    console.log('res', res);
                    this.setState({loading:false});
                    message.success('application sent!');
                }).catch(err => {
                    console.log('err', err);
                    this.setState({loading:false});
                    message.error('unable to send application at the moment!');
                });
            }
        });
    };


    render() {
        const {form: {getFieldDecorator}} = this.props;
        const {isLoading} = this.state;
        const props = {
            name: 'file',
            action: 'https://patek-be.herokuapp.com/upload',
            headers: {
                authorization: 'authorization-text',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin':'*',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    console.log('done',info);
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    console.log('err',info);
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <Form
                className='contact-form bg-white px-5 bs-2'
                onSubmit={this.handleSubmit}
            >
                <div className="pt-5">
                    <Row>
                        <Col md={12}>
                            <Form.Item className={'contact-input'} label="Name">
                                {getFieldDecorator('name', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your name',
                                        },
                                    ],
                                })(<Input/>)}
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
                                })(<Input/>)}
                            </Form.Item>
                        </Col>
                        <Col md={12} className={'mb-5'}>
                            <p>Upload Resume</p>
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload"/> Click to Upload
                                </Button>
                            </Upload>
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
                                    loading={isLoading}
                                >
                                    APPLY
                                </Button>
                                {/*{isLoading ? <Spin indicator={antIcon}/> : null}*/}
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

export default Form.create({name: 'contact_form'})(CareerForm);