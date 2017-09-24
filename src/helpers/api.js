export const callV1Api = (endpoint, method, body) => {
  const uid = localStorage.getItem('X-USER-UID');
  const token = localStorage.getItem('X-USER-TOKEN');

  return fetch(`${process.env.REACT_APP_API_URL}/v1/${endpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'X-USER-UID': uid,
      'X-USER-TOKEN': token
    },
    body: JSON.stringify(body)
  });
};
