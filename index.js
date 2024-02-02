const {StatusCode, getStatus} = require('http-status-utility');

const response = (status, message, data) => {
    return {
        status,
        message: message || '',
        data: data || null
    }
}

const error = (res, message, data) => {

    if(data) {
        console.log(data);
    }

    return res.status(StatusCode.ServerErrorInternal).json(
        response(getStatus(StatusCode.ServerErrorInternal), message, data)
    )
}

const bad = (res, message, data) => {

    if(data) {
        console.log(data);
    }

    return res.status(StatusCode.ClientErrorBadRequest).json(
        response(getStatus(StatusCode.ClientErrorBadRequest), message, data)
    )
}

const notFound = (res, message, data) => {
    return res.status(StatusCode.ClientErrorNotFound).json(
        response(getStatus(StatusCode.ClientErrorNotFound), message, data)
    )
}

const forbidden = (res, message, data) => {
    return res.status(StatusCode.ClientErrorForbidden).json(
        response(getStatus(StatusCode.ClientErrorForbidden), message, data)
    )
}

const timeout = (res, message, data) => {
    return res.status(StatusCode.ClientErrorRequestTimeout).json(
        response(getStatus(StatusCode.ClientErrorRequestTimeout), message, data)
    )
}

const success = (res, message, data) => {
    return res.status(StatusCode.SuccessOK).json(
        response(getStatus(StatusCode.SuccessOK), message, data)
    )
}

const unauthorized = (res, message, data) => {
    return res.status(StatusCode.ClientErrorUnauthorized).json(
        response(getStatus(StatusCode.ClientErrorUnauthorized), message || getStatus(StatusCode.ClientErrorUnauthorized), data)
    )
}

module.exports = {
    bad,
    error,
    notFound,
    forbidden,
    timeout,
    unauthorized,
    success,
}

