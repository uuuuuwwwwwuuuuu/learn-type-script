"use strict";
function logId(id) {
    switch (typeof id) {
        case 'number':
            console.log(id + 1);
            break;
        case 'boolean':
            console.log(!id);
            break;
        case 'string':
            console.log(id.toLowerCase());
            break;
    }
}
logId(1);
logId('FkovDoVoF');
logId(true);
