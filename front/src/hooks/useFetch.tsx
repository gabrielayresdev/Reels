import axios, { AxiosResponse } from "axios";
import React from "react";

function useFetch<T>(callback: () => Promise<AxiosResponse<any, any>>) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const source = axios.CancelToken.source();

    async function request() {
      setLoading(true);
      setError(null);
      try {
        const response = await callback();
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          if (!axios.isCancel(error)) {
            setError(error);
          } else setError(new Error("Something went wrong"));
        }
      } finally {
        setLoading(false);
      }
    }

    request();

    return () => {
      source.cancel("Request cancelled");
    };
  }, [callback]);

  return { data, loading, error };
}

export default useFetch;
