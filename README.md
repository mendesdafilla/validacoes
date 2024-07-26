# VALIDACOES
 
* [Descrição](#descrição)
* [Introdução](#introdução)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Funcionalidades](#funcionalidades)
* [Autores](#autores)
 
## Descrição
Este repositório contém projetos de validação de Email e CPF, desenvolvidos em JavaScript durante as aulas. A documentação aqui presente visa detalhar todos os recursos JavaScript utilizados, além de fornecer um guia para navegação e entendimento dos projetos.
 
## Introdução
Durante nossas aulas, criamos dois projetos em JavaScript focados na validação de Email e CPF. Estes projetos são exemplos práticos de como aplicar conceitos de programação para resolver problemas comuns em desenvolvimento web. O objetivo deste repositório é organizar, documentar e disponibilizar esses projetos para consulta e aprendizado.
 
 
 
## Tecnologias Utilizadas
- *JavaScript:* Linguagem de programação principal utilizada para a criação dos scripts de validação.
- *Expressões Regulares (Regex):* Utilizadas para validar o formato dos emails e CPFs.
- *HTML:* Utilizado para criar a interface simples onde os usuários podem testar as validações.
 
 
 ## Funcionalidades
 
 
- *Validação de CPF*
  - Verificação do formato do CPF (###.###.###-##).
  - Cálculo dos dígitos verificadores para confirmar a validade do CPF.
 
* getElementById: Recupera os elementos do DOM pelos seus IDs (cpfForm, cpf, message).
* textContent e style.color: Alteram o conteúdo de texto e a cor do elemento message para informar se o CPF é válido ou inválido.
* replace: Remove caracteres não numéricos do CPF.
* if e Expressões Regulares: Verifica se o CPF tem 11 dígitos e se todos os dígitos são iguais utilizando a expressão regular/^(\d)\1{10}$/.
* Laços for: Calculam os dígitos verificadores do CPF.
* Operadores matemáticos: Calculam o dígito verificador usando soma, multiplicação, e módulo.
 
 
 
- *Validação de Email*
  - Verificação do formato do email utilizando expressões regulares.
  - Garantia de que o email contém os caracteres necessários (como "@" e ".")
 
* value: Recupera o valor do campo de entrada email.
* indexOf: Verifica se o valor do campo de entrada contém os caracteres @ e..
* alert: Exibe uma mensagem ao usuário se o e-mail for inválido ou informado 4
* innerHTML: Atualiza o conteúdo de um elemento no DOM com o valor do e-mail.
 
 
## Autores 👥
- [Naillim Novaski](https://github.com/naillimnovaski/Validacoes
)
- [dafilla mendes](https://github.com/mendesdafilla/validacoes)