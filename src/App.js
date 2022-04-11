import AddBill from "./pages/addBill";
import ViewReports from "./pages/viewReports";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="addbill" element={ <AddBill />} />
      <Route path="viewreport" element={ <ViewReports />} />
    </Routes>
   </>
  );
}

export default App;
