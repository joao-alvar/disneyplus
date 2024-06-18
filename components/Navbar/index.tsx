import React from 'react'
import {useSession, signIn} from 'next-auth/react'
import SignedInHeader from './NavLinks'
import Image from 'next/image'
import styles from './styles.module.scss'

function Navbar() {
  const {data: session, status} = useSession()

  const renderNavbar = () => {
    if (session) return <SignedInHeader session={session} />
    return (
      <div className={styles.login_container}>
        <div className={styles.login} onClick={() => signIn()}>
          Login
        </div>
      </div>
    )
  }

  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney Logo"
      />
      {renderNavbar()}
    </nav>
  )
}

export default Navbar
