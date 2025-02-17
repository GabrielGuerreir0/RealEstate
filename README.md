# 📦 Projeto Real Estate

Este é um projeto desenvolvido com **Angular**, focado em [descreva brevemente o objetivo do projeto, por exemplo: "gestão de tarefas", "dashboard de análise", "aplicação de controle de estoque", etc.].

## 🚀 Tecnologias Utilizadas

- **Angular** (versão mais recente)
- **Node.js** v20.14.0
- **npm** v10.7.0

## ⚙️ Requisitos

- Node.js (>= 20.14.0)
- npm (>= 10.7.0)
- Angular CLI (instalar com `npm install -g @angular/cli`)

## 📥 Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:GabrielGuerreir0/RealEstate.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## 🚀 Como Executar

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

ou se achar melhor utilizar o Docker:

```bash
docker-compose up -d --build estate-dev
```

Acesse o aplicativo em [http://localhost:8200](http://localhost:8200).

## 🗂️ Estrutura do Projeto

```
Real Estate/
├── src/
│   ├── app/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── services/      # Serviços para APIs
│   │   └── app.module.ts  # Módulo principal do Angular
│   ├── assets/            # Imagens e outros recursos
│   └── index.html         # Página principal
├── angular.json           # Configurações do Angular CLI
├── package.json           # Dependências do projeto
├── tsconfig.json          # Configuração do TypeScript
├── Dockerfile.dev         # Configuração da imagem Docker
└── docker-compose.yml     # Configuração d orquestração dos containers
```

## 📝 Scripts Disponíveis

- `ng serve` - Inicia o servidor de desenvolvimento
- `ng build` - Gera o build para produção
- `ng test` - Executa os testes unitários

## 📦 Build para Produção

```bash
ng build --prod
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📄 Gerar Páginas e Componentes

### Criar um novo componente

```bash
ng generate component components/nome-do-componente
# ou abreviado
ng g c components/nome-do-componente
```

### Criar uma nova página (módulo com roteamento)

```bash
ng generate module nome-da-pagina --route nome-da-pagina --module app
# ou abreviado
ng g m nome-da-pagina --route nome-da-pagina --module app
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature-nova`)
3. Faça suas alterações e commit (`git commit -m 'Nova funcionalidade'`)
4. Envie para o repositório (`git push origin feature-nova`)
5. Abra um Pull Request

## 🗒️ Licença

Copyright (c) 2025 Real Estate.
