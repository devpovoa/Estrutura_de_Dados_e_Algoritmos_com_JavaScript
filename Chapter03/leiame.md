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

Contudo, usar a palavra reservada <code>new</code> não é considerada a melhor prática.

```js
const daysOfWeek = [];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(daysOfWeek.length);
```

### Acessando elementos e fazendo uma iteração em um array

Usando o tradicional **`for`**

```js
for (let i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}
```

_Em JavaScritp, um array é um objeto mutável. Podemos facilmente lhe acrescentar novos elementos. O objeto crescerá dinamicamente à medida que novo elementos forem adicionados. Em várias outras linguagens, por exemplo, em C e em Java, é preciso determinar o tamanho do array e, caso haja necessidade de adicionar mais elementos, um array totalmente novo deverá ser criado._

#### Inserindo um elemento no final do array

Uso tradicional

```js
numbers = [1,2,3,4,5,6,7,8,9];
numbers[numbers.lenght] = 10; 
```

Usando a API do JS, método `push`

```js
numbers.push(10);
numbers.push(10,11,12);
```

#### Inserindo um elemento na primeira posição

Uso tradicional

```js
Array.prototype.insertFirstPosition = function(value){
    for(let i = this.length; i >= 0; i--){
    this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1);
```

Usando a API do JS, método `unshift`

```js
numbers.unshift(-2);
numbers.unshift(-4,-3);
```

#### Removendo um elemento no final do array

```js
numbers.pop();
```

Os métodos `push` e `pop` permitem que um array emule uma estrutura de dados **stack** básica.

#### Removendo um elemento da primeira posição

Uso tradicional

```js
Array.prototype.reIndex = function(myArray){
  const newArray = [];
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] !== undefined){
            newArray.push(myArray[i]);
        }
    }  
    return newArray;
};


Array.prototype.removeFirstPosition = function(){
  for(let i = 0; i < this.length; i++){
    this[i] = this[i + 1];
    }  
    return this.reIndex(this);
};


numbers = numbers.removeFirstPosition();
```

Usando a API do JS, método `shift`

```js
numbers.shift();
```

Os métodos `shift` e `unshift` permitem que um array emule uma estrutura de dados básica de **fila (queue)**.

#### Adicionando e removendo elementos de uma posição específica

```js
numbers.splice(5,3);
```

O método `splice` pode ser usado para remover um elemento de um array, simplesmente espeficando a posição/índice a partir do qual queremos fazer a remoção e a quantidade de elementos que gostaríamos de remover.

Esse código removerá três elementos a partir do índice **5** de um array.

Atenção ao usar o método `delete` pois ao deletar um elemento do array o mesmo não será excluir, mas sim, terá o valor alterando para `undefined`, ou seja, teríamos de reindexar o array.

```js
delete numbers[0];
```

```js
numbers.splice(5,0,15,16,17,18);
```

O primeiro argumento do método é um índice a partir do qual queremos remover ou inserir elementos. O segundo argumento é a quantidade de elementos que queremos remover (nesse caso, zero **( 0 )**). Do terceiro argumento em diante, temos os valores que gostaríamos de inserir no array.

#### Arrays bidimensionais e multidimensionais

```js
let averageTempDayOne = [72,75,79,79,81,81];
let averageTempDayTwo = [81,79,75,75,73,72];
```

No entando, essa não é a melhro abordagem; podemos ter algo mais apropriado! Uma **matriz** (um array bidimensional ou _array de arrays_).

```js
const averageTemp = [];

averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];
```

Esse código também pode ser implementado da seguinte maneira

```js
//dia 1
const averageTemp = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

//dia 2
const averageTemp = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;
```

A linguagem JavaScript aceita arrays unidimensionais; ela não tem suporte para matrizes. Desta forma cada linha **[0]** representa um dia e cada coluna **[0][1]** representa a temperatura de cada hora do dia. 

#### Iteração pelos elementos de arrays bidimensionais

```js
function printMatrix(myMatrix){
    for(let linha = 0; linha < myMatrix.length; linha++){
        for(let coluna = 0; coluna < myMatrix[linha].length; coluna++){
            console.log(myMatrix[linha][coluna]);
        }
    }
}
printMatrix(averageTemp);
```

#### Arrays multidimensionais

É possível também trabalhar com arrays multidimensionais em JavaScript.

```js
const Matrix3x3x3 = [];
for(let i = 0; i < 3; i++){
    Matrix3x3x3[i]=[];
    for(let j = 0; j < 3; j++){
        Matrix3x3x3[i][j]=[];
        for(let z = 0; z < 3; z++){
            Matrix3x3x3[i][j][z]=i + j + z;
        }
    }
}

for (let i = 0; i < Matrix3x3x3.length; i++) {
     for (let j = 0; j < Matrix3x3x3[i].length; j++) {
      for (let z = 0; z < Matrix3x3x3[i][j].length; z++) {
       console.log(Matrix3x3x3[i][j][z]);
          }
     }
}
```

#### Referências para métodos de array em JavaScript

1. **`concat`** => Junta vários arrays e devolve uma cópia deos arrays concatenados

2. **`every`** => Itera por todos os elementos do array, verificando uma condição desejada (função) até que _false_ seja devolvida.

3. **`filter`** => Cria um array com todos os elementos avaliados com _true_ pela função especificada.

4. **`forEach`** => Executa uma função especifica em cada elemento do array.

5. **`join`** => Reúne todos os elementos do array em uma string.

6. **`indexOf`** => Pesquisa o array em busca de elementos específicos e devolve a sua posição.

7. **`lastIndexOf`** => Devolve a posição do último intem do array que corresponde ao critério de pesquisa.

8. **`map`** => Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.

9. **`reverse`** => Inverte o array, de modo que o último item se torne o primeiro, e vice-versa.

10. **`slice`** => Devolve um novo array a partir do índice especificado.

11. **`some`** => Itera por todos os elementos do array, verificando a condição desejada (função) até que _true_ seja devolvida.

12. **`sort`** => Organiza o array em ordem alfabética ou de acordo com a função especificada.

13. **`toString`** => Devolve o array na forma de uma string.

14. **`ValueOf`** => É semelhante ao método _toString_ e devolve o array na forma de uma string.
    
    

#### Juntando vários arrays

Usando o método `concat` 

```js
const zero = 0;
const positiveNumbers = [1,2,3];
const negativeNumbers = [-3,-2,-1];
let numbers = negativeNumbers.concat(zero,positiveNumbers);
```

#### Funções de Iteração

```js
const isEven = (x) => {
    console.log(x);
    return (x % 2 === 0);
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
```

#### ECMAScript 6 e as novas funcionalidades de array

1. @@iterator => Devolve um objeto iterador que contém os pares chave/valor do array; pode ser chamado sincronamente para obter a chave/valor dos elementos do array.

2. copyWithir => Copia uma sequência de valores do array na posição de um índice de início.

3. entries => Devolve @@interator, que contém pares chave/valor.

4. includes => Devolve `true` caso um elemento seja encontrado no array, e `false` caso contrário. 

5. find => Busca um elemento no array, dada uma condição desejada (função de callback), e devolve o elemento caso seja encontrado.

6. findIndex => Busca um elemento no array, dada uma condição desejada (função de callback), e devolve o índice do elemento caso seja encontrado.

7. fill => Preenche o array com um valor estático.

8. from => Cria um array novo a partir de um array existente.

9. keys => Devolve @@iterator, contendo as chaves do array.

10. of => Cria um novo array a partir dos argumentos passados para o método.

11. values => Devolve @@iterator, contendo os valores do array.
    
    


