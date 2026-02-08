# AMXXPawn Language Service para Visual Studio Code

Portugues (Brasil) | [English](README.md) | [Espanol](README.es.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/NiceFeatures/amxxpawn-language/master/images/extension-logo.png" alt="AMXXPawn Language Service Logo" width="128">
  <h1 align="center">AMXXPawn Language Service</h1>
</p>

<p align="center">
  <strong>Uma experiencia de desenvolvimento moderna e poderosa para a classica linguagem AMXXPawn, diretamente no seu VS Code.</strong>
</p>

<p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=iceeedR.amxx-pawn-language-editor">
        <img alt="Visual Studio Marketplace Version" src="https://img.shields.io/visual-studio-marketplace/v/iceeedR.amxx-pawn-language-editor?style=for-the-badge&label=Marketplace">
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=iceeedR.amxx-pawn-language-editor">
        <img alt="Visual Studio Marketplace Installs" src="https://img.shields.io/visual-studio-marketplace/i/iceeedR.amxx-pawn-language-editor?style=for-the-badge&color=blue">
    </a>
</p>

---

Este projeto ressuscita e moderniza a experiencia de desenvolvimento para scripters de **AMX Mod X**. Se voce ama criar plugins para Half-Life, Counter-Strike 1.6 e outros mods GoldSrc, mas sente falta das ferramentas modernas, esta extensao e para voce.

Ela transforma o VS Code em uma IDE poderosa para Pawn, trazendo funcionalidades que antes eram exclusivas de linguagens mais novas.

## ✨ Funcionalidades Principais

Esta extensao vai muito alem de um simples colorizador de sintaxe. Ela oferece um **Language Server** completo com:

* **IntelliSense Avancado:** Autocompletar para funcoes, constantes e variaveis.
* **Navegacao de Codigo Inteligente (`Go to Definition`):** Pressione `Ctrl+Click` para pular instantaneamente para a definicao de:
    * Funcoes (incluindo `public`, `stock`, `native` e com prefixo `@`).
    * Constantes definidas com `#define`.
    * Variaveis globais.
    * **Funcoes em Tasks:** Navegue diretamente para a funcao quando o nome dela e passado como texto (ex: `set_task_ex(..., "minha_funcao", ...)`).
* **Informacoes ao Passar o Mouse (Hover):** Passe o mouse sobre uma funcao ou variavel para ver sua definicao completa sem sair do lugar.
* **Diagnosticos em Tempo Real:** A extensao avisa se um `#include` nao pode ser encontrado, ajudando a corrigir erros antes mesmo de compilar.
* **Compilacao Integrada:** Compile seus plugins diretamente do VS Code com um unico comando.

## 🚀 Instalacao

1.  Instale o [Visual Studio Code](https://code.visualstudio.com/).
2.  Abra a aba de **Extensoes** (`Ctrl+Shift+X`).
3.  Procure por `AMXXPawn Language Service`.
4.  Clique em **Instalar**.
5.  Recarregue o VS Code e aproveite!

Voce tambem pode instalar diretamente pela [pagina do Marketplace](https://marketplace.visualstudio.com/items?itemName=iceeedR.amxx-pawn-language-editor).

## ⚙️ Configuracao (Passo Essencial!)

Para que a extensao funcione 100%, voce **precisa** dizer a ela onde seu compilador AMXX e os arquivos de `include` estao.

1.  Abra as Configuracoes do VS Code (`Ctrl + ,`).
2.  Clique no icone de "Abrir settings.json" no canto superior direito.
3.  Adicione as seguintes propriedades ao seu `settings.json`:

```json
{
    // ...outras configuracoes...

    // Caminho para o executavel do compilador amxxpc.
    "amxxpawn.compiler.executablePath": "C:\\caminho\\para\\seu\\compiler\\amxxpc.exe",

    // Lista de pastas onde a extensao deve procurar por arquivos .inc.
    // ESSENCIAL para o "Go to Definition" de funcoes nativas funcionar.
    "amxxpawn.compiler.includePaths": [
        "C:\\caminho\\para\\seu\\compiler\\include"
    ]

    // --- CONFIGURACAO RECOMENDADA ---
    // Para uma experiencia de autocomplete mais limpa e inteligente,
    // desativando sugestoes genericas baseadas em palavras do arquivo.
    "editor.wordBasedSuggestions": "off"
}
```

**IMPORTANTE para usuarios Windows:** Em arquivos JSON, voce deve usar barras invertidas duplas (`\\`) ou barras normais (`/`) nos caminhos.

**Exemplo Pratico:**
```json
{
    "amxxpawn.compiler.executablePath": "C:/AMXX/compiler/amxxpc.exe",
    "amxxpawn.compiler.includePaths": [
        "C:/AMXX/compiler/include"
    ]
}
```

## ⌨️ Comandos Disponiveis

Abra a Paleta de Comandos (`Ctrl+Shift+P`) e digite `AMXXPawn` para ver os comandos disponiveis:

* **`AMXXPawn: Compile Plugin`:** Compila o arquivo `.sma` atualmente aberto usando o `executablePath` definido nas configuracoes.
* **`AMXXPawn: Compile Plugin Local`:** Procura e usa um `amxxpc.exe` que esteja na mesma pasta do arquivo `.sma` que voce esta editando.

## 🛠️ Para Desenvolvedores e Contribuidores

Este projeto e uma modernizacao de uma base de codigo legada, agora utilizando TypeScript e as APIs mais recentes do `vscode-languageclient`. Contribuicoes sao muito bem-vindas!

**Para compilar e testar localmente:**

1.  Clone o repositorio: `git clone https://github.com/NiceFeatures/amxxpawn-language.git`
2.  Instale as dependencias: `npm install`
3.  Compile o projeto: `npm run compile`
4.  Abra o projeto no VS Code e pressione `F5` para iniciar uma sessao de depuracao.

## 🙏 Agradecimentos

Este projeto e uma continuacao e modernizacao do trabalho incrivel feito originalmente por **KliPPy**. Todo o credito pela base solida e pela ideia original vai para ele.

## 📄 Licenca

Este projeto e licenciado sob a **GPL-3.0**. Veja o arquivo `LICENSE` para mais detalhes.
