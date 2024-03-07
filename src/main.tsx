import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ErrorBoundary fallback={<p>Something went wrong. Try again later.</p>}>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
);
