# AUREN — publicación rápida

## Opción recomendada: Render

1. Crea una cuenta en https://render.com
2. Crea un repositorio en GitHub y sube todos los archivos de esta carpeta.
3. En Render pulsa **New + > Web Service**.
4. Conecta tu repositorio.
5. Configura:
   - Runtime: Node
   - Build Command: npm install
   - Start Command: npm start
   - Plan: Free
6. Pulsa **Create Web Service**.
7. Render te entregará una dirección pública.

## Importante
Esta versión es un MVP demostrativo:
- Los proyectos se guardan en memoria y pueden perderse al reiniciar.
- No incluye autenticación real.
- No incluye almacenamiento de imágenes.
- No está lista todavía para datos sensibles o producción comercial.

Para una versión comercial habrá que añadir base de datos, usuarios, contraseñas seguras, almacenamiento de imágenes, moderación protegida y copias de seguridad.
