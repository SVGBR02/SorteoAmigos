Lógica de Programación - Sorteo de Amigos

Este proyecto es parte de un desafío de lógica de programación cuyo principal objetivo es ayudarte a desarrollar y fortalecer tus habilidades con JavaScript. La aplicación permite agregar nombres a una lista de amigos y realizar un sorteo aleatorio entre ellos.

Funcionalidades

* Agregar amigos a una lista.
* Validar que el campo no esté vacío.
* Evitar nombres duplicados.
* Mostrar dinámicamente la lista en pantalla.
* Realizar un sorteo aleatorio entre los amigos agregados.
* Mostrar el nombre del amigo sorteado.

Objetivo del proyecto

Este proyecto tiene como finalidad:

* Practicar estructuras condicionales y bucles.
* Manipular el DOM (Document Object Model).
* Trabajar con arrays y eventos en JavaScript.
* Reforzar la validación de formularios.

Cómo utilizar

1. Clona el repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.
3. Escribe el nombre de un amigo y haz clic en "Agregar".
4. Repite el proceso con varios nombres.
5. Haz clic en "Sortear Amigo" para elegir uno al azar.

Ejemplo de uso

1. Escribes "Carlos", haces clic en "Agregar".
2. Luego "Lucía", y también la agregas.
3. Presionas "Sortear Amigo" y aparece un mensaje:
   "El amigo sorteado es: Lucía"

Detalles técnicos

* Los nombres se almacenan en un arreglo llamado `amigos`.
* Se usa `document.createElement` para añadir elementos a la lista.
* La función `sortearAmigo()` utiliza `Math.random()` para seleccionar un nombre aleatoriamente.
* El DOM se actualiza dinámicamente cada vez que se agrega un nuevo nombre o se actualiza la lista.Autor

Proyecto desarrollado como parte de un desafío práctico de lógica con JavaScript.
Se recomienda utilizarlo como base para prácticas, experimentos o mejoras personales.
