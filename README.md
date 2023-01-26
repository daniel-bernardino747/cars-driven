# API Concessionária Cars

## Getting Started

Para começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o servidor

Clone este repositório

```bash
git clone <https://github.com/daniel-bernardino747/cars-driven>
```

Acesse a pasta do projeto no terminal/cmd

```bash
cd cars-driven
```

Instale as dependências

```bash
npm install
```

---

### Atenção :heavy_exclamation_mark:

Antes de iniciar sua aplicação, crie o arquivo `.env`:

```bash
touch .env
```

e configure as variáveis de ambiente descritas em `.env.example`.

```properties
DATABASE_URL = # URL que o Prisma utiliza para fazer a conexão com o banco de dados, em caso de dúvidas: <https://www.prisma.io/docs/concepts/database-connectors/postgresql>
PORT = # Coloque a porta que deseja para rodar seu servidor. Recomenda-se: 4000
```

Para fazer isso rapidamente, acesse a pasta com seu editor de código.

```bash
code .
```

---

Execute a aplicação em modo de desenvolvimento

```bash
npm run start:dev
```

Em caso de sucesso, está mensagem aparecerá:

```
Server is up and running on port: 4000
```
