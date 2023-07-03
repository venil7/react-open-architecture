import React, { createContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CharacterScreen } from "./screens/CharacterScreen";
import { FilmScreen } from "./screens/FilmScreen";
import { Store, createStore } from "./stores/store";

const store = createStore();
export const StoreContext = createContext<Store>(store);

export const App: React.FC = () => {
  return (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/film/:id" element={<FilmScreen />} />
          <Route path="/character/:id" element={<CharacterScreen />} />
          <Route path="*" element={<Navigate to="/film/1" replace />} />
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
};
