import { useReducer } from 'react';

// variables
import arrowIcon from '../assets/icon-arrow.svg';

// helpers
import { isIP } from 'validator';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setInputValue':
      return { ...state, inputValue: action.inputValue };
    default:
      return state;
  }
};

const Form = ({ formHandler }) => {
  const [state, dispatch] = useReducer(reducer, {
    isValid: false,
    isEmpty: true,
  });

  const validateForm = (e) => {
    e.preventDefault();

    if (!state.inputValue) return;

    console.log('test');

    console.log(isIP(state.inputValue));

    isIP(state.inputValue) && formHandler(state.inputValue);
  };

  const handleInputChange = (e) => {
    dispatch({ type: 'setInputValue', inputValue: e.target.value.trim() });
  };

  return (
    <form className="w-full max-w-xl" onSubmit={validateForm}>
      <div className="relative flex bg-white rounded-2xl overflow-hidden">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for any IP address or domain"
          className="w-full font-rubik font-normal text-lg py-4 px-6 tracking-wide"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          aria-label="submit Button"
          className="absolute right-0 bg-black top-0 bottom-0 flex items-center justify-center w-16">
          <img src={arrowIcon} alt="" className="size-fit" />
        </button>
      </div>
    </form>
  );
};

export default Form;
