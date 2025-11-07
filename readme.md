# 📂 docker-nginx-node

## 📃 Descrição

Aplicação em Docker NGINX e Node

### Subir Containers do Projeto

    docker-compose up -d

### Acessar o
Projeto: [http://localhost:8080/](http://localhost:8080/)<br />

---
---

### Acessar containers via Bash

    docker-compose exec webapp /bin/sh

### Encerrar containers em execução

    docker-compose down

### Rebuild

    docker-compose up --build -d

### Remover Todos os Contêineres e Imagens em Um Comando

    docker stop $(docker ps -aq) && docker rm $(docker ps -aq) && docker rmi $(docker images -q) && docker network rm $(docker network ls -q)

#### Questões específicar para atribuir permissões caso precise manipular arquivos, acesse a raiz do projeto

    sudo chown -R wsawebmaster:wsawebmaster .

Substitua wsawebmaster pelo seu usuário

---
---

### 👨‍💻 Expert

<p>
<img 
      align="left" 
      style="margin: 10px; width: 80px; border-radius: 50%;" 
      src="https://avatars.githubusercontent.com/u/52001930?s=400&u=fb999c966c5c652a8357cbede4b1112e79cbfe18&v=4" 
/>
    <p style="padding-top:25px">&nbsp&nbsp&nbsp Wagner Andrade<br>
    &nbsp&nbsp&nbsp
    <a href="https://github.com/wsawebmaster">
    GitHub</a>&nbsp;|&nbsp;
    <a href="https://www.linkedin.com/in/
wsawebmaster">LinkedIn</a>
&nbsp;|&nbsp;
<a href="mailto:wsawebmaster@yahoo.com.br">
    Email</a>
  &nbsp;|&nbsp;
</p>
</p>