"use client";

import { User } from "@/contexts/Usercontext";
import { useContext } from "react";

const page = (props) => {
    const [names, setnames] = useContext(User);
    console.log(names);
    return (
        <div>
            <h1>sfsfsf</h1>
        </div>
    );
};

export default page;