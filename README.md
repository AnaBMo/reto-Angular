# Fundae Frameworks Frontend
## reto-Angular
Crearemos una aplicación básica con Angular que gestione una lista de elementos.

### Configuración inicial

1. Instalar Node.js
2. npm install -g @angular/cli
3. ng new lista-de-elementos


### Desarrollo

1. Generar un componente para la lista de elementos usando:
ng generate component lista-elementos

2. Dentro del archivo lista-elementos.component.ts definimos un array para guardar los elementos
y una función para añadir nuevos elementos a este array.

3. En el archivo lista-elementos.component.html creamos un formulario que permita a los 
usuarios ingresar un nuevo elemento y tenga un botón para agregarlo a la lista.

4. Usaremos la directiva *ngFor para mostrar cada elemento del array en la vista del componente.

5. Añadir estilos básicos en el archivo lista-elementos.component.css

### Pruebas y depuración

Ejecutamos ng serve para probar la aplicación y visitamos http://localhost:4200 para asegurarnos 
del buen funcionamiento de nuestra aplicación.
