import { useState } from 'react'
import { ComandoContainer, CopyNotification } from './styles'

type Props = {
  comando: Comando
}

const ComandoBox = ({ comando }: Props) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }
  return (
    <ComandoContainer className="comando">
      <div className="comando__header">
        <p className="comando__header__titulo">Comando</p>
        <button
          className="comando__header__copy"
          onClick={() => handleCopy(comando.comando)}
          title="Copiar comando"
        >
          📋
        </button>
      </div>
      <p className="comando__codigo">{comando.comando}</p>
      <div className="comando__header">
        <p className="comando__header__titulo">Exemplo</p>
        <button
          className="comando__header__copy"
          onClick={() => handleCopy(comando.exemplo)}
          title="Copiar exemplo"
        >
          📋
        </button>
      </div>
      <pre className="comando__codigo">{comando.exemplo}</pre>
      <p className="comando__descricao">{comando.descricao}</p>
      {copied && <CopyNotification>✅ Copiado!</CopyNotification>}
    </ComandoContainer>
  )
}

export default ComandoBox
