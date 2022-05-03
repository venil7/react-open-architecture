import { PersonStore } from "../stores/person_store";

export type SecondScreenProps = {
  store: PersonStore;
};
export const SecondScreen = ({ store }: SecondScreenProps) => <>first screen</>;
