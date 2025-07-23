import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import Supplier from "./Component/Supplier";
import First from "./Component/First";
import AddSupplier from "./Component/AddSupplier";
import SupplierList from "./Component/SupplierList";
import CustomerList from "./Component/CustomerList";
import AddCustomer from "./Component/AddCustomer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,

    children: [
      {
        index: true,
        element: <Supplier />,
      },
      {
        path: "/AddSupplier",
        element: <AddSupplier />
      },
      {
        path: "/SupplierList",
        element: <SupplierList />,
      },
      {
        path: "/AddCustomer",
        element: <AddCustomer />,
      },
      {
        path: "/CustomerList",
        element: <CustomerList />
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
