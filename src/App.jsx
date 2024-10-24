import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Sidebar from "./components/sidebar/Sidebar.jsx";
import Footer from "./components/footer/Footer.jsx";
import AppRouter from "./router/AppRouter.jsx";

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
            <Sidebar/>
            <div style={{paddingLeft: '64px'}}>
                <QueryClientProvider client={queryClient}>
                    <AppRouter/>
                </QueryClientProvider>
                <Footer/>
            </div>
        </>
    )
}

export default App
