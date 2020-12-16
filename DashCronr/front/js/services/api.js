const domain = "http://localhost:3000";


// função CRIAR
async function create(resource, data) {
  const res = await fetch(`${domain}${resource}`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });

  return await res.json();
}

// simula o processo de leitura dos dados em db.json
// domain = url para o método GET
// resourse = recurso json
async function read(resource) {
  const res = await fetch(`${domain}${resource}`);

  return await res.json();
}

// função UPDATE
async function update(resource, data) {
  const res = await fetch(`${domain}${resource}`, {
    method: "put",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });

  return await res.json();
}

// função EXCLUIR
async function destroy(resource) {
  await fetch(`${domain}${resource}`, {
    method: "delete"
  });
}


export default { create, read, update, destroy };
