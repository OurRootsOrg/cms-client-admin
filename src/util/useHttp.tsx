import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react';

type State<T> = {
  isLoading: boolean;
  isError: boolean;
  data?: T;
  error?: AxiosError;
};
type Action<T> = {
  type: 'INIT' | 'SUCCESS' | 'FAILURE';
  payload?: T;
  error?: AxiosError;
};
type RequestResult<T> = [State<T>, Dispatch<SetStateAction<AxiosRequestConfig>>];
type GetResult<T> = [State<T>, (url: string) => void];

export function useHttpGet<T>(url: string): GetResult<T> {
  const [currentUrl, setCurrentUrl] = useState(url);

  function setUrl(url: string): void {
    setCurrentUrl(url);
    setConfig({ method: 'get', url });
  }

  const [state, setConfig] = useHttpRequest<T>({
    method: 'get',
    url: currentUrl,
  });

  return [state, setUrl];
}

export function useHttpRequest<T>(config: AxiosRequestConfig): RequestResult<T> {
  const [currentConfig, setConfig] = useState(config);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: undefined,
  });

  useEffect(() => {
    let didCancel = false;

    async function fetch(): Promise<void> {
      dispatch({ type: 'INIT' });
      try {
        const result = await axios.request(currentConfig);

        if (!didCancel) {
          dispatch({ type: 'SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FAILURE', error });
        }
      }
    }

    fetch();

    return () => {
      didCancel = true;
    };
  }, [currentConfig]);

  return [state as State<T>, setConfig];
}

function dataFetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'INIT':
      return {
        isLoading: true,
        isError: false,
        data: state.data,
      };
    case 'SUCCESS':
      return {
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FAILURE':
      return {
        isLoading: false,
        isError: true,
        error: action.error,
      };
    default:
      throw new Error();
  }
}
