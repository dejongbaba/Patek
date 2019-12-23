const sgMail = require('@sendgrid/mail');

export function sendMail(params) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        headers: {
            'X-Access-Control-Allow-Origin': '*',
            'X-Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'X-Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        to: params.email,
        from: 'test@example.com',
        subject: params.subject,
        text: params.message,
        // html: `<p>{params.firstname} {param.lastname}</p><br/>
        //         <strong>{param.message}</strong>`,
    };


    sgMail.send(msg).then((response) => {
        console.log('response', response);
        // message.success('Message sent!', 3);
    }).catch((err) => {
        console.log('err', err);
        // message.error('unable to send message at the moment!', 3)
    });
}

sendMail(
    {
        email: 'agunbiade.adedeji94@gmail.com',
        firstname: 'Adedeji',
        lastname: 'agunbiade',
        message:'this is the message '
    });

