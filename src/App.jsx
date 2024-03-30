import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Layout,Hero,Rooms,SingleRooms,FourZeroFour } from "./sections"
function App() {
 

  return (
      <div>
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
      </div>

  )
}

export default App
