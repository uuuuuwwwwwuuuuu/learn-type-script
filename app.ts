interface IPayment {
    sum: number,
    from: number,
    to: number
}

enum PayStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IDataSuccess extends IPayment {
    databaseId: number,
}

interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface ResponseSuccess {
    payStatus: PayStatus.SUCCESS,
    data: IDataSuccess
}

interface ResponseFailed {
    payStatus: PayStatus.FAILED,
    data: ResponseSuccess
}