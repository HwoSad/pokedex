# projeto criado em React

Primeiro passo foi aprender um pouco de React e associar com um framework que já sou familiarizado e estudado com auxílio do google.
Segundo passo foi aprender ler o código para saber corrigir bugs que pode acontecer com a criação do site, porque tem aplicações que pode quebrar com versionamento da versão de qualquer framework.

# navBar

Peguei o padrão do bootstrap que já vem pronto e modifiquei a cor para combinar com backgroud que eu coloquei na página, depois fiz um gradient na cor do link para volta na página principal.

# DashBord 

DashBoard é página principal que vai receber a lista de pokemon, feito com linha e coluna.

# Pokemon List

primeiro recebi a api do pokemon dentro do state para receber a api.
Depois fiz um async no metodo componentDiMounth e await para mudar o state só depois que for carregado todo resultado da api.
Assim fiz uma verificação que state do pokemon é null que não for vai mapear o pokemon e vai passar os valores para a Class PokemonCard, caso ao contrario, vai parece Loading Pokemon.

# PokemonCard

.Sprite que vai receber a image do pokemon caso ao contrário vai parece que está carregando junto com a verificação this.state.imageLoading.

.Card é uma div que criei que vai recebeu sombra,bordas e o eveito do mouse passando em cima.

.StyledLink é quem vai chama a router que está dados do pokemon também com efeito de mouse.

Recebi o nome e a url do pokemon que foi passado pelo PokemonList usando this.props e pelo número busquei a image no github que tem foto dos pokemon.

# Pokemon

recebi todos os dados que a api posibilita com  sobre os pokemon e coloque uma cor para fica no tipo de pokemon.
passei o valor do pokemonIndex para pega os dados do pokemon.
e recebi com ele as descrição do pokemon ja que está enumerado na api.
Depois disso só passei os valores para o interface.

# App 

Na Class principal fiz a routa com é feito no Flutter.











