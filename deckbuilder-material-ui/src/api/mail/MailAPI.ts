import { Pair } from '../model/pair/Pair';
import axios from 'axios';

function sendMail(pair: Pair): Promise<any> {
    const data = {
        // eslint-disable-next-line @typescript-eslint/camelcase
        service_id: 'default_service',
        // eslint-disable-next-line @typescript-eslint/camelcase
        user_id: 'user_6cVWhYqajeAw41cBlRo2R',
        // eslint-disable-next-line @typescript-eslint/camelcase
        template_id: 'nye',
        // eslint-disable-next-line @typescript-eslint/camelcase
        template_params: {
            sender: pair.sender.name,
            // eslint-disable-next-line @typescript-eslint/camelcase
            email_sender: pair.sender.email,
            receiver: pair.receiver.name,
            // eslint-disable-next-line @typescript-eslint/camelcase
            extra_info: pair.receiver.extraInfo
        }
    };
    return axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then(resp => resp.data);
}

export default {
    sendMail
};
