import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import Providers from "@/components/providers";
export default function App() {
  return (
    <Providers>
      <RouterProvider router={routes} />
    </Providers>
  );
}
