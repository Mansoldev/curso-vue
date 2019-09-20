## Diapositiva 1
En la clase de hoy veremos como crear un proyecto de Front de VUE, para ello necesitamos varios elementos:
- Un editor de texto como Visual Studio Code (Ya lo tenemos, serviría hasta el notepad de windows o el vi de linux).
- NodeJS y su gestor de paquetes NPM.
- Vue
Es opcional pero recomendable usar tambien:
- Git: El software de gestión de versiones más usado actualmente y desde hace años.
- Vue-cli: una libreria del entorno de vue que te proporciona una interfaz de comandos y gráfica (vue ui) para manejar tus proyectos

## Diapositiva 2 - Node + NPM
Para instalar ambos, tenemos que bajarnos el instalador de la página oficial e instalarlo como cualquier ejecutable de windows.
Una vez instalado, podemos comprobar que funciona correctamente ejecutando el comando:
* node -v
y 
* npm -v

### 2.1 Entorno node:
Node es un entorno de ejecución de Javascript para ejecutar javascript del lado del servidor, con el cual, a parte de hacer un frontend moderno, podriamos crear aplicaciones node multiproposito,
es decir, de backend, escritorio, internet de las cosas, IAs, etc...
https://www.w3schools.com/nodejs/nodejs_filesystem.asp
https://nodejs.org/dist/latest-v10.x/docs/api/

https://www.toptal.com/nodejs/por-que-demonios-usaria-node-js-un-tutorial-caso-por-caso
https://www.youtube.com/watch?v=Z4L_68tbW1c
https://pinchito.es/2013/nodejs-rapido-como-el-rayo.html

Con 
* node
Aparece un entorno interactivo, para salir, pulsamos ctrl + C dos veces.
IMAGEN

Para ejecutar un archivo:
* node archivo.js

Como ejemplo os traigo como crear un par de servidores en javascript:
- server.js es un servidor muy básico en 
IMAGENES

Por último, para actualizarlo se recomienda en windows desinstalarlo e instalarlo de nuevo, pero existen otras alternativas, paquetes npm como n, npx o nvm que te permiten tener distintas versiones de node.

### 2.2 NPM y paquetes: 
Es el gestor de paquetes de node, para actualizarlo es muy sencillo:
* npm update -g npm
Dado que el propio npm es un paquete de npm

El fichero package.json:
Este fichero almacena los datos y configuración más importantes de la App que estamos desarrollando, como por ejemplo el nombre, versión, dependencias, etc.
Se crea con el comando:
* npm init
* npm start
package-lock.json
http://vamoacodearlo.com/package-lock-json-quien-te-conoce/
https://docs.npmjs.com/files/package-lock.json

Como se gestionan los paquetes con npm:
https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm
2 - globalmente (nodemon): se instalan de forma global, añadiendose al PATH en "%AppData%/npm/" y se pueden usar directamente en la linea de comandos
1 - localmente (cowsay): se instalan para un proyecto, se linkean en la carpeta "node_modules/.bin/" del proyecto, no se añaden en el PATH y hay que ejecutarlos como script de npm (package.json) o desde la carpeta instalada.
3 - npx (cowsay): lo baja, lo ejecuta y lo borra y permite ejecutar, por ejemplo paquetes de github y otros: 
https://xavitristancho.pro/blog/que-es-npx
https://blog.kaleidos.net/2018/06/19/introduccion-a-npx/
https://www.npmjs.com/package/npx

### 2.3 Comandos npm:
https://codingpotions.com/npm-tutorial
https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties
https://www.freecodecamp.org/news/8-npm-tricks-you-can-use-to-impress-your-colleagues-dbdae1ef5f9e/

Antes de empezar con los comandos que tiene npm, me gustaría aclarar cómo funcionan el número de versión que tienen los paquetes. Los paquetes de NPM suelen seguir un versionado semántico, es decir: MAJOR.MINOR.PATCH
Por ejemplo dado un paquete con versión 5.4.2:
El primer número (5) indica una versión grande del paquete, es decir, cuando este número cambia. se supone que ha habido un cambio grande en el paquete que rompe lo que había con la versión anterior.
El segundo número (4) indica una versión menor, es decir, en esta versión se resuelven errores anteriores y se añaden cosas pero sin romper la versión anterior, es decir, esta versión será compatible con una versión anterior y por lo tanto se puede actualizar con seguridad.
El último número (2) indica arreglo de errores y pequeños fallos pero sin añadir funcionalidad, por lo tanto también es compatible con versiones anteriores.

