import { Button } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from "./SidebarOption"
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {IconButton} from "@material-ui/core"
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch} from "react-redux"
import {openSendMessage} from "./features/mailSlice"

function Sidebar() {
    const dispatch =useDispatch();
    return (
        <div className="sidebar">
            <Button onClick={() => dispatch(openSendMessage())} className="sidebar__compose" startIcon={<AddIcon fontSize="large" />}>Composed</Button>
            <SidebarOption selected={true} Icon={InboxIcon} title={"Inbox"} number={54}/>
            <SidebarOption Icon={StarIcon} title={"Starred"} number={55}/>
            <SidebarOption Icon={AccessTimeIcon} title={"Snooed"} number={55}/>
            <SidebarOption Icon={LabelImportantIcon} title={"important"} number={55}/>
            <SidebarOption Icon={NearMeIcon} title={"send"} number={55}/>
            <SidebarOption Icon={NoteIcon} title={"Draft"} number={55}/>
            <SidebarOption Icon={ExpandMoreIcon} title={"More"} number={55}/>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton> 
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
