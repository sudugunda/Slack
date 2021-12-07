import React from 'react'
import db from './firebase';
import './SidebarOption.css'
import './SidebarOption.css'
import { useNavigate } from "react-router-dom"

function SidebarOption({Icon, title, id, addChannelOption}) {

    // const history = useNavigate();
    const navigate = useNavigate();

    const selectChannel = () => {
        if(id) {
            // history.push(`/room/${id}`);
            navigate(`/room/${id}`);
            // navigate('/home');
        }else{
            // history.push(title);
            navigate(title);
        }
    }

    const addChannel = () => {
        
        const channelName = prompt('Please enter the channel name')

        if(channelName){
            db.collection('rooms').add({
                name: channelName
            })
        }
    };

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel }>
            { Icon && <Icon className="sidebarOption__icon" /> }
            { Icon ? (
                <h3 className="sidebarOption__channel">{title}</h3>
            ) : (
                <h3 className="sidebarOption__hash"># {title}</h3>
            )}
        </div>
    )
}

export default SidebarOption
