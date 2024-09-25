import React from "react";
import MyInputFormTab from "@/app/components/InputFormTab";

export default function Dashboard() {
    
    return (
        <React.Fragment>
            <div>
                <MyInputFormTab/>
            </div>

            <footer>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 Nightleaf. All rights reserved.
                </p>
            </footer>
        </React.Fragment>
    )
}