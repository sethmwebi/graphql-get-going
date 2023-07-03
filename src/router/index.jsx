import { createBrowserHistory } from "history"
import { Switch } from "react-router-dom";

import Index from "../pages/Index/index.jsx";
import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";
import Book from "../pages/Book/index.jsx";
 import NewBook from "../pages/NewBook/index.jsx";
import Search from "../pages/Search";
import ReviewBook from "../pages/ReviewBook/index.jsx";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

export const history = createBrowserHistory()

export function Routes() {
	return (
		<Switch>
			<PublicRoute exact path="/" component={Index} />
			<PrivateRoute exact path="/home" component={Home} />
			<PrivateRoute
				exact
				path="/book/:bookId/review/new"
				component={ReviewBook}
			/>
			<PrivateRoute
				exact
				path="/book/:bookId/review/:reviewId"
				component={ReviewBook}
			/>
			<PrivateRoute exact path="/book/new" component={NewBook}/>
			<PublicRoute exact path="/login" component={Login} />
			<PublicRoute exact path="/book/:id" component={Book} />
			<PublicRoute exact path="/search" component={Search} />
		</Switch>
	);
}
