# ago-web
La web de Ayoze García Ojeda.

## Requisitos
- [Node.js versión 20](https://nodejs.org/es)

## Instalación
En el directorio del repositorio ejecuta:
```sh
npm install
```

## Desarrollo
En el directorio del repositorio ejecuta:
```sh
npm run dev
```

Esto levantará un servidor en http://localhost:8080. Para ver la web accede a http://localhost:8080/.

El servidor se quedará escuchando a los cambios en los ficheros para actualizar la web. Sin embargo, a veces no detecta los cambios y necesitas reiniciarlo. Para ello apreta CTRL+C en la ventana donde está el servidor y una vez el proceso se haya parado ejecuta de nuevo `npm run dev`.

### Scripts útiles
Puedes abrir otras terminales en el directorio del proyecto para ejectuar algunos de los scripts incluídos:
- `npm run clean`: borra la carpeta `_site`que es donde está la web final.
- `npm run dependencies:purge`: elimina las dependencias del proyecto y las vuelve a instalar.
- `npm run dev`:  arranca el servidor escuchando en http://localhost:8080/.
- `npm run stage`:  arranca el servidor escuchando en http://localhost:8080/ago-web y generando todo como si fuera producción. Útil para comprobar si todo va como debería una vez desplegado.


