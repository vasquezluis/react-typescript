import { Sub } from "../types";

import { useState } from "react";

// * para definir mas de un estado
interface FormState {
  inputValues: Sub;
}

const Form = () => {
  const [inputValues, setinputValues] = useState<FormState["inputValues"]>({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleSubmit = () => {};

  // ? decirle el tipo de event, porque no sabe el contexto
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value,
    });
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

        <button>Save new sub</button>
      </form>
    </div>
  );
};

export default Form;
