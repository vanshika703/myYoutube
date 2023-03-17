import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Mainbar from "./components/Mainbar";
import Watchpage from "./components/Watchpage";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path: "/",
        element: <Mainbar/>
      },
      {
        path: "/watch",
        element: <Watchpage/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
