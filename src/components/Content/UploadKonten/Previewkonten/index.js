"use client"

import LargeContent from "./largeasideContent"
import SmallContent from "../../DashboardAdmin/DashboardContent/smallasideContent"
import MainContent from "./mainContent"
import AsideContainer from "@/components/Container/DashboardAdmin/asideContainer"

export default function PreviewKonten(){
    return(
    <>
        <MainContent />
        <AsideContainer>
            <SmallContent/>
            <LargeContent/>
        </AsideContainer>
    </>    
    )
}