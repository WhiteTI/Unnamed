import {Navigate, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Header from "./components/header/Header.jsx";
import CharactersPage from "./components/pages/CharactersPage.jsx";
import SingleCharacterPage from "./components/pages/SingleCharacterPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import Overview from "./components/overview/Overview.jsx";
import Page404 from "./components/pages/Page404.jsx";
import Constellation from "./components/constellation/Constellation.jsx";
import {useState} from "react";
import Admin from "./components/pages/Admin.jsx";
import Build from "./components/build/Build.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

function App() {
    const [isAdmin, setIsAdmin] = useState(true)

    return (
        <>
            <Header/>
            <main>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path='/characters' element={<CharactersPage/>}/>
                        <Route path='/characters/:id' element={<SingleCharacterPage/>}>
                            <Route path='overview' element={<Overview/>}/>
                            <Route path='builds' element={<Build/>}/>
                            <Route path='constellation' element={<Constellation/>}/>
                            <Route path='teams' element={<p>teams</p>}/>
                            <Route path='gallery' element={<p>gallery</p>}/>
                        </Route>
                        <Route path='/' element={<Navigate to='/characters'/>}/>
                        <Route path='*' element={<Page404/> }/>

                        {isAdmin && <Route path='/admin' element={<Admin/>} />}
                    </Routes>
                </QueryClientProvider>
            </main>
            <Footer/>
        </>
    )
}

export default App
