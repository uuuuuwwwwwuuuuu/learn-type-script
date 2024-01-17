class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        data ? this.data = data : null;
        error ? this.error = error : null;
    }
}

class HTTPResponse extends Resp<string, number>{
    code: number;

    setCode(code: number) {
        this.code = code;
    }
}

const res2 = new HTTPResponse();