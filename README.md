[![Netlify Status](https://api.netlify.com/api/v1/badges/e420694b-3636-414d-ab67-84ae7df0e9d9/deploy-status)](https://app.netlify.com/sites/flamboyant-stonebraker-a2f3a7/deploys)
[![wakatime](https://wakatime.com/badge/user/0314f862-a840-4097-a5f5-e3b2f2c099f9/project/a8defea9-7318-4478-8a06-3edf72128769.svg)](https://wakatime.com/badge/user/0314f862-a840-4097-a5f5-e3b2f2c099f9/project/a8defea9-7318-4478-8a06-3edf72128769)

# Whatsagram-2022

Aplicación de mensajería.

Esta aplicación pretende simular la estética y algunas de las funcionalidades de las aplicaciones de mensajería más conocidas.

Para ello se ha utilizado únicamente HTML, CSS y JavaScript, intentando en todo momento escribir un código limpio y ordenado. Para la realización de la aplicación se han utilizado módulos de JS así como algunas clases, manteniendo una estructura de directorios adecuada. Para el control de vesiones se ha utilizado Git y GitHub.

Para el seguimiento de las tareas a realizar, las tareas que se iban realizando en cada momento y las ya finalizadas, se ha decidido utlizar la herramienta Notion, en la cual se ha construido una pizarra en dormato KanBan. El siguiente enlace muestra la pizarra con las tareas realizadas, las funcionalidades extra y posibles mejoras que se podrían añadir a la aplicación.

[Notion KanBan page](https://cat-maiasaura-4d1.notion.site/301951371c414328bd4d00826b94c081?v=f9d385ae40a24c8db9c397381c7e4582)

Esta aplicación se encuentra desplegada en la plataforma Netlify, se pueden ver los resultados alcanzados.

[Whatsagram app deployed on Netlify](https://flamboyant-stonebraker-a2f3a7.netlify.app/)

## Funcionalidades extra

Como extras se han añadido una serie de características:

- Se ha creado un teclado completo de emojis, con un total de 40 emojis.
- Los emojis pueden enviarse como mensaje único o incluirlos dentro de los mensajes de texto.
- Se ha añadido una funcionalidad de scroll en la sección de mensajes para evitar el overflow y además permitir que se puedan visualizar tanto los emnsajes nuevos como los anteriormente enciados.
- Se ha añadido un bo†ón extra para mostrar números y símbolos.
- Se ha añadido un teclado que incliuye números y símbolos.
- Para evitar interacciones extrañas con palabras demasiado largas en los mensajes, se ha añadido una funcionalidad que corta las palabras largas para que estas tengan una longitud máxima igual a la de su contenedor.
- Al cargar la página y cada vez que el usuario clica sobre un botón, se centra el foco (focus) en el input, para así hacer que se muestre la barra parpadeante que indica al usuario que está escribiendo y la posición en la que se encuentra dentro del texto. Por contra, esto hace que en móvil salte el teclado virtual del dispositivo cada vez que se clica un botón. Este último problema no se ha intentado solucionar puesto que se trata de una aplicación simple y pensada para su uso en ordenador.
- Se muestra el último mensaje enviado o recibido gracias a una funcionalidad que desliza la vista de la sección de mensajes hacia arriba, para así mostrar el último mensaje generado en la pantalla.
- Se han añadido iconos de check que se muestran con un retardo simulando la funcionalidad de una aplicación de mensajería real, donde el usuario tiene un feedback que le indica si su mensaje se ha enviado correctamente y si además el mensaje a llegado a su destino.
- Se ha incluido una funcionalidad que al enviar los mensajes muestra un mensaje de respuesta por cada mensaje enviado, con un retardo variable, simulando que hay una respuesta por parte de otro usuario.

## Posibles mejoras

Esta es una lista de posibles mejoras que podrían incluirse a la aplicación:

- Añadir una ventana emergente mostrando un menú al clicar sobre el icono de settings incluido en la esquina superior derecha.
- Añadir diferentes páginas de emojis por las que el usuario pueda navegar.
- Añadir una página de GIF animados.
- Añadir un botón para poder enviar mensajes de audio.
- Añadir un botón para poder enviar fotos capturadas con la cámara del ordenador.
- Mostrar un mensaje en el header que indique al usuario cuando se está escribiendo un mensaje.
