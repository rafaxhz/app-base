Aqui está uma versão revisada e mais didática do seu README:  

---

# 📖 Configuração do Projeto  

Antes de iniciar, vamos configurar os arquivos necessários para que tudo funcione corretamente.  

## 1️⃣ Configurando o Arquivo `.env`  

1. **Abra o arquivo `.env.example`**:  
   Preencha as informações abaixo com os dados corretos do seu bot e do banco de dados MySQL.  

   ```env
   # Configurações do Bot
   CLIENT_TOKEN="seu token do bot"

   # Configurações do Banco de Dados (substitua pelos dados do seu banco MySQL)
   DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
   ```  

2. **Renomeie o arquivo**:  
   Depois de preencher os dados, renomeie o arquivo de `.env.example` para `.env`.  

---

## 2️⃣ Ajustando o Arquivo `docker-compose.yml`  

Se você estiver usando Docker, também precisará configurar o arquivo `docker-compose.yml`.  

- **Certifique-se de usar os mesmos dados do arquivo `.env`** para configurar as credenciais do seu banco de dados MySQL.  
- Substitua as informações do MySQL no arquivo `docker-compose.yml` para que correspondam às credenciais configuradas no `.env`.  

---

✨ **Pronto!** Agora você está preparado para começar a usar o projeto. 🚀