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

export const expandIncludes = (data, included) => {
  data.forEach((item, index) => {
    Object.entries(item.relationships).forEach(([relation_name, relation]) => {
      included.forEach(included_data => {
        if (
          included_data.id === relation.data.id &&
          included_data.type === relation.data.type
        ) {
          relation.data = included_data;
        }
      });
    });
  });
};

export const stringifyParams = params => {
  let stringifiedParams = '';

  if (params) {
    Object.entries(params).forEach(([key, value], index) => {
      stringifiedParams += index === 0 ? '?' : '&';

      if (key === 'include' && Array.isArray(value)) {
        stringifiedParams += 'include=';
        value.forEach((include, index) => {
          stringifiedParams += include;
          if (value[index + 1]) {
            stringifiedParams += ',';
          }
        });
      } else {
        stringifiedParams += `${paramToSnakeCase(key)}=${value}`;
      }
    });
  }

  return stringifiedParams;
};

const paramToSnakeCase = param => {
  return param
    .replace(/(?:^|\.?)([A-Z])/g, function(x, y) {
      return '_' + y.toLowerCase();
    })
    .replace(/^_/, '');
};
