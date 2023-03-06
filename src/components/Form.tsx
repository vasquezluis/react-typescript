import { useReducer, useState } from "react";

import { Sub } from "../types";

// * para definir mas de un estado
interface FormState {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

// * reducer
const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;
  }
};

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setinputValues] =
  // useState<FormState["inputValues"]>(INITIAL_STATE);

  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onNewSub(inputValues);

    handleClear();
  };

  // ? decirle el tipo de event, porque no sabe el contexto
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  // ? limpiear el formulario
  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />

        <button onClick={handleClear} type="button">
          Clear the form
        </button>
        <button type="submit">Save new sub</button>
      </form>
    </div>
  );
};

export default Form;
