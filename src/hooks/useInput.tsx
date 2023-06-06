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
  isTouched?: boolean;
  lostFocus: boolean;
};

const initialState: InputState = {
  value: "",
  isTouched: false,
  lostFocus: false,
};

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case "INPUT":
      return {
        value: action.value,
        isTouched: true,
        lostFocus: false,
      };
    case "BLUR":
      return {
        value: state.value,
        isTouched: false,
        lostFocus: true,
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
  const hasError = !validateInput && inputState.lostFocus;

  const enteredInputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: InputActionType.INPUT, value: event.target.value });
  };

  const onBlurHandler = () => {
    dispatch({ type: InputActionType.BLUR, value: inputState.value });
  };

  const onFocusHandler = () => {
    dispatch({ type: InputActionType.INPUT, value: inputState.value });
  };

  const reset = () => {
    dispatch({ type: InputActionType.RESET, value: initialState.value });
  };
  return {
    value: inputState,
    hasError,
    enteredInputHandler,
    onBlurHandler,
    onFocusHandler,
    reset,
  };
};

export default useInput;
