# testeapi
## Teste API utilizando o SheetDB - Integração com o Google Sheets
  ### Projeto criado para integração entre um FORM feito em HTML e CSS e a planilha do Google (Google Sheets).

 * Utilizamos um simples `<form>` e em seu `action` colocamos o link da **SheetDB API**.
    * Para criar a sua API você irá precisar de uma planilha no [Google Sheets](https://sheets.new) e acessar o link [SheetsDB](https://sheetdb.io/apis) seguindo o passo a passo orientado e gerando o link da API no final.
    * Nos `inputs` em sua propriedade `[name]` colocamos `name:"data[coluna]"` no lugar de coluna você irá preencher exatamente como esta a primeira linha das colunas em sua planilha (Google Sheets).

    #
    No input `type:submit` temos o evento onclick que nos auxilia no script Javascript para consumir corretamente a API.

    Espero que tenha ajudado, ainda tenho novos recursos para adicionar além do `CREATE` teremos também o `READ,UPDATE,DELETE` o famoso **CRUD**.

    #### Lembrando que esse projeto é para estudos, para documentar o meu crescimento e praticar a descrição de projetos. Estou à disposição para esclarecer qualquer dúvida, entre em contato através do meu [EMAIL.](mailto:victornovaisp@gmail.com)


