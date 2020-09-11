const listarClientes = () => {
  return fetch("http://localhost:8080/clientes")
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      return json;
    });
};

const cadastrarClientes = (nome, cpf) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf,
  });

  return fetch("http://localhost:8080/clientes/cliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  }).then((resp) => {
    return resp.body;
  });
};

const deletaCliente = (id) => {
  return fetch(`http://localhost:8080/clientes/cliente/${id}`, {
    method: "DELETE",
  });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:8080/clientes/cliente/${id}`, {
    method: "GET",
  }).then((resposta) => {
    return resposta.json();
  });
};

const editaCliente = (id, cpf, nome) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf,
  });

  return fetch(`http://localhost:8080/clientes/cliente/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  });
};
