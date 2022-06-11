import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";
import { EnhPerson } from "../components/Person";
import { PersonStore } from "../stores/person_store";

export type FirstScreenProps = {
  store: PersonStore;
};
const FirstScreen = ({ store }: FirstScreenProps) => {
  useEffect(() => {
    const local = () => import(`../env/local.json`);
    const dev = () => import(`../env/dev.json`);

    const getEnv = () => {
      switch (import.meta.env.VITE_ENVIRONMENT) {
        case "dev":
          return dev();
        default:
          return local();
      }
    };
    getEnv()
      .then((m) => m.default)
      .then(console.log);
  }, [store]);

  const clickHandler = useCallback(() => store.getPerson(), []);

  return (
    <>
      {/* here: <strong>{import.meta.env.VITE_HELLO}</strong> */}
      <hr />
      <button onClick={clickHandler}>load</button>
      <EnhPerson
        person={store.data}
        fetching={store.fetching}
        error={store.error}
      />
    </>
  );
};

const ObservedFirstScreen = observer(FirstScreen);

export { ObservedFirstScreen as FirstScreen };
