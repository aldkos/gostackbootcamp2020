# gostackbootcamp2020
Repositório para pubilcação de projetos feitos durante o curso da rocketseat GoStack BOOTCAMP

============
= modulo01 =
============
POST > http://localhost:3000/users
"{
	"name": "NOME"
}"

PUT > http://localhost:3000/users/0
"{
	"name": "NOME_ALTERADO"
}"

DELETE > http://localhost:3000/users/0

GET > http://localhost:3000/users

GET > http://localhost:3000/users/0

===================
= modulo01Desafio =
===================

GET > http://localhost:3000/projects

POST > http://localhost:3000/projects
"{
	"id": "2",
	"title": "Novo Projeto 2"
}"

PUT > http://localhost:3000/projects/1
"{
	"title": "Novo Projeto 1 - Alterado"
}"

POST > http://localhost:3000/projects/1/tasks
"{
	"title": "Nova tarefa 1"
}"

DELETE > http://localhost:3000/projects/1
