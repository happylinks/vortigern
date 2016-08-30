async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error: any = new Error(response.statusText);
    const json = await response.json();
    error.response = json;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

export function handleRequest(url, options: any = {}) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function post(url, data) {
  let token;
  if (window) {
    token = localStorage.getItem('token');
  }
  return handleRequest(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(data),
  });
}
