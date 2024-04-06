### Instrucciones para iniciar

1. Instalar dependencias `pnpm install`
2. Compilar web `pnpm build`
3. Iniciar servidor `pnpm start`

> [!NOTE]
>
> Si no desea utilizar `pnpm` como gestor de paquetes, es libre de usar cualquier alternativa, como `npm` o `yarn`

### Enfoque

Dividi el proyecto como ejercicio mental en 4 secciones:

#### 1. Consultas

Utilice el principio de Stale While Revalidate a traves de la libreria [swr](https://swr.vercel.app/) para mejorar el performance en las consultas.

Cree algunos hooks para una obtencion de datos mejor.

#### 2. Renderizado

Utilice 3 tipos de renderizado diferentes SSG, SSR y CSR. Permitiendo ser una pagina bastante flexible y adaptable. Segun la vista o componente nos encontraremos con Hooks como useMemo o useCallback para mejorar el performance entre re renderizados.

Utilice para los estilos SASS y CSS Modules.

Implemente animaciones con la libreria [animate.css ↗️](https://animate.style/)

#### 3. Filtrado

Desarrolle un sistema de filtro bastante sencillo al agrupar del lado del cliente las fotos por cada author para luego una vez haya un parametro de consulta `author` en la url filtrarlo.

#### 4. Mas alla

Decidi ir mas alla implementando un Infinite Scroll, un modal de MUI renderizado con [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) y mezclando renderizados estaticos, de servidor y de cliente para desafiar un poco mis conocimientos sobre el framework.

### Decision del diseño

Para el diseño aplicado quize irme por una linea vintage ya que hablamos de fotos. Me apoye un poco de [eminente ↗️](https://eminente.art/) al ser un proyecto que me gusta mucho. Tome como referencia una grid de fotos de eminente [Photos Grid ↗️](https://www.behance.net/gallery/186242447/Eminente/modules/1052917663) para el estilo vintage que queria trasnmitir.
