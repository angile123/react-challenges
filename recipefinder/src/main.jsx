import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import RecipeFinder from "./RecipeFinder.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeFinder />
  </StrictMode>,
);
