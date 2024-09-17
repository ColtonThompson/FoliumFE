import React from "react";
import DashboardNavbar from "@/app/dashboard/components/navbar";
import Footer from "@/app/ui/footer";


export default function Dashboard() {

    return (
        <React.Fragment>
            <head>
                <title>Dashboard</title>
            </head>
            <div>
                <DashboardNavbar />
            </div>

            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    )
}