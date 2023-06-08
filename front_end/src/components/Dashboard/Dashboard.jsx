import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import {createWallet} from '../../../src/redux/actions/walletActions';
import classnames from 'classnames';

export default function createWallet() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    const [wallet, setWallet] = useState({name:"", accountNumber:"", description:"", currentBalance: "", priority: ""});
    const error = useSelector((state) => state.error);

    function handleChange(event) {
        const { name, value} = event.target;
        setWallet(prevState => ({ ...prevState, [name]: value}));
    };

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(createWallet(userId, wallet, navigate));
    }

    return (
        <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Wallet</h5>
                        <hr />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}