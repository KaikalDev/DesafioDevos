import { useEffect, useMemo, useState } from 'react'
import Logo from '../Assets/devosnova.png'
import * as S from './styles'
import { useGetAllQuery } from '../services/api'
import ThemeToggle from '../components/ToggleTheme'
import ComandoBox from '../components/ComandoBox'

type Props = {
  toggleTheme: () => void
  isDark: boolean
}

const Page = ({ toggleTheme, isDark }: Props) => {
  const { data } = useGetAllQuery()

  const sections = useMemo<SectionName[]>(() => {
    if (!data) return []
    return [
      { name: 'GitHub', ...data.github },
      { name: 'Linux', ...data.linux }
    ]
  }, [data])

  const [active, setActive] = useState<SectionName | null>(null)

  useEffect(() => {
    if (sections.length > 0) {
      setActive(sections[0])
    }
  }, [sections])

  return (
    <>
      <S.Header className="header">
        <div className="container">
          <img className="header__logo" src={Logo} alt="Devos" />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </S.Header>
      <main>
        <S.ButtonsContainer className="buttons">
          <div className="container">
            <h2 className="Title">Ecolha uma das opções: </h2>
            <ul className="buttons__list">
              {sections.map((section, i) => (
                <li
                  className="buttons__box"
                  key={i}
                  onClick={() => setActive(section)}
                >
                  <div className="buttons__box__logo">
                    <img src={section.icon} alt={section.name} />
                    <h2>{section.name}</h2>
                  </div>
                  <p className="buttons__box__text">{section.descricao}</p>
                </li>
              ))}
            </ul>
          </div>
        </S.ButtonsContainer>
        <S.ComandosContainer className="comandos">
          <div className="container">
            <h2 className="Title">Comandos do {active?.name}:</h2>
            <ul className="comandos__list">
              {active?.comandos.map((c, i) => (
                <ComandoBox comando={c} key={i} />
              ))}
            </ul>
          </div>
        </S.ComandosContainer>
      </main>
    </>
  )
}

export default Page
