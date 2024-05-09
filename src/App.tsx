import { ThemeProvider } from "@mui/material";
import { themeConfig } from "./config/themeConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import PageLayout from "./pages/PageLayout";
import TodoUpsertPage from "./pages/TodoUpsertPage";
import Maintodo from "./components/MyTodo/Main/Maintodo";
import Maincompleted from "./components/MyTodo/Main/Maincompleted"
interface IROUTE {
  path: string;
  component: JSX.Element;
}

const ROUTES: IROUTE[] = [
  {
    path: "/todos",
    //component: <DashboardPage />,
    component: <Maintodo />,
  },
  {
    path: "/todos/completed",
    component: <Maincompleted />,
  },
  {
    path: "/todos/new",
    component: <TodoUpsertPage />,
  },
  {
    path: "/todos/:id",
    component: <TodoUpsertPage />,
  },
  // {
  //   path: "/profile",
  //   component: <Profile />,
  // },
];

function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maintodo/>}>
            <Route path="*" element={<Navigate to="/todos" replace />} />
            <Route path="/" element={<Navigate to="/todos" replace />} />
            {ROUTES.map((r) => (
              <Route key={r.path} path={r.path} element={r.component} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
