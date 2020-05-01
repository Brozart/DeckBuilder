import { Person } from 'api/model/person/Person';
import { Pair } from 'api/model/pair/Pair';

function useSecretSanta() {
    function getRecipientIndex(recipients: Person[]): number {
        return Math.floor(Math.random() * recipients.length);
    }

    function pair(arr: Person[]): Pair[] {
        const result = [];
        const recipients = arr.slice();
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            const sender = arr[i];
            let recipientIndex = getRecipientIndex(recipients);
            while (recipients[recipientIndex] === sender) {
                // Can't send gift to myself
                recipientIndex = getRecipientIndex(recipients);
            }
            const recipient = recipients.splice(recipientIndex, 1)[0];
            result.push({
                sender: sender,
                receiver: recipient
            });
        }
        return result;
    }

    return {
        pair
    };
}

export default useSecretSanta;
