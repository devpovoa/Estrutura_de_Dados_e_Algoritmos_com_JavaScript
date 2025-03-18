# Arrays

Um **array** é uma estrutura de dados mais simples possível em memória.

Um  array armazena valores que são todos do mesmo tipo, sequencialemente. Embora o JavaScript nos permita criar arrays com valores de tipos distintos, obedeceremos às melhores práticas e partiremos do pressuposto de que não podemos fazer isso.

Exemplo de forma errada de manupulação de dados:

```js
const averageTempJan = 31.9;
const averageTempFeb = 35.3;
const averageTempMar = 42.4;
const averageTempApr = 52;
const averageTempMay = 60.8;
```

Usando Arrays

```js
const averageTemp = [];
averageTemp.push(31.9);
averageTemp.push(35.3);
averageTemp.push(42.4);
averageTemp.push(52);
averageTemp.push(60.8);
```

### Criando e inicializando arrays

```js
const daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' );
```


