# Amigo Secreto

Este es un proyecto simple para sortear amigos secretos. Los usuarios pueden agregar nombres de amigos y luego sortear un amigo secreto al azar.

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la aplicación.
- `style.css`: Contiene los estilos CSS para la aplicación.
- `app.js`: Contiene la lógica JavaScript para agregar amigos y sortear un amigo secreto.
- `assets/`: Contiene las imágenes utilizadas en la aplicación.

## Cómo Usar

1. Abre `index.html` en tu navegador.
2. Ingresa el nombre de un amigo en el campo de texto.
3. Haz clic en el botón "Añadir" para agregar el nombre a la lista.
4. Repite los pasos 2 y 3 para agregar más amigos.
5. Haz clic en el botón "Sortear amigo" para seleccionar un amigo secreto al azar.

## Funciones JavaScript

### `agregarAmigo()`

Esta función se llama cuando el usuario hace clic en el botón "Añadir". Agrega el nombre ingresado a la lista de amigos y actualiza la lista en la pantalla.

### `sortearAmigo()`

Esta función se llama cuando el usuario hace clic en el botón "Sortear amigo". Selecciona un amigo al azar de la lista, lo muestra en la pantalla y lo elimina de la lista.

### `refrescarListadoDeAmigosEnPantalla()`

Esta función actualiza la lista de amigos en la pantalla.

## Estilos CSS

Los estilos CSS están definidos en `style.css` y se utilizan para dar estilo a la aplicación, incluyendo colores, fuentes y disposición de los elementos.

## Imágenes

Las imágenes utilizadas en la aplicación están ubicadas en la carpeta `assets/`.

- `amigo-secreto.png`: Imagen representativa de amigo secreto.
- `play_circle_outline.png`: Ícono para el botón de sortear.

## Créditos

Este proyecto fue creado como un desafío para practicar HTML, CSS y JavaScript por Mónica Molina.