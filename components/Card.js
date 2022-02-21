
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Card.module.css'

export function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.btn}>Detalhes</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()
  
    // add pokemon index
    data.results.forEach((item, index) => {
      item.id = index + 1
    })
  
    return {
      props: {
        pokemons: data.results,
      },
    }
  }
  