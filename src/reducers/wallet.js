const initialState = { expenses: [], currencies: {} };
const PRICE_SUCCESS = 'PRICE_SUCCESS';
const PRICE_FAIL = 'PRICE_FAIL';
const GET_PRICE = 'GET_PRICE';
const ADD_EXPENSES = 'ADD_EXPENSES';

const wallet = (state = initialState, { type, payload, status }) => {
  switch (type) {
  case GET_PRICE:
    return { ...state, status };
  case PRICE_SUCCESS:
    return { ...state, currencies: payload };
  case ADD_EXPENSES:
    return { ...state,
      expenses: [
        ...state.expenses, {
          id: state.expenses.length,
          ...payload,
        },
      ],
      status };
  case PRICE_FAIL:
    return { ...state, status };
  default:
    return state;
  }
};

export default wallet;
