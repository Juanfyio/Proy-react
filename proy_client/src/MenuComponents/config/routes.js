import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";
import Signin from "../pages/Admin/Signin";
import GeneralLayout from "../layouts/GeneralLayout";

const routesAdmin = [
  { path: "/admin", layout: GeneralLayout, Component: Signin },
  { path: "/admin/contact", layout: GeneralLayout, Component: Contact },
];

const routesGeneral = [
  { path: "/", layout: GeneralLayout, Component: Home },
  { path: "*", layout: GeneralLayout, Component: NotFound},
];

const projectRoutes = [...routesAdmin, ...routesGeneral];
export default projectRoutes;
