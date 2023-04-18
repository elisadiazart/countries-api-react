import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return <BrowserRouter>
		<GlobalStyles/>
		<Router/>
	</BrowserRouter>
};

export default App;
