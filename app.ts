enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

const res = {
    message: 'Оплачено',
    statusCode: StatusCode.SUCCESS
};

function action(status: StatusCode) {
    console.log(status);
}

const enum Roles {
    USER,
    CHARACTER
}

const res2 = Roles.USER;