import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/modules/Header/Header";
import Footer from "./components/modules/Footer/Footer";
import SingleFood from "./pages/singleFood";
import {ReactQueryDevtools} from "react-query/devtools"
import Foods from "./pages/Foods";
import Dashboard from "./pages/dashboard";

function App() {


  const client = new QueryClient({
    defaultOptions : {
      queries : {
        cacheTime : 90000,
        staleTime : 20000,
        keepPreviousData : true
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods/:id" element={<Foods />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/food/:id" element={<SingleFood />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App
