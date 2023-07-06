import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pages from "./pages/export";

export default function Master() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Pages.Home />
    }
  ],{
    basename: "/jlcc-folder"
  })
  return (
    <RouterProvider router={routes} />
  )
}