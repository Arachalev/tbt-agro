import React, { useReducer, Reducer } from "react";

enum InputActionType {
  INPUT = "INPUT",
  BLUR = "BLUR",
  RESET = "RESET",
}

type InputAction = {
  type: InputActionType;
  value: string;
};

type InputState = {
  value: string;
  isTouched: boolean;
};

const initialState: InputState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case "INPUT":
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case "BLUR":
      return {
        value: state.value,
        isTouched: true,
      };

    case "RESET":
      return initialState;

    default:
      return initialState;
  }
};

const useInput = (validate: (val: string) => boolean) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const validateInput = validate(inputState.value);
  const hasError = !validateInput && inputState.isTouched;

  const enteredInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: InputActionType.INPUT, value: event.target.value });
  };

  const onBlurHandler = () => {
    dispatch({ type: InputActionType.BLUR, value: inputState.value });
  };

  const reset = () => {
    dispatch({ type: InputActionType.RESET, value: initialState.value });
  };
  return {
    value: inputState,
    hasError,
    enteredInputHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
