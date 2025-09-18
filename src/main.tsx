import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./app/providers/router";
import { RouterProvider } from "react-router";
import "@app/styles"

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
} else {
  console.error('Root element not found');
}

