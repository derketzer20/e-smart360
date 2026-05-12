# Wireframes `/previsualizar` (temporal)

## Activar en local

1. Con **`npm run dev`** los enlaces **PREV · Revendedor | Cliente** aparecen **automáticamente** junto a Precios (no hace falta `.env`).

2. Opcional: en `e-smart360/.env.local` puede forzar:
   - `NEXT_PUBLIC_SHOW_WIREFRAMES=true` — también en builds de preview si la variable está definida.
   - `NEXT_PUBLIC_SHOW_WIREFRAMES=false` — oculta los enlaces incluso en `next dev` (útil si molesta).

3. Reinicie el servidor de desarrollo si cambia variables de entorno.

4. Rutas directas:

   - `/previsualizar/panel-revendedor`
   - `/previsualizar/panel-cliente`

## Producción (Vercel)

- **No** defina `NEXT_PUBLIC_SHOW_WIREFRAMES` en variables de entorno de producción, o déjela en `false`.
- Las rutas siguen existiendo en el build; si desea ocultarlas por completo en producción, elimine las rutas o proteja con middleware en una fase posterior.

## Retirar después de la demo

- [ ] Quitar `NEXT_PUBLIC_SHOW_WIREFRAMES` de `.env.local`.
- [ ] (Opcional) Eliminar `app/previsualizar/`, `components/wireframes/` y el bloque condicional en `components/landing/navigation.tsx` en un PR dedicado.

## Nota legal / producto

Los wireframes **no** llaman a APIs reales del proveedor; los datos son ficticios con fines didácticos.
