import styled from 'styled-components'

export const ComandoContainer = styled.li`
  position: relative;
  background-color: transparent;
  border-radius: 6px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  .comando {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
      &__titulo {
        font-weight: bold;
      }
      &__copy {
        background: none;
        border: none;
        cursor: pointer;
        padding: 6px;
        border-radius: 4px;
        transition: background 0.2s, color 0.2s;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
    &__codigo {
      background-color: ${({ theme }) => theme.bg_code};
      padding: 8px 12px;
      border-radius: 6px;
      overflow-x: auto;
      margin: 0 0 8px 0;
      border: 1px solid ${({ theme }) => theme.border};
    }
    &__descricao {
      font-size: 12px;
      color: #8b949e;
      margin-top: 4px;
    }
  }
`

export const CopyNotification = styled.div`
  position: absolute;
  top: -30px;
  right: 10px;
  background-color: #4caf50;
  color: #fff;
  padding: 6px 12px;
  border-radius: 5px;
  opacity: 0.95;
  pointer-events: none;
  animation: fadeOut 3s forwards;

  @keyframes fadeOut {
    0% {
      opacity: 0.95;
      transform: translateY(0);
    }
    80% {
      opacity: 0.95;
      transform: translateY(-5px);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`
