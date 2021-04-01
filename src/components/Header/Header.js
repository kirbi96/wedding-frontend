import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {NavLink} from "react-router-dom";
import "./Header.css"

const Header = () =>{
    const auth = useContext(AuthContext)

    return(
        <div className="d-flex flex-row justify-content-between">
            <div>
                <NavLink style={{marginLeft: 0}} className="nav_link" exact to="/" activeClassName="nav_link-active">Главная</NavLink>
                <NavLink className="nav_link" exact to="/all-organizations" activeClassName="nav_link-active">Организации</NavLink>
                <NavLink className="nav_link" exact to="/users" activeClassName="nav_link-active">Пользователи</NavLink>
                <NavLink className="nav_link" exact to="/news" activeClassName="nav_link-active">Новости</NavLink>
                <NavLink className="nav_link" exact to="/admin" activeClassName="nav_link-active">Админка</NavLink>
            </div>
            <div onClick={auth.logout} className="btn btn-primary col-2">выйти</div>
        </div>
    )

}

export default Header
