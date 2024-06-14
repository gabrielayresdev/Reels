import axios, { AxiosResponse } from "axios";
import React, { useCallback } from "react";

function useFetch<T>(
  callback: (...params: any) => Promise<AxiosResponse<any, any>>,
  ...params: any
) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const paramsMemo = React.useMemo(() => [...params], [...params]);
  React.useEffect(() => {
    const source = axios.CancelToken.source();

    async function request() {
      setLoading(true);
      setError(null);
      try {
        const response = await callback(...paramsMemo);
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
  }, [paramsMemo]);

  return { data, loading, error };
}

export default useFetch;
