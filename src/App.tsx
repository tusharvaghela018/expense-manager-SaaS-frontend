import { Provider } from "react-redux"
import { store } from "@/Redux/store"
import Route from "@/Router"


function App() {

  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

export default App
