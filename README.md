# iCar Fipe

![logo](https://github.com/user-attachments/assets/126a13cf-78d6-407c-9205-2434d539f704)

## 🚗 Sobre o Projeto
O **iCar Fipe** é um projeto demonstrativo desenvolvido em **React Native** com o objetivo de apresentar minhas habilidades na criação de aplicações móveis. A aplicação permite consultar marcas, modelos e detalhes de veículos utilizando a API da Tabela FIPE.

---

## 🛠 Tecnologias Utilizadas
- **React Native**
- **Expo**
- **Context API** (Gerenciar dados de Login)
- **Async Storage** (Gerenciar dados de Login)
- **Styled Components** (Estilização da aplicação)
- **Axios** (para requisições HTTP)
- **React Navigation** (para navegação entre telas)
- **Jest e Testing Library** (para testes)

---

## 🚀 Como Executar o Projeto
```markdown
# Clone este repositório
git clone https://github.com/seu-usuario/iCar-Fipe.git

# Acesse a pasta do projeto
cd iCar-Fipe

# Instale as dependências
yarn install

# Modifique o nome de .env.example para .env

# Inicie o servidor Expo
yarn start
```

📱 Utilize o aplicativo Expo Go para rodar no celular ou um emulador para testar a aplicação.

## ✅ Como Executar os Testes
```bash
yarn test
````

## 📱 Funcionalidades e Telas

### 🔐 Tela de Login

O usuário pode acessar o sistema utilizando:

- **Usuário:** `teste`
- **Senha:** `123`

<img src="https://github.com/user-attachments/assets/2e02def7-4ac8-4ffe-81cd-5fd08e30b1b8" alt="Tela de Login" width="400">

#
### 🏠 Tela Home

  Na tela inicial, o usuário pode:

 - Pesquisar marcas de veículos na barra de pesquisa
 - Filtrar por Carros, Motos ou Caminhões
 - Visualizar uma lista de marcas
   
 <img src="https://github.com/user-attachments/assets/8fdca40d-5c19-4902-a170-128445199258" alt="Tela Home" width="400">

#

### 🚘 Tela de Seleção de Modelo

Após selecionar uma marca, a tela de seleção de modelo exibe:

- Uma barra de pesquisa para buscar modelos específicos
- Uma lista de modelos correspondentes à marca e tipo de veículo escolhido

<img src="https://github.com/user-attachments/assets/ee6b0d67-23e7-4a7f-b19a-7197b853a484" alt="Tela de Seleção de Modelo" width="400">


#

### 🔎 Tela de Detalhes do Veículo

Ao selecionar um modelo, são exibidas as informações detalhadas do veículo:

- Nome do Modelo
- Marca
- Tipo de Combustível
- Código FIPE
- Ano do Modelo (com opção de seleção de diferentes anos)

<img src="https://github.com/user-attachments/assets/de79699a-bcf1-49d5-ad0c-a9c9cdac18ac" alt="Tela de Detalhes do Veículo" width="400">


#

### 👤 Tela de Perfil do Usuário

Clicando no ícone de "usuário" na Home, o usuário pode:

- Ver o nome do usuário logado

- Encerrar a sessão clicando no botão "Sair"

<img src="https://github.com/user-attachments/assets/8b2793bc-043f-4448-b526-f526f0336a00" alt="Tela de Perfil do Usuário" width="400">

#

📌 Considerações Finais

Este projeto foi desenvolvido com foco em performance, usabilidade e boas práticas de desenvolvimento.

Sinta-se à vontade para contribuir, relatar problemas ou sugerir melhorias! 😊
