import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"


interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Header />
                    { children }
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <Sidebar />
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default Layout