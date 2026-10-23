# Turismo RD - Menú dinámico

Proyecto básico para la práctica de la UASD sobre la creación de un menú dinámico usando una estructura de datos.

## ¿Qué hace?

- Carga las opciones iniciales desde `data/menu.json`.
- Crea los enlaces con JavaScript.
- Permite agregar opciones nuevas.
- Permite cambiar el enlace de una opción.
- Permite eliminar opciones.
- Actualiza el menú sin recargar la página.
- Guarda los cambios en el navegador con `localStorage`.
- Tiene un diseño sencillo que se adapta a pantallas pequeñas.
- Incluye una sección de destinos y un formulario de demostración.

**Nota:** el formulario no realiza reservas reales. Los cambios del menú se guardan en el navegador actual; no modifican automáticamente el archivo `menu.json`.

## Archivos del proyecto

```text
menu-turismo-basico/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
├── data/
│   └── menu.json
└── README.md
```

## Cómo ejecutar

1. Descarga y descomprime la carpeta.
2. Abre la carpeta en Visual Studio Code.
3. Ejecuta `index.html` con la extensión **Live Server**.
4. Prueba los enlaces del menú y el formulario para agregar opciones.

Es mejor usar Live Server porque los navegadores pueden bloquear la lectura de JSON si se abre el archivo HTML directamente.

## ¿Qué es JSON?

JSON significa JavaScript Object Notation. Es un formato de texto usado para organizar e intercambiar datos. En este proyecto guarda el identificador, nombre y enlace de cada opción del menú.

Ejemplo:

```json
{
  "menu": [
    { "id": 1, "nombre": "Inicio", "enlace": "#inicio" },
    { "id": 2, "nombre": "Destinos", "enlace": "#destinos" }
  ]
}
```

## Conceptos solicitados

- **API:** conjunto de reglas que permite que dos programas se comuniquen.
- **REST:** estilo para construir servicios web que suelen intercambiar datos usando HTTP.
- **SOAP:** protocolo para intercambiar mensajes estructurados entre aplicaciones, normalmente con XML.
- **JSON:** formato de texto para organizar datos en objetos y listas.
- **XML:** formato que organiza datos mediante etiquetas.
- **GraphQL:** lenguaje que permite solicitar a una API los datos específicos que necesita una aplicación.

Estos conceptos se relacionan con el intercambio de datos. API es una interfaz; REST es un estilo arquitectónico; SOAP es un protocolo; JSON y XML son formatos de datos; GraphQL es un lenguaje de consulta para API. Este proyecto usa JSON local, no una API REST, SOAP o GraphQL.

## Uso de Inteligencia Artificial

Se utilizó ChatGPT como apoyo para organizar los archivos, comprender cómo leer JSON con JavaScript y preparar una primera versión del código. El estudiante debe probar el proyecto y revisar el código para poder explicar su funcionamiento.

## Referencias

- JSON: https://www.w3schools.com/js/js_json_intro.asp
- XML: https://www.w3schools.com/xml/
- REST / HTTP: https://www.w3schools.com/xml/xml_http.asp
- SOAP: https://www.w3schools.com/xml/xml_soap.asp
- GraphQL: https://graphql.org/learn/
- GitHub: https://docs.github.com/es/get-started

## Subir a GitHub

1. Crea en https://github.com/ un repositorio público llamado `menu-turismo-basico`.
2. Sube todos los archivos de esta carpeta.
3. Copia el enlace público del repositorio y entrégalo en la plataforma de la asignatura.

Puedes usar Git desde una terminal:

```bash
git init
git add .
git commit -m "Crear menú dinámico básico de turismo"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/menu-turismo-basico.git
git push -u origin main
```

Reemplaza `TU-USUARIO` por tu usuario real de GitHub.
