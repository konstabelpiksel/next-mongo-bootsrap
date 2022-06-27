//user dashboard
import React, { useState } from "react";
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react'

//bootstrap
import { Container, Row, Col } from 'reactstrap';

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx);

    //check if session exist
    if (session) {
        return {
            props: {
                what: what
            }
        }
    }
    return {
        props: {
            notlogged: true
        }
    }
}

export default function UserDashboard() {

    const { data: session, status } = useSession();
    const loading = status === "loading";
    const router = useRouter();

    return (
        <Container>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
            />

            <h2>Dashboard</h2>
            <Row>
                <Col>
                    Dashboard
                </Col>
                <a
                    href={`/api/auth/signout`}
                    onClick={(e) => {
                        e.preventDefault()
                        signOut({
                            callbackUrl: `/`
                        })
                    }}
                >LOGOUT
                </a>
            </Row>
        </Container>

    );
};

UserDashboard.auth = true;
