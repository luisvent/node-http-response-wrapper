# HTTP response wrapper for Node.Js

[![NPM](https://nodei.co/npm/node-http-response-wrapper.png)](https://www.npmjs.com/package/node-http-response-wrapper/)

This library simplifies handling HTTP responses by providing utility functions to send common status codes with consistent responses. It also includes a mapping of HTTP status codes for easy reference.

### Before
```js
try{
    // bussines logic...
}catch (e) {
    return res.status(404).json(
        {
            status: 'error',
            message: 'User not found',
            error: e
        }
    )
}
```
### After
```js
try{
    // bussines logic...
}catch (e) {
    return notFound(res, 'User not found', e);
}
```
## Installation

To use this library, you can install it via npm:

```sh
$ npm install node-http-response-wrapper
```
## Usage

```js
const { StatusCode, bad, error, notFound, forbidden, timeout, success, unauthorized } = require('node-http-response-wrapper');

// Example usage in an Express route
app.get('/example', (req, res) => {
    try {
        // ... your logic ...

        // Respond with success
        success(res, 'Operation successful', responseData);
    } catch (err) {
        // Handle error and respond with an error
        error(res, 'An unexpected error occurred', err);
    }
});
```
### Parameters:
* res (Object): Express response object.
* message (String): Custom message.
* data (Any): Additional data to include in the response.

## Functions

* **success(res, message, data)**
    * **Returns**: JSON response with a 200 OK status.


* **bad(res, message, data)**
  * **Returns**: JSON response with a 400 Bad Request status.


* **error(res, message, data)**
  * **Returns**: JSON response with a 500 Internal Server Error status.


* **notFound(res, message, data)**
  * **Returns**: JSON response with a 404 Not Found status.


* **unauthorized(res, message, data)**
  * **Returns**: JSON response with a 401 Unauthorized status.


* **forbidden(res, message, data)**
  * **Returns**: JSON response with a 403 Forbidden status.


* **timeout(res, message, data)**
  * **Returns**: JSON response with a 408 Request Timeout status.

## Example
```js
const express = require('express');
const { StatusCode, success, error } = require('node-http-response-wrapper');

const app = express();

app.get('/example', (req, res) => {
    try {
        // ... your logic ...

        // Respond with success
        success(res, 'Operation successful', responseData);
    } catch (err) {
        // Handle error and respond with an error
        error(res, 'An unexpected error occurred', err);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
## JSON Response
Standardized response: **status, message, data**
```js
// Request Response Status Code: 404
{
    "status": "Not Found",
    "message": "User was not found",
    "data": {}
}
```
Feel free to customize this library according to your project requirements. Enjoy using it!

## License

[MIT](LICENSE)
