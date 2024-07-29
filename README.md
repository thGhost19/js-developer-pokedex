# Pokémon

Bem-vindo ao projeto **Pokemon**! Esta aplicação exibe informações detalhadas sobre um Pokémon selecionado, incluindo seu número, tipos, altura, peso, habilidades, e imagens (incluindo a versão shiny). A interface é moderna, responsiva e proporciona uma experiência visual agradável tanto para dispositivos móveis quanto para desktop.

## Visão Geral

O projeto é composto por um arquivo HTML, um arquivo CSS embutido para estilização e um arquivo JavaScript que faz requisições à API da PokeAPI para buscar os dados dos Pokémon. Este README irá guiá-lo através da estrutura do projeto e das funcionalidades implementadas.

## Estrutura do Projeto

.
└──Assets
   └── css
      ├── ...
   └── js
      ├── config-details-api.js
      ├── config-details.js
      ├── main.js
      ├── poke-api.js
      └── pokemon-model.js
├── details.html
└──index.html


### `details.html`

O arquivo HTML contém a estrutura básica da página e inclui um design moderno com estilos CSS embutidos. Aqui estão os principais elementos:

- **Fonte Roboto**: Uma fonte moderna e clean para um visual mais agradável.
- **Container Centralizado**: O conteúdo é centralizado usando Flexbox para garantir uma ótima visualização tanto em dispositivos móveis quanto em desktop.
- **Estilização Responsiva**: O layout se adapta a diferentes tamanhos de tela, garantindo uma boa experiência de usuário em qualquer dispositivo.

### `details.js`

O arquivo JavaScript é responsável por buscar os dados do Pokémon e atualizá-los dinamicamente na página. Aqui estão as principais funcionalidades:

- **Obtendo o Número do Pokémon**: Extraímos o número do Pokémon da URL usando `URLSearchParams`.
- **Buscando Dados da API**: Fazemos uma requisição à PokeAPI para obter os dados do Pokémon selecionado.
- **Exibindo os Detalhes do Pokémon**: Atualizamos dinamicamente o conteúdo da página com as informações do Pokémon, incluindo seu nome, número, tipos, altura, peso, habilidades e imagens.

## Como Funciona

1. **Acesse a Página**: Abra `details.html` em seu navegador.
2. **Número do Pokémon na URL**: Adicione o número do Pokémon na URL como um parâmetro de consulta (e.g., `details.html?number=25`).
3. **Carregamento Dinâmico**: A página irá carregar as informações do Pokémon correspondente e exibi-las de forma estilizada.

## Exemplo de Uso

### URL

details.html?number=25


### Visualização

![Detalhes do Blastoise]([https://user-images.githubusercontent.com/thghost19/preview.png](https://raw.githubusercontent.com/thGhost19/js-developer-pokedex/main/preview.png))

## Estilização

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalhes do Pokémon</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container" id="pokemon-details">
        <p>Carregando...</p>
    </div>

    <script src="details.js"></script>
</body>
</html>
```

```javascript
function displayPokemonDetails(pokemon) {
    const detailsContainer = document.getElementById('pokemon-details');
    if (pokemon) {
        const typesPokemon = pokemon.types.map(typeInfo => typeInfo.type.name);
        const abilitiesPokemon = pokemon.abilities.map(abilityInfo => abilityInfo.ability.name);
        detailsContainer.innerHTML = `
            <h1>${pokemon.name}</h1>
            <p>Número: #${pokemon.id}</p>
            <p>Tipo: ${typesPokemon.join(', ')}</p>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <img src="${pokemon.sprites.front_shiny}" alt="${pokemon.name} Shiny">
            <div class="info">
                <div class="info-item">Altura: ${pokemon.height / 10} m</div>
                <div class="info-item">Peso: ${pokemon.weight / 10} kg</div>
                <div class="info-item">Habilidades: ${abilitiesPokemon.join(', ')}</div>
            </div>
            <div class="types">
                ${typesPokemon.map(type => `<span class="type">${type}</span>`).join('')}
            </div>
        `;
        document.title = `${pokemon.name} - Detalhes do Pokémon`;
    } else {
        detailsContainer.innerHTML = '<p>Pokémon não encontrado.</p>';
        document.title = 'Pokémon não encontrado';
    }
}
```

### CSS

```css
body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            transition: transform 0.3s;
        }
        .container:hover {
            transform: translateY(-5px);
        }
        h1 {
            font-size: 28px;
            color: #333;
            margin-bottom: 10px;
            text-transform: capitalize;
        }
        p {
            color: #666;
            font-size: 16px;
            margin: 5px 0;
        }
        img {
            width: 100%;
            max-width: 200px;
            height: auto;
            margin-top: 10px;
        }
        .types, .info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .type, .info-item {
            background-color: #eee;
            border-radius: 5px;
            padding: 5px 10px;
            margin: 5px;
            color: #333;
            text-transform: capitalize;
            transition: background-color 0.3s;
        }
        .type:hover, .info-item:hover {
            background-color: #ccc;
        }
        @media (max-width: 600px) {
            h1 {
                font-size: 24px;
            }
            p {
                font-size: 14px;
            }
            .type, .info-item {
                padding: 4px 8px;
            }
        }
```

# Contribuição

Contribuições são bem-vindas! Se você quiser melhorar esta aplicação, sinta-se à vontade para fazer um fork deste repositório e abrir um pull request com suas melhorias.

# Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Esperamos que você aproveite usar e contribuir para o projeto Detalhes do Pokémon! Se tiver alguma dúvida ou sugestão, não hesite em abrir uma issue.


### Explicação do `README.md`

1. **Visão Geral**: Dá uma breve introdução ao projeto e suas funcionalidades.
2. **Estrutura do Projeto**: Mostra a estrutura do projeto e os arquivos principais.
3. **HTML e CSS**: Explica as escolhas de design e as funcionalidades de estilo responsivo.
4. **JavaScript**: Detalha como os dados do Pokémon são buscados e exibidos dinamicamente.
5. **Como Funciona**: Guia o usuário sobre como utilizar a aplicação.
6. **Exemplo de Uso**: Demonstra como adicionar o número do Pokémon na URL para visualizar os detalhes.
