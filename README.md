# Portfolio — Lautaro Saez

Sitio de portfolio personal (diseño, animación y modelado/render 3D). HTML, CSS y JavaScript vanilla — sin frameworks, sin build step.

## Estructura

```
index.html              → Menu / home con moodboard draggable
diseno-branding.html
diseno-estampas.html
diseno-posters.html
animacion.html
modelado-render.html
sobre-mi.html
contacto.html
style.css
script.js
assets/                 → imágenes, gifs, video, cursores custom, cv.pdf
```

## Publicar en GitHub Pages

1. Creá un repo nuevo en GitHub (público, o privado si tenés plan Pro).
2. Subí este contenido:
   ```bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git branch -M main
   git add .
   git commit -m "Portfolio inicial"
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Source** → elegí la rama `main` y la carpeta `/ (root)`.
4. GitHub te da la URL en 1-2 minutos: `https://TU-USUARIO.github.io/TU-REPO/`

No hace falta build ni configuración extra — es HTML/CSS/JS estático, GitHub Pages lo sirve tal cual.

### Alternativa sin terminal

Si no querés usar git: en GitHub, "Add file → Upload files" y arrastrá todo el contenido de esta carpeta (menos `.git` y `.gitignore`, esos son invisibles igual). Funciona igual, pero perdés el historial de versiones para futuros cambios.

## Notas técnicas

- El formulario de contacto usa [Formspree](https://formspree.io) (`FORM_ENDPOINT` en `script.js`) — no necesita backend propio, funciona igual en hosting estático.
- Todas las rutas de assets son relativas — no hay nada hardcodeado a una ruta local.
- Los nombres de archivo coinciden exactos en mayúsculas/minúsculas con sus referencias en el código (GitHub Pages es case-sensitive, a diferencia de macOS/Windows en local).
- Responsive mobile: implementado parcialmente vía media queries, pendiente una pasada dedicada.
