interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

type responseType = IResponseSuccess | IResponseFailed;

function isSuccess(response: responseType): response is IResponseSuccess {
    return PaymentStatus.Success in response
}

function getDatabaseId(response: responseType): number {
    if (isSuccess(response)) {
        return response.data.databaseId;
    } else {
        throw new Error(response.data.errorMessage); 
    }
}