# Listas Ligadas

As listas ligadas armazenam uma coleção sequencial de elementos; no entanto, de mode diferente dos arrays, nas listas ligadas os elementos não são posicionados de forma contígua na memória. Cada elemento é constituído de um nó que armazena o elemento propriamente dito, além de uma referência (também conhecida como ponteiro ou ligação) que aponta para o próprio elemento. Uma das vantagens de uma lista ligada em relação a um array convencional é que não é necessário deslocar os elementos quando eles são adicionados ou removidos. Entretanto, precisamos usar ponteiros quando trabalhamos com uma lista ligada, e, por esse motivo, é preciso prestar atenção especial na implementação desse tipo de lista. 

## Lista duplamente ligadas

Há diferentes tipos de listas ligadas. A diferença entre uma lista duplamente ligada e uma lista ligada comum é que, nessa última, fazemos a ligação somente de um nó para o próximo, enquanto, em uma lista duplamente ligada, temos uma ligação dupla: uma para o próximo elemento e outra para o elemento anterior.


