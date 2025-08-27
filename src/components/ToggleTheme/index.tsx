import '@theme-toggles/react/css/Classic.css'
import { Classic } from '@theme-toggles/react'
import { ThumbWrapper, ToggleContainer } from './styles'

interface ThemeToggleProps {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeToggle = ({ isDark, toggleTheme }: ThemeToggleProps) => (
  <ToggleContainer onClick={toggleTheme}>
    <ThumbWrapper isDark={isDark}>
      {/* @ts-expect-error: tipos incompletos */}
      <Classic
        toggled={isDark}
        toggle={toggleTheme}
        duration={750}
        className="theme-toggle"
        style={{ fontSize: '30px' }}
      />
    </ThumbWrapper>
  </ToggleContainer>
)

export default ThemeToggle
