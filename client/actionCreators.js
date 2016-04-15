import { DATA_RECEIVED } from './actions';

export function loadData(data) {
    return {
        type: DATA_RECEIVED,
        payload: {
            data,
        },
    };
}
