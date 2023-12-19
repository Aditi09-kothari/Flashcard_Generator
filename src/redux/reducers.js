const initialState = {
    formData: null,
  };
  
  export const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_FORM_DATA':
        return {
          ...state,
          formData: action.payload,
        };
      default:
        return state;
    }
  };
  