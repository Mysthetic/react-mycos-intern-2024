import { ThemeProvider } from "@mui/material";
import { themeConfig } from "./config/themeConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Maintodo from "./components/MyTodo/Main/Maintodo";
import Maincompleted from "./components/MyTodo/Main/Maincompleted"
interface IROUTE {
  path: string;
  component: JSX.Element;
}

const ROUTES: IROUTE[] = [
  {
    path: "/todos",
    component: <Maintodo />,
  },
  {
    path: "/todos/completed",
    component: <Maincompleted />,
  },
  // {
  //   path: "/todos/new",
  //   component: <TodoUpsertPage />,
  // },
  // {
  //   path: "/todos/:id",
  //   component: <TodoUpsertPage />,
  // },
];

function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maintodo/>}>
            
          </Route>
          <Route path="/completed" element={<Maincompleted/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
