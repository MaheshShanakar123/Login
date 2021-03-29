import React from 'react'
import { useHistory } from "react-router-dom";
import './css/NotFound.css'

function NotFound() {
    var history = useHistory();
    return (
        <div className="col-md-7 pagenotfound">
            <h2>Page Not Found 404 !</h2>
            <h5>You don't have access see to those links Please do Login!</h5>
            <a href="/login">login</a>
        </div>
    )
}

export default NotFound
