import { Checkbox,IconButton } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import "./MailList.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Inbox from '@material-ui/icons/Inbox';
import Section from "./Section"
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import EmailRow from './EmailRow';
import {db } from "./firebase";

function MailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp','desc').onSnapshot(
            snapshot=> setEmails(snapshot.docs.map(doc => ({
                id:doc.id,
                data: doc.data(),

            })))
        )
    }, []);



    return (
        <div className="mailList">
            <div className="emailList__setting">
                <div className="emailList__settingLeft">
                    <Checkbox/>
                    <IconButton>
                            <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingRight">
                <IconButton>
                            <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__section">
                <Section Icon={Inbox} title="primary" color="red" selected />
                <Section Icon={PeopleIcon} title="primary" color="#1a73e8"  />
                <Section Icon={LocalOfferIcon} title="primary" color="green"  />
            </div>
            <div className="emailList__list">
            {emails.map(({id , data: {to,subject,message,timestamp}}) =>(
                    <EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
            </div>
        </div>
    )
}

export default MailList
