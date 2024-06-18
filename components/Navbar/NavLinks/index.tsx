import {Session} from 'next-auth'
import {signOut} from 'next-auth/react'
import React from 'react'
import styles from '../styles.module.scss'
import Image from 'next/image'

interface Props {
  session: Session
}

const navLinks = [
  {
    link_title: 'Início',
    icon_path: '/images/home-icon.png',
    icon_alt: 'Início Ícone',
  },
  {
    link_title: 'Pesquisar',
    icon_path: '/images/search-icon.png',
    icon_alt: 'Pesquisar Ícone',
  },
  {
    link_title: 'Minha lista',
    icon_path: '/images/watchlist-icon.png',
    icon_alt: 'Minha lista Ícone',
  },
  {
    link_title: 'Originais',
    icon_path: '/images/originals-icon.png',
    icon_alt: 'Originais Ícone',
  },
  {
    link_title: 'Filmes',
    icon_path: '/images/movie-icon.png',
    icon_alt: 'Filmes Ícone',
  },
  {
    link_title: 'Séries',
    icon_path: '/images/series-icon.png',
    icon_alt: 'Séries Ícone',
  },
]

function SignedInHeader({session}: Props) {
  const image = session?.user?.image as string
  const name = session?.user?.name as string
  return (
    <>
      <div className={styles.nav_menu}>
        {navLinks.map((items, index) => (
          <a key={index}>
            <img src={items.icon_path} alt={items.icon_alt} />
            <span className={styles.link_title}>{items.link_title}</span>
          </a>
        ))}
      </div>
      <div className={styles.sign_out}>
        {session !== null ? (
          <Image className={styles.user_img} src={image} alt={name} />
        ) : null}
        <div className={styles.dropdown}>
          <span onClick={() => signOut()}>SignOut</span>
        </div>
      </div>
    </>
  )
}

export default SignedInHeader
