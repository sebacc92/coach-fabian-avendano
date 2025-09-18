# Guía de Metadatos para Compartir en Redes Sociales

## ¿Qué son los metadatos?

Los metadatos son información que se muestra cuando compartes un enlace en WhatsApp, Facebook, Twitter, Telegram, etc. Controlan:
- **Título**: El texto principal que aparece
- **Descripción**: El texto secundario que explica el contenido
- **Imagen**: La imagen que se muestra junto al enlace
- **URL**: El enlace que se comparte

## ¿Cómo funciona en tu sitio?

He creado un sistema de metadatos que incluye:

### 1. Open Graph Tags (para Facebook, WhatsApp, etc.)
```html
<meta property="og:title" content="Título del programa">
<meta property="og:description" content="Descripción del programa">
<meta property="og:image" content="https://tu-sitio.com/imagen.jpg">
<meta property="og:url" content="https://tu-sitio.com/programa">
```

### 2. Twitter Card Tags (para Twitter)
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título del programa">
<meta name="twitter:description" content="Descripción del programa">
<meta name="twitter:image" content="https://tu-sitio.com/imagen.jpg">
```

## Cómo usar en tus páginas de programas

### Paso 1: Importar las funciones
```typescript
import { generateProgramMetadata, createProgramHead } from "~/utils/metadata";
```

### Paso 2: Definir el programa
```typescript
const program = {
  img: "/images/tu-imagen.jpg",
  title: "Título del Programa",
  desc: "Descripción del programa",
  // ... otras propiedades
};
```

### Paso 3: Crear los metadatos
```typescript
export const head: DocumentHead = () => {
  const metadata = generateProgramMetadata(program, "slug-del-programa");
  return createProgramHead(metadata);
};
```

## Ejemplo completo

```typescript
import { generateProgramMetadata, createProgramHead } from "~/utils/metadata";

export const head: DocumentHead = () => {
  const program = {
    img: "/images/hip-thrust.webp",
    title: "Piernas 6 semanas (2 por semana)",
    desc: "Especialización completa en miembros inferiores. Programa de 6 semanas para el desarrollo completo de piernas y glúteos.",
    // ... otras propiedades
  };

  const metadata = generateProgramMetadata(program, "piernas-frecuencia");
  return createProgramHead(metadata);
};
```

## Resultado

Cuando alguien comparta tu enlace en WhatsApp, verá:
- **Título**: "Piernas 6 semanas (2 por semana) - Fabián Avendaño"
- **Descripción**: "Especialización completa en miembros inferiores..."
- **Imagen**: La imagen del hip thrust
- **URL**: El enlace a tu página

## Recomendaciones para imágenes

- **Tamaño**: 1200x630 píxeles (formato 1.91:1)
- **Formato**: JPG o PNG
- **Peso**: Menos de 1MB
- **Contenido**: Que sea relevante al programa

## Testing

Para probar cómo se ven tus metadatos:
1. **Facebook**: https://developers.facebook.com/tools/debug/
2. **Twitter**: https://cards-dev.twitter.com/validator
3. **LinkedIn**: https://www.linkedin.com/post-inspector/

## Notas importantes

- Los metadatos se cachean, así que puede tomar tiempo ver los cambios
- WhatsApp y otras plataformas pueden cachear por hasta 24 horas
- Asegúrate de que las imágenes sean públicas y accesibles
- Las URLs deben ser absolutas (completas con https://) 