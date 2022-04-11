import React from 'react';
import { ImHome } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { RiSafe2Line } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsFillChatQuoteFill } from "react-icons/bs";


export const sideBarData = [
    {
        title: "Home",
        icon: <ImHome />,
        link: "/"

    },

    {
        title: "Artists",
        icon: <CgProfile />,
        link: "/Artist"

    },

    {
        title: "Song Volt",
        icon: <RiSafe2Line />,
        link: "/Volt"

    },

    {
        title: "Apps",
        icon: <AiOutlineAppstore />,
        link: "/Apps"

    },

    {
        title: "Community",
        icon: <BsFillChatQuoteFill />,
        link: "/community"

    },
];