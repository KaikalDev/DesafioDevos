declare type Comando = {
  comando: string
  descricao: string
  exemplo: string
}

declare type Section = {
  icon: string
  descricao: string
  comandos: Comando[]
}

declare type SectionName = {
  name: string
  icon: string
  descricao: string
  comandos: Comando[]
}

declare type ApiResponse = {
  github: Section
  linux: Section
}
