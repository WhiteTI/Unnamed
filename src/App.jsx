import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import AppRouter from "./components/router/AppRouter.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

function App() {
    return (
        <>
            <Header/>
            <main>
                <QueryClientProvider client={queryClient}>
                    <AppRouter/>
                </QueryClientProvider>
            </main>
            <Footer/>
        </>
    )
}

export default App
