# AMXXPawn Language Service para Visual Studio Code

Espanol | [English](README.md) | [Portugues (Brasil)](README.pt-BR.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/NiceFeatures/amxxpawn-language/master/images/extension-logo.png" alt="AMXXPawn Language Service Logo" width="128">
  <h1 align="center">AMXXPawn Language Service</h1>
</p>

<p align="center">
  <strong>Una experiencia de desarrollo moderna y potente para el clasico lenguaje AMXXPawn, directamente en VS Code.</strong>
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

Este proyecto revive y moderniza la experiencia de desarrollo para scripters de **AMX Mod X**. Si te gusta crear plugins para Half-Life, Counter-Strike 1.6 y otros mods de GoldSrc pero echas de menos herramientas modernas, esta extension es para ti.

Convierte VS Code en un IDE potente para Pawn, con funciones que antes eran exclusivas de lenguajes mas nuevos.

## ✨ Funcionalidades principales

Esta extension va mucho mas alla de un simple resaltado de sintaxis. Ofrece un **Language Server** completo con:

* **IntelliSense avanzado:** Autocompletado para funciones, constantes y variables.
* **Navegacion inteligente de codigo (`Go to Definition`):** Presiona `Ctrl+Click` para ir a la definicion de:
    * Funciones (incluyendo `public`, `stock`, `native` y con prefijo `@`).
    * Constantes definidas con `#define`.
    * Variables globales.
    * **Funciones en Tasks:** Navega directamente a la funcion cuando su nombre se pasa como texto (por ejemplo, `set_task_ex(..., "mi_funcion", ...)`).
* **Informacion al pasar el mouse (Hover):** Pasa el mouse sobre una funcion o variable para ver su definicion completa.
* **Diagnosticos en tiempo real:** La extension avisa si un `#include` no se puede encontrar, ayudando a corregir errores antes de compilar.
* **Compilacion integrada:** Compila tus plugins directamente desde VS Code con un solo comando.

## 🚀 Instalacion

1. Instala [Visual Studio Code](https://code.visualstudio.com/).
2. Abre la pestaña de **Extensiones** (`Ctrl+Shift+X`).
3. Busca `AMXXPawn Language Service`.
4. Haz clic en **Instalar**.
5. Recarga VS Code y listo.

Tambien puedes instalarla directamente desde la [pagina del Marketplace](https://marketplace.visualstudio.com/items?itemName=iceeedR.amxx-pawn-language-editor).

## ⚙️ Configuracion (Paso esencial)

Para que la extension funcione al 100%, **debes** indicar donde estan tu compilador AMXX y los archivos `include`.

1. Abre la configuracion de VS Code (`Ctrl + ,`).
2. Haz clic en el icono de "Abrir settings.json" en la esquina superior derecha.
3. Agrega las siguientes propiedades a tu `settings.json`:

```json
{
    // ...otras configuraciones...

    // Ruta al ejecutable del compilador amxxpc.
    "amxxpawn.compiler.executablePath": "C:\\ruta\\a\\tu\\compiler\\amxxpc.exe",

    // Lista de carpetas donde la extension buscara archivos .inc.
    // ESENCIAL para que funcione "Go to Definition" de funciones nativas.
    "amxxpawn.compiler.includePaths": [
        "C:\\ruta\\a\\tu\\compiler\\include"
    ]

    // --- CONFIGURACION RECOMENDADA ---
    // Para un autocomplete mas limpio e inteligente,
    // desactiva sugerencias genericas basadas en palabras del archivo.
    "editor.wordBasedSuggestions": "off"
}
```

**IMPORTANTE para usuarios Windows:** En archivos JSON, usa doble barra invertida (`\\`) o barras normales (`/`) en las rutas.

**Ejemplo practico:**

```json
{
    "amxxpawn.compiler.executablePath": "C:/AMXX/compiler/amxxpc.exe",
    "amxxpawn.compiler.includePaths": [
        "C:/AMXX/compiler/include"
    ]
}
```

## ⌨️ Comandos disponibles

Abre la Paleta de Comandos (`Ctrl+Shift+P`) y escribe `AMXXPawn` para ver los comandos:

* **`AMXXPawn: Compile Plugin`:** Compila el archivo `.sma` abierto usando el `executablePath` definido en la configuracion.
* **`AMXXPawn: Compile Plugin Local`:** Busca y usa un `amxxpc.exe` ubicado en la misma carpeta del `.sma` que estas editando.

## 🛠️ Para desarrolladores y contribuidores

Este proyecto moderniza una base de codigo heredada y ahora usa TypeScript y las APIs mas recientes de `vscode-languageclient`. Las contribuciones son bienvenidas.

**Para compilar y probar localmente:**

1. Clona el repositorio: `git clone https://github.com/NiceFeatures/amxxpawn-language.git`
2. Instala dependencias: `npm install`
3. Compila el proyecto: `npm run compile`
4. Abre el proyecto en VS Code y presiona `F5` para iniciar una sesion de depuracion.

## 🙏 Agradecimientos

Este proyecto es una continuacion y modernizacion del increible trabajo hecho originalmente por **KliPPy**. Todo el credito por la base solida y la idea original es para el.

## 📄 Licencia

Este proyecto esta licenciado bajo **GPL-3.0**. Consulta el archivo `LICENSE` para mas detalles.
