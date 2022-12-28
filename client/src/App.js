import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/global/sidebar";
import Store from "./scenes/store";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/*<Route path="/dashboard" element={<Dashboard />} />*/}
              <Route path="/store" element={<Store />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
