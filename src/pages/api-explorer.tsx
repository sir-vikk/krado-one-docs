import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useEffect, useState } from 'react';

type SwaggerUIComponent = React.ComponentType<{
  url: string;
  docExpansion?: string;
}>;

export default function ApiExplorer(): React.JSX.Element {
  const [SwaggerUI, setSwaggerUI] = useState<SwaggerUIComponent | null>(null);
  const openapiUrl = useBaseUrl('/openapi/openapi.json');

  useEffect(() => {
    void import('swagger-ui-react/swagger-ui.css');
    void import('swagger-ui-react').then((m) => setSwaggerUI(() => m.default));
  }, []);

  return (
    <Layout title="API reference" description="OpenAPI 3 specification for Krado One">
      <main style={{ maxWidth: 1320, margin: '0 auto', padding: '1rem 1rem 3rem' }}>
        <h1>HTTP API reference</h1>
        <p>
          Regenerate the spec: <code>node scripts/generate-openapi.mjs</code>
        </p>
        {!SwaggerUI ? (
          <p>Loading OpenAPI UI…</p>
        ) : (
          <SwaggerUI url={openapiUrl} docExpansion="list" />
        )}
      </main>
    </Layout>
  );
}
