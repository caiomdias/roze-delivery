![Roze Delivery](src/assets/images/png/logo.png)

Este projeto foi feito utilizando:

- React
- SCSS
- Jest
- Cypress
- ESLint

## Rodando o projeto

Para executar localmente configure o arquivo ```.env``` na raiz do projeto como o arquivo de exemplo ``` .env-example ```

instalar as dependencias

```sh
yarn
```

executar o comanddo

```bash
yarn start
```

E navegar para [http://localhost:9000](http://localhost:9000).

Para visualizar uma versão pública do projeto, acesse [https://roze-delivery.vercel.app/](https://roze-delivery.vercel.app/).

## Testes

Para executar testes unitários com o Jest execute o comando

```bash
yarn test
```


## Pesiveis melhorias

# Testes
- Adicionar mais testes unitarios cobrindo o funcionamento de todos os componentes.
- Adicionar mais testes unitarios cobrindo o funcionamento basico dos serviços.
- Adicionar testes do Cypress para os fluxos de dado nas paginas ```Home``` e ```Products```.
- Adicionar Storybook para demonstração estatica dos componentes e cobertura de comportamento dos elementos usados.

# Interface
- Adicionar fluxos de loading para feedback do usuario.
- Adicionar fluxos de erro para melhor feedback do usuario.
- Melhorar Tratamento das imagens para melhorar a fluides do layout

# CI/CD
- Adicionar pipeline para CI/CD.
- Adicionar hooks de push/merge e pull requests no gitHub.
- Adicionar travas de push (ex. Husky).

## Créditos

