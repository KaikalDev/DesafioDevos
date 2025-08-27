import { styled } from 'styled-components'

export const ToggleContainer = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.bg_code};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.bg_gray};
  }
`

export const ThumbWrapper = styled.div<{ isDark: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ isDark }) => (isDark ? '45px' : '5px')};
  transform: translateY(-40%);
  width: 30px;
  height: 30px;
  transition: left 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`
