import './App.css'
import MainContent from "@/components/main-content.tsx";
import SideBar from "@/components/layout-sidebar.tsx";

function App() {
    return (
        <>
            <SideBar>
                <MainContent/>
            </SideBar>
        </>
    )
}

export default App
