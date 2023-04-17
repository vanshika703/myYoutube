import Header from "./components/Header";
import Body from "./components/Body";
import Mainbar from "./components/Mainbar";
import Watchpage from "./components/Watchpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Mainbar />,
      },
      {
        path: "/watch",
        element: <Watchpage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
