import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";

// ? contrato que tiene que tener un objeto
interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

// ? contrato para los estados de la aplicacion
interface AppState {
  subs: Array<Sub>;
  newSubsNumner: number;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderados a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumner"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Midu subs</h1>
      <List subs={subs} />
    </div>
  );
}

export default App;
