import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qosqomposta | Bienvenidos a una vida sin basura</title>
        <meta name="description" content="Qosqomposta - Startup Ecosostenible" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a Qosqomposta !
        </h1>
        <Image alt="Logo Qosqomposta" src="/images/logoQosqomposta.jpg" width={250} height={250} />
        {/* <p className={styles.description}>
          Estamos trabajando para lanzar nuestro sitio web
        </p> */}
        {/* <p className={styles.subdescription}>
          Estaremos en vivo muy pronto...
        </p> */}
        <div className={styles.reporte}>
          <h2>
            Reporte 2021 <span>Qompostero !</span>
          </h2>
          <p>
              <span>35 838kg </span>
              de residuos orgánicos netos para compostar
          </p>
          <p>
            Esto equivale a 
          </p>
          <ul>
            <li><span>198</span> Árboles plantados</li>
            <li><span>32</span> Toneladas de CO2 evitados en la atmósfera</li>
            <li><span>82</span> Carros sacados de circulación</li>
            <li><span>170</span> Litros de gasolina ahorrados por el uso de bicicletas</li>
          </ul>
          <h3>!Por un 2022 lleno de compost !</h3>
          <h4>Todo esto no sería posible sin tu compromiso</h4>
        </div>
        <a className={styles.button} href="https://docs.google.com/forms/d/e/1FAIpQLSdqooaViePpe84wgvXvs2zYubLUz5MaAoQWldChauBwvs9RHg/viewform">Únete al Movimiento Qompostero</a>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright 2021 - Qosqomposta
        </a>
      </footer>
    </div>
  )
}
