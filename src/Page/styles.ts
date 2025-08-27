import styled from 'styled-components'

export const Header = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  > div {
    display: flex;
    justify-content: space-between;
  }
  img {
    height: 48px;
  }
`
export const ButtonsContainer = styled.section`
  padding-block: 32px;

  .buttons {
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    &__box {
      border: 1px solid ${({ theme }) => theme.border};
      padding: 20px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        background-color: rgba(255, 255, 255, 0.1);
      }

      &__logo {
        display: flex;
        align-items: center;
        gap: 12px;

        img {
          height: 48px;
          border-radius: 50px;
        }
      }
    }
  }
`
export const ComandosContainer = styled.section`
  .comandos {
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
`
