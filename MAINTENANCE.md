# Modo de Mantenimiento

## Uso

Para activar el modo de mantenimiento, actualiza el archivo `.env.local`:

```bash
PUBLIC_MAINTENANCE_MODE=true
```

Para desactivarlo:

```bash
PUBLIC_MAINTENANCE_MODE=false
```

## Características

- **Diseño Atractivo**: Página con gradiente morado/negro y animaciones
- **Iconos de Entrenamiento**: Usa pesas (dumbbell) y herramientas (wrench)
- **Responsive**: Se adapta a todos los tamaños de pantalla
- **Información Clara**: Explica que el sitio está en mantenimiento

## Despliegue a Producción

Cuando subas a producción con mantenimiento activo:

1. Asegúrate de tener `PUBLIC_MAINTENANCE_MODE=true` en tus variables de entorno de Netlify
2. Despliega normalmente
3. Los usuarios verán la página de mantenimiento en lugar del sitio normal
4. Cuando termines las actualizaciones, cambia a `PUBLIC_MAINTENANCE_MODE=false` y vuelve a desplegar
