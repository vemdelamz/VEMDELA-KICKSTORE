/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request}) {
  throw new Response(`${new URL(request.url).pathname} not found`, {
    status: 404,
  });
}

export default function CatchAllPage() {
  return (
    <div>Ola</div>
  )
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
