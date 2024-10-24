import {Navigate, Route, Routes} from "react-router-dom";

import MainPage from "../pages/MainPage.jsx";
import SingleCharacterPage from "../pages/SingleCharacterPage.jsx";
import Overview from "../components/overview/Overview.jsx";
import Build from "../components/build/Build.jsx";
import Constellation from "../components/constellation/Constellation.jsx";
import Page404 from "../pages/Page404.jsx";
import CharacterList from "../components/characterList/CharacterList.jsx";
import WeaponsList from "../components/weaponsList/WeaponsList.jsx";
import ArtifactsList from "../components/artifactsList/ArtifactsList.jsx";
import Teams from "../components/teams/Teams.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainPage/>}>
                <Route path='/characters' element={<CharacterList/>}/>
                <Route path='/weapons' element={<WeaponsList/>}/>
                <Route path='/artifacts' element={<ArtifactsList/>}/>
            </Route>

            <Route path='/characters/:id' element={<SingleCharacterPage/>}>
                <Route path='overview' element={<Overview/>}/>
                <Route path='builds' element={<Build/>}/>
                <Route path='constellation' element={<Constellation/>}/>
                <Route path='teams' element={<Teams/>}/>
                <Route path='gallery' element={<p>gallery</p>}/>
            </Route>

            <Route path='/' element={<Navigate to='/characters'/>}/>

            <Route path='*' element={<Page404/> }/>
        </Routes>
    );
};

export default AppRouter;