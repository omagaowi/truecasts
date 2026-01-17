import axios, { AxiosRequestHeaders, AxiosResponse, Method } from "axios";

type HttpMethod = "get" | "post" | "put" | "delete";

interface FetchResponse<T> {
  error: boolean;
  data: T;
}

const runFetch = async <T = unknown>(
  url: string,
  body?: unknown,
  headers?: AxiosRequestHeaders,
  type: HttpMethod = "get",
): Promise<FetchResponse<T>> => {
  try {
    let response: AxiosResponse<T>;

    switch (type) {
      case "post":
        response = await axios.post<T>(url, body, { headers });
        break;

      case "put":
        response = await axios.put<T>(url, body, { headers });
        break;

      case "delete":
        response = await axios.delete<T>(url, { headers });
        break;

      case "get":
      default:
        response = await axios.get<T>(url, { headers });
        break;
    }

    return response.data;
  } catch (err) {
    throw err;
  }
};

export default runFetch;
