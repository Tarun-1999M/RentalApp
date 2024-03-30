import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Layout,Hero,Rooms,SingleRooms,FourZeroFour } from "./sections"
import Context  from "./Context"
function App() {
 

  return (
      <div>
         <Context>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}> 
                <Route index element={<Hero />} />
                <Route path="rooms" element={<Rooms />} />
                <Route path="rooms/:slug" element={<SingleRooms />} />
                <Route path ="*" element={<FourZeroFour />} />
              </Route>
            </Routes>
          </BrowserRouter>
          </Context>
      </div>

  )
}

export default App
