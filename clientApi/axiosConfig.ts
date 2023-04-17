import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiRequestOptions extends AxiosRequestConfig {
    data?: any;
}

const apiRequest = <T = any>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    options: ApiRequestOptions = {},
): Promise<AxiosResponse<T>> => {
    const config: AxiosRequestConfig = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        data: options.data,
    };
    return axios(config);
};

export default apiRequest;
