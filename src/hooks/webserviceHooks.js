import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const ACTIONS = {
    START_REQUEST: 'START_REQUEST',
    ON_SUCCESS: 'ON_SUCCESS',
    ON_ERROR: 'ON_ERROR',
};

const requestReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.START_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.ON_SUCCESS:
            return { ...state, data: action.payload, loading: false, error: null };
        case ACTIONS.ON_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export function useRequest(requestOpts = {}) {
    const [state, dispatch] = useReducer(requestReducer, initialState);
    const [isRefetch, setIsRefetch] = useState(false);

    const doRefresh = () => setIsRefetch((prevValue) => !prevValue);

    const onSuccess = (result) => {
        dispatch({ type: ACTIONS.ON_SUCCESS, payload: result.data });
    };

    const onError = (error) => {
        dispatch({ type: ACTIONS.ON_ERROR, payload: error });
    };

    useEffect(() => {
        const controller = new AbortController();
        const doRequest = async () => {
            try {
                const result = await axios({ ...requestOpts, signal: controller.signal });
                if (result?.status > 400) {
                    onError(result);
                    return;
                }
                onSuccess(result);
            } catch (error) {
                onError(error);
            }
        };
        dispatch({ type: ACTIONS.START_REQUEST });
        doRequest();

        return () => {
            controller.abort();
        };
    }, [isRefetch]);

    return { data: state.data, loading: state.loading, error: state.error, refetch: doRefresh };
}
