import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromChildren,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import App from "../App";
import Dashboard, { dashboardRouteLoader } from "../pages/Dashboard/Dashboard";
import NewEntry from "../pages/Dashboard/Modals/NewEntry";
import EditEntry from "../pages/Dashboard/Modals/EditEntry";
import ErrorPage from "../pages/ErrorPage";

export const ROUTE_NAMES = {
	dashboard: "/",
	login: "login",
	newEntry: "new-entry",
	editEntry: "edit/:id",
};

const router = createBrowserRouter(
	createRoutesFromChildren(
		<>
			<Route
				errorElement={
					<ErrorPage
						error={"Internal App Error"}
						logout
						message={"Damn jew did it again..."}></ErrorPage>
				}
				path={"/"}
				element={<App />}>
				<Route
					loader={() => {
						console.log("revalidating");
						return dashboardRouteLoader();
					}}
					shouldRevalidate={() => true}
					action={() => {
						console.log("im here");
						return true;
					}}
					path={ROUTE_NAMES.dashboard}
					element={<Dashboard />}>
					<Route
						path={ROUTE_NAMES.newEntry}
						element={<NewEntry />}
					/>
					<Route
						path={ROUTE_NAMES.editEntry}
						element={<EditEntry />}
					/>
				</Route>
				<Route
					path={ROUTE_NAMES.login}
					element={<Login></Login>}
				/>
			</Route>
			<Route
				path="*"
				element={
					<ErrorPage
						error={"404 - Page Not Found"}
						message={"Oh no...terrible jew stole page"}
					/>
				}
			/>
		</>
	)
);

export default function Router() {
	return <RouterProvider router={router} />;
}
