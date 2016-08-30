const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

export function handleGraphQLRequest(query) {
  // TODO: client is made multiple times now, just do it once.
  const client = new Lokka({
    transport: new Transport('http://localhost:8080/api', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    }),
  });
  return client.query(query);
};
