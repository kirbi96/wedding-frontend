import {Switch, Route, Redirect} from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Reg from "./pages/Auth/Reg";
import Home from "./pages/Lk/Home/Home";
import AddOrganization from "./pages/Lk/Organization/AddOrganization";
import AllOrganizations from "./pages/Lk/Organization/AllOrganizations";
import Header from "./components/Header/Header";
import News from "./pages/Lk/News/News";
import Admin from "./pages/Lk/Admin/Admin";

const useRoutes = isAuth =>{


    if(!isAuth){
        return (
            <Switch>
                <Route path="/reg" component={Reg} />
                <Route path="/" component={Auth}/>
                <Redirect to="/"/>
            </Switch>
        )
    } else {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/add-organization" component={AddOrganization}/>
                    <Route path="/all-organizations" component={AllOrganizations}/>
                    <Route path="/news" component={News}/>
                    <Route path="/admin" component={Admin}/>
                    <Redirect to="/"/>
                </Switch>
            </>

        )
    }
}

export default useRoutes
