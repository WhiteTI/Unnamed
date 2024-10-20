import {Navigate, Route, Routes} from "react-router-dom";
import CharactersPage from "../pages/CharactersPage.jsx";
import SingleCharacterPage from "../pages/SingleCharacterPage.jsx";
import Overview from "../overview/Overview.jsx";
import Build from "../build/Build.jsx";
import Constellation from "../constellation/Constellation.jsx";
import Page404 from "../pages/Page404.jsx";
import Admin from "../pages/Admin.jsx";
import Login from "../login/Login.jsx";
import {useState} from "react";
import CharacterList from "../characterList/CharacterList.jsx";
import WeaponsList from "../weaponsList/WeaponsList.jsx";
import ArtifactsList from "../artifactsList/ArtifactsList.jsx";
import Select from "../admin/Select.jsx";
import CreateCharacter from "../admin/CreateCharacter.jsx";
import CreateWeapon from "../admin/CreateWeapon.jsx";
import CreateArtifact from "../admin/CreateArtifact.jsx";
import Teams from "../teams/Teams.jsx";

const AppRouter = () => {
    const [isLogin, setIsLogin] = useState(false)

    return (
        <Routes>
            <Route element={<CharactersPage/>}>
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

            <Route path='/admin' element={<Admin isLogin={isLogin}/>}>
                <Route index element={<Select/>}/>
                <Route path='create-character' element={<CreateCharacter/>}/>
                <Route path='create-weapon' element={<CreateWeapon/>}/>
                <Route path='create-artifact' element={<CreateArtifact/>}/>
            </Route>

            <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>}/>

            <Route path='*' element={<Page404/> }/>
        </Routes>
    );
};

export default AppRouter;