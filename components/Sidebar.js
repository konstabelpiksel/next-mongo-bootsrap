import Link from 'next/link';
import { signOut } from 'next-auth/react'

//styling
import styles from '@/styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <>
            <nav className={styles.sidebar}>
                <div className={styles.sidebarheader}>
                    <h3>GFIS HRMS v0.1</h3>
                </div>

                <hr />

                <ul className="list-unstyled">
                    <li>
                        <Link href="/gas">
                            <a href="#">GAS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gls">
                            <a href="#">GLS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gbs">
                            <a href="#">GBS</a>
                        </Link>
                    </li>
                    <li>
                        <a
                            href={`/api/auth/signout`}
                            className={styles.button}
                            onClick={(e) => {
                                e.preventDefault()
                                signOut({
                                    callbackUrl: `/`
                                })
                            }}
                        >LOGOUT
                        </a>
                    </li>
                </ul>

               
                <hr />
                <footer className="footer px-3">
                    <div className="text-center">
                        <p><small>Copyright © GFIS {new Date().getFullYear()}<br />Powered by GFiS</small></p>
                    </div>
                </footer>
            </nav>
        </>
    )
}
