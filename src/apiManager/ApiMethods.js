const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const USER_URL = 'https://random-data-api.com/api/v2/';


class ApiMethods {
    static apiRequest = (method, url, body = {}) => {
        url = USER_URL + url; 
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (method !== 'GET' && method !== 'DELETE') {
            options.body = JSON.stringify(body); 
        }

        return new Promise((resolve, reject) => {
            fetch(url, options)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(resolve)
                .catch(reject);
        });
    };


    static get = (url) => {
        return this.apiRequest('GET', url);
    };

    static post = (url, body) => {
        return this.apiRequest('POST', url, body);
    };

    static put = (url, body) => {
        return this.apiRequest('PUT', url, body);
    };

    static delete = (url) => {
        return this.apiRequest('DELETE', url);
    };
}


export default ApiMethods;