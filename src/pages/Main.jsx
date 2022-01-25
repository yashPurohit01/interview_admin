import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import styles from "../styles/pages/home.module.scss"
import global from "../styles/pages/global.module.scss"

import Navigation_main from '../components/navigation/main';
import { useSelector } from 'react-redux';



function Main() {
    const auth = useSelector(state => state.auth);
    const { isLoading } = auth
    return (
        <>
            {
                !isLoading ?



                    <section className={`${global.parentContainer} ${styles.home}`}>

                        {/* Main Navigation On Left Side */}
                        <section className={global.level_1}>
                            <Navigation_main />
                        </section>


                        <Outlet />

                    </section >
                    : "loading.."
            }
        </>
    )
}

export default Main
