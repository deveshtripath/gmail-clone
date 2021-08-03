import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar,IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    const SignOut =() =>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
        
    }

    return (
        <div className="header">
           <div className="header__left">
           <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src ="https://www.iphonehacks.com/wp-content/uploads/2020/06/Gmail-Icon.jpg" alt =""/>
            {/* https://cdn.iconscout.com/icon/free/png-64/gmail-12-282379.png */}
           </div>
           <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon className="header__inputCaret"/>
           </div>
           <div className="header__right">
               <IconButton>
                   <AppsIcon/>
               </IconButton>
               <IconButton>
                   <NotificationsIcon/>
               </IconButton>
               <Avatar onClick={SignOut} src={user?.photoUrl} />
           </div>
        </div>
    )
}

export default Header
