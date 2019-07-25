# FIESC

Sistema HSC

Versão: 1.0.0
---

Dependências
-----

`package.json`

Gulp Tasks
-----

`gulpfile.js`

Informações do projeto
-----

`projeto.json` e `_config.yml`

Pasta de Desenvolvimento
-----

`assets`

Pasta Produção
-----

`_site`

---

## Ferramentas necessárias para desenvolvimento:

* **Jekyll** Ferramenta em Ruby para desenvolvimento de sites estáticos podendo usar includes para aproveitamento de códigos em mais de uma página, entre outros.
    * http://jekyllrb.com/
* **Gulp**
    * Automatizador de tarefas desenvolvido em NodeJs
    * http://gulpjs.com/
* **Sass/Compass**
    * Framework desenvolvido em Ruby para préprocessar arquivos scss para css
    * http://compass-style.org/

## Instalando o Gulp e as dependências no projeto

* 1 - Verificar se já está instalado na máquina o Node.js, Gulp, Ruby, Compass, Git, etc.
* 2 - Entrar na raiz do projeto pela linha de comando (CMD ou Terminal em modo administrador).

* 4 - Dê os comandos -- `gem install jekyll, npm i, bower i e gulp` no CMD ou Terminal (Serão instaladas as dependências.

---
## Trabalhando com BOOTSTRAP/SASS
SASS - Os arquivos sass estão localizados no pasta `assets/Repositorio/sass`

* 1 - Arquivo principal de importação `screen.scss`
* 3 - Arquivo de inclusão de classes e css em geral do projeto `_main.scss`

BOOTSTRAP - Os arquivos bootstrap estão localizados no pasta `assets/_sass/_import/bootstrap-sass`

* A importação dos módulos estão configuradas no arquivo screen.scss, devendo ser retirado o comentário para fazer a importação no projeto.

Obs.: O `screen.css` será gerado na pasta de produção Arquivos a serem inseridos como importação deverão começar com `_` para que não sejam compilados de forma isolada

---

# Trabalhando com JavaScript

### Atualizar JavaScript:

* Arquivo para funções, classes e js em geral `assets/_js/geral.js`

### Inserir uma biblioteca Js:
* 1 - Entrar na raiz do projeto pelo CMD ou Terminal.
* 2 - Instalar a dependência via Bower `bower install --save-dev [nome-da-dependencia]`

---
### Imagens

* 1 - Colocar as imagens em geral na pasta `assets/_img`
## Obeservação importante
*Não alterar diretamente nos diretórios de homologação ou produção, essas devem ser feitas somente via **gulp/jekyll***

## Suporte
* fabiano.dutra@stefanini.com 
