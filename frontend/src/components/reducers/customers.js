const initialState = []
export default function CustomersReduser(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_CUSTOMERS_SUCCESS':
            return action.payload;

        default:
            return state;
    }
}