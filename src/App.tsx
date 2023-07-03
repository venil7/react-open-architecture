import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FirstScreen } from "./screens/FirstScreen";
import { SecondScreen } from "./screens/SecondScreen";
import { createCharacterStore } from "./stores/character";

const store = createCharacterStore();

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
