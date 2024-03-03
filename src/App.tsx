// import { useState } from "react";
// import MainLayout from "./components/layout/MainLayout";
// import { ThemeContext } from "./components/layout/Navbar";

import MainLayout from "./components/layout/MainLayout";

// const App = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={`App ${theme}`}>
//         <MainLayout />
//         {/* Other components */}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default App;

const App = () => {
  return <MainLayout />;
};

export default App;
