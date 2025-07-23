

import Supplier from "./Component/Supplier";
import SupplierList from "./Component/SupplierList";
import First from "./Component/First";
import AddCustomer from "./Component/AddCustomer";
import CustomerList from "./Component/CustomerList";
import AddSupplier from "./Component/AddSupplier";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path:'/',
    element: <First />,

    children: [
      {
        index: true,
        element:<AddCustomer />
      },
      {
        path: "/CustomerList",
        element: <CustomerList />
      },
      {
        path: "/AddSupplier",
        element: <AddSupplier />
      },
      {
        path: "/SupplierList",
        element: <SupplierList />
      },
      {
        path: "/Supplier",
        element: <Supplier />
      }
    ],
  },
]);

function App() {

  return <RouterProvider router={ router} />;
}

export default App;
