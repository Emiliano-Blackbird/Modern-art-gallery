# Modern Art Gallery

Este proyecto muestra el sitio web de una galería de arte moderno.

## Desarrollo

Para ejecutar este proyecto en modo desarrollo:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo en http://localhost:5173

## Build de producción

Para crear el build de producción con CSS sin minificar (manteniendo el formato original):

```bash
npm run build-with-css
```

Esto creará una carpeta `dist` con los archivos optimizados para producción y mantendrá el archivo CSS con su formato original sin minificar.

Para el build estándar (con CSS minificado):

```bash
npm run build
```

## Ver el build de producción

Para ver correctamente el build de producción, debes usar un servidor web. Si abres los archivos directamente desde el sistema de archivos (con doble clic), las rutas relativas pueden no resolverse correctamente.

Puedes usar cualquiera de estos métodos:

### 1. Usando el comando de Vite

```bash
npm run preview
```

Esto iniciará un servidor en http://localhost:4173

### 2. Usando un servidor simple de Python

```bash
npm run serve-dist
```

Esto iniciará un servidor en http://localhost:8080

## Publicación en Internet

Para publicar el sitio en Internet:

1. Ejecuta el comando de build para generar la carpeta `dist` (preferiblemente con CSS sin minificar):
   ```bash
   npm run build-with-css
   ```

2. Sube todo el contenido de la carpeta `dist` a tu servidor web o plataforma de hosting (como Netlify, Vercel, GitHub Pages, etc.).

3. Asegúrate de subir todas las subcarpetas, especialmente la carpeta `assets` que contiene las imágenes y archivo CSS.

4. El sitio debería funcionar correctamente al hacer clic en index.html, ya que todas las rutas están configuradas como rutas relativas sin puntos iniciales (por ejemplo, `assets/style.css` en lugar de `./assets/style.css`).

## Posibles problemas

- **Si los estilos no se aplican correctamente**: Asegúrate de estar utilizando un servidor web para visualizar el proyecto después del build. No abras los archivos directamente desde el sistema de archivos.
- **Si las imágenes se ven demasiado pequeñas**: Vite puede comprimir las imágenes durante el build. Si notas diferencias significativas, asegúrate de que las propiedades CSS para las imágenes (width, height, object-fit) están configuradas correctamente.

## Estructura de archivos

- `/index.html` - Página principal
- `/location.html` - Página de ubicación
- `/sass/` - Archivos de estilos SASS
- `/img/` - Imágenes del proyecto 