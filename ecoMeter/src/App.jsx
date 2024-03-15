import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
// import { StepContextProvider } from './context/StepContext.jsx';

// import TaskForm from "./components/TaskForm";
// import TasksList from "./components/TasksList";
// import ClientForm from './components/examples/ClientsForm';
// import ClientList from './components/examples/ClientList';
import Login from './components/Login';
import SingUp from './components/SingUp';
import Dashboard from './components/dashboard/Dashboard';

// import PrivateRoute from "./PrivateRoute";
// import Register from "./components/Register";
// import { Link } from "react-router-dom";
// import Menu from "./components/Navbar";
 
function App() {
  // const isAuthenticated = localStorage.getItem('jwt');
  return (
    <Fragment>
      <Container>
      {/* <StepContextProvider> */}
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route index path="/signup" element={<SingUp />} />
          <Route index path="/dashboard" element={<Dashboard />} />

          
          {/* <Route path="/tasks" element={<TasksList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} /> */}
        </Routes>
        {/* </StepContextProvider> */}
      </Container>
    </Fragment>

  );
}

export default App;
