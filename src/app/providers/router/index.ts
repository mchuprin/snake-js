import { createBrowserRouter } from "react-router";
import { Main } from "../../../pages/main/ui/Main";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Main,
	},
]);

export default router;
