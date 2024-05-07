import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromChildren,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import App from "../App";

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
				path={"/"}
				element={<App />}>
				<Route
					path={"*/"}
					element={
						<>
							<h1>dashboard</h1>
						</>
					}>
					<Route
						path={ROUTE_NAMES.newEntry}
						element={
							<>
								<h2>New Entry Modal</h2>
							</>
						}
					/>
					<Route
						path={ROUTE_NAMES.editEntry}
						element={
							<>
								<h2>Edit Entry Modal</h2>
							</>
						}
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
					<>
						<h1>404</h1>
					</>
				}
			/>
		</>
	)
);

export default function Router() {
	return <RouterProvider router={router} />;
}
