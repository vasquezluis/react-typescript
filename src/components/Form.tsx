import { useState } from "react";

const Form = () => {
  const [inputValues, setinputValues] = useState({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <input
          value={inputValues.description}
          type="text"
          name="description"
          placeholder="description"
        />

        <button>Save new sub</button>
      </form>
    </div>
  );
};

export default Form;
