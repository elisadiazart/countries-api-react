import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return <>
		<GlobalStyles/>
		<header>
			<Nav/>
		</header>
		<Main/>
	</>
};

export default App;
