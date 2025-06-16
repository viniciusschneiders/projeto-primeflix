# Projeto PrimeFlix - ReactJS

Projeto com intuito de trabalhar alguns conceitos de React e evoluir com JavaScript.

Ministrado pelas aulas do SujeitoProgramador, Curso FullStack - JS.

### Todo o conteúdo escrito do Readme, não foi copiado de nenhum local, é apenas meu entendimento e anotações consideradas importantes para compreensão do desenvolvimento da aplicação.

## 1° Etapa - Instalação e Higienização

Começo fazendo a criação com o `npx create-react-app projeto-primeflix`

Faço a limpeza dos arquivos que não são necessários/utilizáveis no projeto. (app.css / app.test.js / logo.svg / setupTests.js)


## 2° Etapa - Criação de Rotas

Nesta etapa, faço a criação das pastas e componentes que serão utilizados nas rotas.

Para este projeto, é criado os componentes `Home` e `Filme`. 

Home = Página Principal | Filme = Página com Detalhes do Filme

Após criarmos as pastas, podemos pausar nossa aplicação e instalar o pacote responsável por gerenciar a navegação entre as nossas páginas, sem necessidade de recarregamento -> `npm install react-router-dom`

Após instalação dos pacotes, rodamos novamente a aplicação -> `npm start` + Criação do arquivo de rotas -> `routes.js`.

Dentro de `routes.js`, vamos importar nossa biblioteca recém instalada utilizando os seguintes imports:

`import {BrowserRouter, Routes, Route} from 'react-router-dom’`

Onde cada importação tem sua devida função:

`BrowserRouter` = Define o sistema de rotas.
`Routes` e `Route` = Mapeiam URL's para componentes, como por exemplo /filme -> componente Filme

Adicionamos também, a importação dos componentes que serão utilizados nas rotas:

`import Home from './pages/Home`
`import Home from './pages/Filme`

Após realizar as importações, realizamos a criação da nossa function `RoutesApp()`, responsável por mapear e configurar nossas Rotas e Componentes.

Depois de configurar nossos path e elements, renderizamos dentro do `app.js`, nosso componente `<RoutesApp/>`


## 3° Etapa - Criação do Header

Criação da pasta `components`, onde ficará nossos componentes reutilizáveis, incluíndo nosso Header.

Fazemos a criação do nosso componente de Header `/Header/index.js`

Após essa criação, precisamos renderizar em todas as nossas rotas, para isto ocorrer, vamos importar nosso componente dentro do `routes.js` + adicionar dentro o nosso componente dentro `BrowserRouter` antes das rotas.

Após a criação e inclusão nas rotas, fazemos a criação das tags do nosso `/Header/index.js` onde linkamos e encaminhamos para as rotas, como por exemplo ` <Link className='logo' to ='/'>Prime Flix</Link>`

Com isto, começamos a estilização do nosso Header, configurando com Display Flex + estilizações necessárias.



## 4° Etapa - Criação + Consumir API

Nesta etapa, criamos nossa conta no local onde vamos consumir a API, no site https://www.themoviedb.org/, onde criamos nossa API KEY

Para consumir a API, vamos utilizar o pacote `axios`.

Pausamos a aplicação e instalamos o pacote com `npm install axios`

Realizamos a criação e mapeamento da API, com a criação da pasta `services/api.js`. Dentro de `/api.js`, utilizamos a biblioteca `axios` para criar a base da URL da nossa API, criando a constante chamada `api`


## 5° Etapa - Criação da Página Home


## 6° Etapa - Criação da Página Filmes


## 7° Etapa - Criação de "Página não encontrada!" + Configuração de Loading da Página


## 8° Etapa - Edição da Página Detalhes do Filme

Nesta etapa, vamos realizar a estilização da página Detalhes do Filme, utilizando CSS para centralizar e personalizar as informações contida da página.