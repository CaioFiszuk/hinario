# Harpa Cristã - Web App

## Aplicação web para consulta de hinos da Harpa Cristã, permitindo ao usuário:

- visualizar a lista completa de hinos
- buscar hinos pelo título
- acessar a letra completa de cada hino

O projeto foi desenvolvido com React e consome uma API pública de terceiros.

### Tecnologias Utilizadas:

- React
- React Router
- Axios
- CSS

### Funcionalidades:

- Listagem de todos os hinos na página inicial
- Busca por título (case-insensitive)
- Navegação para a página de letra do hino
- Carregamento dinâmico dos dados via API

### API utilizada (terceiros)
Este projeto consome dados da seguinte API pública:

#### **Harpa API**
https://harpa-api.onrender.com

### Exemplos de endpoints utilizados:

- Listagem de hinos (paginada):
````
 GET /hymns?page=1
````

- Detalhes de um hino específico:
````
  GET /hymns/:number
````

### Aviso Importante
Esta API não é de minha autoria.
Todos os dados (títulos e letras dos hinos) pertencem aos seus respectivos autores e/ou responsáveis pela API.

Este projeto tem finalidade educacional e demonstrativa.

### Observações

- A disponibilidade e estabilidade da API dependem do serviço de terceiros.
- Este projeto não armazena os dados localmente.
- Caso a API fique indisponível, a aplicação pode não funcionar corretamente.

### Licença
Este projeto está sob a licença MIT.
Sinta-se livre para estudar, modificar e contribuir.