function generateError(message: string): never {
    throw new Error(message);
}

// function dumbError(): never {               //ничего не может вернуть
//     return '';
// }

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        // case 'reject':
        //     //...
        //     break;
        default:
            const _: never = action;                //будет ругаться на присудствие reject
            throw new Error('Нет такого action');
    }
}


function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    generateError('vwsvsd');
}