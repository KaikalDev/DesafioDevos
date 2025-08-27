import { useEffect, useState } from 'react'
import Logo from '../Assets/devosnova.png'
import { useGetAllQuery } from '../services/api'

const Page = () => {
  const { data } = useGetAllQuery()
  const [active, setActive] = useState(data?.github)

  useEffect(() => {
    if (data) {
      setActive(data.github)
    }
  }, [data])

  if (!data) return <p>Carregando...</p>

  return (
    <>
      <header>
        <img src={Logo} alt="Devos" />
      </header>
      <section>
        <div onClick={() => setActive(data.github)}>
          <div>
            <img src={data.github.icon} alt="GitHub" />
            <p>GitHub</p>
          </div>
          <p>{data.github.descricao}</p>
        </div>
        <div onClick={() => setActive(data.linux)}>
          <div>
            <img src={data.linux.icon} alt="Linux" />
            <p>Linux</p>
          </div>
          <p>{data.linux.descricao}</p>
        </div>
      </section>
      <section>
        <ul>
          {active?.comandos.map((c, i) => (
            <li key={i}>
              <p>{c.comando}</p>
              <p>{c.descricao}</p>
              <p>{c.exemplo}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Page
