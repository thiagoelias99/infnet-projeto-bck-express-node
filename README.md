# infnet-projeto-bck-express-node
 Projeto do curso Back-end com Express & Node.JS da Infnet

## **Iniciar BackEnd**
### Instalação
```
cd backend
npm install
 ```
### Execução
```
npm start
```
**Obs**: O servidor executa por padrão no endereço <http://localhost:3333/>.

## **Iniciar FrontEnd**
### Instalação
```
cd front-projeto
npm install
 ```
### Execução
```
npm start
```

## **Versões**
- Node.Js 18.12.1
- React 18.2.0

## **Rotas**
- <http://localhost:3333/>
    - **GET** -> Página Inicial
- <http://localhost:3333/empregados>
    - **GET** -> Retorna todos empregados.
    - **POST** -> Adiciona um empregado.
        ```
        {
            "nome": "String + Obrigatório",
            "email": "String + Obrigatório + Único",
            "salario": "Number + Obrigatório + Mínimo 1"
            "idade": "Number + Obrigatório + Mínimo 16"
            "departamento": "String + Opcional + Validado com Departamentos"
        }
        ```
- <http://localhost:3333/empregados/:id>
    - **DELETE** -> Remove o empregado "*id*"
    - **PUT** -> Atualiza informações do empregado "*id*"               
        ```
        {
            "nome": "String + Obrigatório",
            "email": "String + Obrigatório + Único",
            "salario": "Number + Obrigatório + Mínimo 1"
            "idade": "Number + Obrigatório + Mínimo 16"
            "departamento": "String + Opcional"
        }
        ```
- <http://localhost:3333/departamentos>
    - **GET** -> Retorna todos departamentos.
    - **POST** -> Adiciona um departamento.
        ```
        {
            "nome": "String + Obrigatório",
            "cidade": "String + Obrigatório",
        }
        ```
- <http://localhost:3333/departamentos/:id>
    - **DELETE** -> Remove o departamento "*id*"
    - **PUT** -> Atualiza informações do departamento "*id*"               
        ```
        {
            "nome": "String + Obrigatório",
            "cidade": "String + Obrigatório",
        }
        ```
- <http://localhost:3333/*>
    - Qualquer Método -> Pagina 404