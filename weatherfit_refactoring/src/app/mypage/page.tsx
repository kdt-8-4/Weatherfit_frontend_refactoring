// "use client"

import ProfileHeader from "@/Components/molecules/ProfileHeader";
import ProfileInfo from "@/Components/molecules/ProfileInfo";
import ProfilePost from "@/Components/molecules/ProfilePost";
import ProfilePostBar from "@/Components/molecules/ProfilePostBar";

export default function Mypage() {
    return(
        <>
        <ProfileHeader />
        <br />
        <ProfileInfo />
        <br />
        <ProfilePostBar />
        <br />
        <ProfilePost />
        </>
    )
}