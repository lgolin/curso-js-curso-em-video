# Módulo B

### Nesta aula foi ensinado os tópicos abaixo:

- Armazenamento de dados
- Tratamento de dados
- Operações com dados

### O que são variáveis?

<p>Variáveis servem para o armazenamento de dados.</p>

## Identificadores

(Como podemos chamar as nossas variáveis)

- Podem começar com letras, $ ou \_
- É possível usar letras ou números
- É possível usar acentos e símbolos

* Não podem conter espaços
* Não podem ser palavras reservadas
* Não podem começar com números

#### Dicas

- Maiúsculas e minusculas fazem a diferença
- Escolha nomes coerentes para as variáveis

## Data Types

- Number
  - Infinity
  - NaN (Not a Number)
- String
- Boolean
- Null
- Undefined
- Object
  - Array
- Function

## Manipulação de dados

### Conversão de String para Numero

- parseInt() -> Faz a conversão para um número inteiro
- parseFloat() -> Faz a conversão para um número real
- Number() -> É um abreviação. Faz a conversão de acordo com os números informados (int ou float)

### Conversão de Número para String

- String()
- .toString()

### Formatando Strings

```
var aula = Javascript
'Eu estou aprendendo ' + aula // usa concatenação
`Eu estou aprendendo ${aula}` // usa template string
```

```
var n1 = 251.1
// coloca duas casas decimais após o ponto
n1.toFixed(2)

// acrescenta duas casas decimais e troca o ponto pela virgula
n1.toFixed(2).replace('.',',')

// Formata o numero para real acrescentando o R$
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) //
```
