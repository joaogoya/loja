# Apresentação

Este é apenas um projeto lab que eu decidi fazer para praticar o que fui aprendendo com angular.


## CSS e Kit UI

Ainda não escrevi css para, em um primeiro momento, me dedicar apenas á logica da aplicação. Utilizei [este template css](https://bootswatch.com/sandstone/) do [Bootswatch](https://bootswatch.com/) no projeto.


## Server side

Quando fiz [este curso](https://www.youtube.com/watch?v=wDWdqlYxfcw&list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn) do [balta](https://balta.io/) mais do que aprender a construir um cms com arquitetura rest, eu também acabei ficando com uma api em casa. 
Escolhi utilizá-la para não ficar mocando dados, e também poder apresentar um MEAN stack.
O banco é mlab. Não precisa instalar mongo. É só levantar o servidor.
Na pasta `.../back-end/postmanColections` existem arquivos do postman para fazer requisições. 
Como algumas requisições dependem de ID (get by id por exemplo) fica difícil mantê-los atualizados porque durante o desenvolvimento deletamos muitos registros.


## Client side

Este sim, todo escrito e arquitetado por mim. Reflete tudo o que aprendi nesses dois anos de trabalho em cima do framework.
App em angular 8.
O projeto não está finalizado. Não sei se um dia estará :D  porque a ideia é seguir trabalhando nele. Melhorando, evoluindo, ..... Trabalhar o conceito de melhoria/entrega continua.
No arquivo backlog eu aponto quais os próximos passos que vou dar com o projeto.

E é isso pessoal.
Sintam-se à vontade para participar, sugerir e criticar construtivamente.


# Instalação

Clone o projeto na máquina
Abra uma janela do terminal na pasta back-end
Entre com os comandos 
`Npm install`
`Npm start`

Abra outra janela do terminal na pasta front-end
Repita os comandos
`Npm install`
`Npm start`

O node roda na porta 3000 e o angular na 4200.
Depois de instalar e startar as duas, acesse http://localhost:4200
Login: user
Password: 1234

Obs: No server side, eu levanto a api com o parâmetro –inspect, para poder [debugar o node no chrome](https://medium.com/the-node-js-collection/debugging-node-js-with-google-chrome-4965b5f910f4).
