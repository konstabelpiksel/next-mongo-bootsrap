import React, { useState } from 'react';

//nextjs
import Head from 'next/head';

//components
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Layout({ title, keywords, description, children, session }) {
    const [dashsidebar, setDashsidebar] = useState(false);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charset="utf-8" />
            </Head>
            <div className="d-flex">
                {dashsidebar? <Sidebar session={session}/> : null}
                <div className="w-100">
                    <Navbar dashsidebar={dashsidebar} setDashsidebar={setDashsidebar} session={session}/>
                    {children}
                </div>

            </div>
        </>
    )
}

Layout.defaultProps = {
    title: "GFIS HRIS v0.1",
    description: "GFIS Human Resource Info System",
    keywords: "gfis, resource, management, hris, human resource"
  }
  
