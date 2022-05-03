import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstScreen } from "./screens/FirstScreen";
import { SecondScreen } from "./screens/SecondScreen";
import { PersonStore } from "./stores/person_store";

const store = new PersonStore();

export const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreen store={store} />} />
        <Route path="/main" element={<SecondScreen store={store} />} />
      </Routes>
    </BrowserRouter>
  );
};
