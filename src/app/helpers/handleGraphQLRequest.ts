const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

export function handleGraphQLRequest(query) {
  const client = new Lokka({
    transport: new Transport('/api'),
  });
  return client.query(query);
};
