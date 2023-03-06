import { useState, useEffect, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

// ? contrato que tiene que tener un objeto
import { Sub, SubsResponseFromAPI } from "./types";

// ? contrato para los estados de la aplicacion
interface AppState {
  subs: Array<Sub>;
  newSubsNumner: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumner"]>(0);
  // ? useRef debe tener un valor inicial
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponseFromAPI> => {
      return fetch("http://localhost:3000/subs").then((subs) => subs.json());
    };

    // ? transformar los datos de la api a datos que entiende la aplicacion
    // * cambiar de contrato
    const mapFromApiToSubs = (apiResponse: SubsResponseFromAPI): Array<Sub> => {
      return apiResponse.map((subFromApi) => {
        const {
          nick,
          months: subMonths,
          profileURL: avatar,
          description,
        } = subFromApi;

        return {
          nick,
          description,
          avatar,
          subMonths,
        };
      });
    };

    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
