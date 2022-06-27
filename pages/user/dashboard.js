//user dashboard
import React, { useState } from "react";
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

//layout
import Layout from "@/components/Layout";

//bootstrap
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//dashboard services
import { APIfetch } from "@/lib/APIservices";

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx);

    //check if session exist
    if (session && session.user.email) {

        //if it does, get user roles in subsystems    
        const roles = await APIfetch.getRoles(session.user.email);
        return {
            props: {
                userRoles: JSON.stringify(roles)
            }
        }
    }
    return {
        props: {
            notlogged: true
        }
    }
}

export default function UserDashboard(props) {

    const { data: session, status } = useSession();
    const loading = status === "loading";
    const router = useRouter();

    return (
        <Layout session={session}>
            <Container fluid className="px-4 py-2 w-100">

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={true}
                />

                <h2>Dashboard</h2>
                <Row>
                    <Col>
                        <h1>Hello Dashboard</h1>
                    </Col>
                </Row>

            </Container>
        </Layout>

    );
};

UserDashboard.auth = true;