Como he explicado antes, npm al usar versionado semántico, puedes indicar que tipo de actualización quieres en cada paquete:
Poniendo ~1.0.4, por ejemplo, solo va a actualizar el último número, es decir, va a subir solo de versión patch
Poniendo ^1.0.4, por ejemplo, solo va a actualizar los dos últimos números, es decir, va a subir solo de versión minor
Poniendo simplemente un asterisco en la versión *, va actualizar también de versión mayor.
Poniendo @latest se descarga la ultima versión publicada.
NPM al instalar paquetes por defecto, te coloca el ^ para que actualice versiones patch y minor.

* npm init [-y]: Inicia un proyecto npm
* npm run <nombre_comando>: Mira comandos que tienes en el package.json y los ejecuta si los encuentra.

* npm search [string]: Busca packetes del repositorio que coincidan con la cadena descrita.
* npm docs <nombre-paquete>: Muestra el README.md/documentation/página npmjs.org page del paquete especificado.
* npm info <nombre-paquete>: Muestra información del paquete por consola.

* npm list|npm ls: Sirva para pintar en pantalla el nombre de todos los paquetes instalados en el proyecto en el que estemos situados, nos da el nombre del paquete, su versión y las dependencias que haya encontrado.
* npm list --depth <numero>: Indicamos que queremos una profundidad de 0, solo va a mostrar los paquetes que hay en el package.json. Una profundidad de 1 mostrará esos paquetes más sus dependencias directas, y así sucesivamente.
* npm list -g: Lista los paquetes instalados globalmente.

* npm install|npm i: Instala las dependencias del package.json o instala un nuevo paquete para el proyecto.
lo que hace es leer el archivo del package.json para instalar todas las dependencias que encuentre. Si el paquete ya estaba instalado va a intentar actualizarlo.
Lo primero que se hace cuando te bajas un repositorio de git con paquetes npm es ejecutar este comando para que descargue todas las librerías, de lo contrario no funcionará.
* npm install <nombre-paquete@version-name>: Descarga el paquete y lo mete en la carpeta node modules. Para buscar el nombre del paquete lo puedes hacer en el repositorio de npmjs: https://www.npmjs.com/
* npm install <nombre-paquete> --save-exact: Este comando es igual que el anterior con la diferencia de que al guardarse en el package.json se guarda con la versión exacta en ese momento, es decir, nunca se va actualizar. Esto permite mantener siempre la misma versión para que todo funcione igual.
* npm install --global <nombre-paquete>| npm i -g <nombre-paquete>: Esto sirve para instalar un paquete globalmente, es decir, se suele utilizar para instalar utilidades en línea de comandos para poder utilizarlas mediante línea de comandos.
* npm install git://github.com/usuario/repositorio.git#v0.1.0: Si da la casualidad que el paquete que quieres instalar no se encuentra en el repositorio de paquetes de npmjs, no te preocupes porque también puedes instalar paquetes directamente desde el repositorio de github. Además al final puedes indicar la versión que quieres descargar (tirará de los tags del repositorio) y también puedes tirar de ramas para no tener problemas de versiones.
--save|-S: Hoy en día no se necesita
--save-dev|-D: Instala el paquete como dependencia de desarrollo, no se transpila para producción (ej: nodemon)
* npm uninstall [-g] <nombre-paquete>|npm un: Lo contrario a instalar un paquete, lo elimina de la carpeta node_modules y de las dependencias del package.json.

* npm outdated: Como su nombre indica, imprime una lista con los paquetes desactualizados.
* npm update|npm up: Actualiza todos los paquetes del package.json en caso de que hayan sido actualizados.
Como recomendación te aconsejo que instales este paquete para tener un listado de posibles actualizaciones de los paquetes
* npm i -g npm-check-updates > permite ejecutar ncu
* npm update <nombre-paquete>: Actualiza el paquete en particular.

## Diapositiva 3 - GIT
Instalamos git.

* git config --global user.email "you@example.com": Configuras tu correo
* git config --global user.name "Nombre": Configuras tu nombre


https://jrebel.com/rebellabs/git-commands-and-best-practices-cheat-sheet/
https://kodigoswift.com/git-fundamentos-y-ordenes-basicas/
* git init: 
* git clone: 

## Diapositiva 4 - VUE-CLI:
Estructura de carpetas

Repasar ECOSISTEMA (posible quasar)
Router
API (axios), 
Librerías (json to excel, vue-auto-router)
Vuetify, others
