import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

//---------------------------------------
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  return (
    <>
      <button onClick={toggleTheme}>
        switch to {theme == "light" ? "dark" : "light"}
      </button>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Page />
      </ThemeContext.Provider>
    </>
  );
}
export default App;
//------------------------------------------

export function Page() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <p>{theme}</p>

      <div
        style={{
          background: theme === "light" ? "#e2e0e0" : "#000000",
          color: theme === "light" ? "#000000" : "#dddada",
        }}
      >
        <h1>page is here </h1>
        <h1>page is here </h1>
        <h1>page is here </h1>
        <h1>page is here </h1>
        <h1>page is here </h1>
        <h1>page is here </h1>
      </div>
    </>
  );
}
