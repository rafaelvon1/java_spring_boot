const API_URL = "http://localhost:8080";

// Buscar todos os produtos
async function fetchDados() {
  try {
    const response = await fetch(`${API_URL}/produtos`);

    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    const data = await response.json();
    const tbody = document.getElementById("tabela-produtos");
    tbody.innerHTML = "";

    data.forEach(produto => {
      const tr = document.createElement("tr");
      const descricaoEscapada = encodeURIComponent(produto.descricao);

      tr.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.descricao}</td>
        <td>R$ ${produto.preco.toFixed(2)}</td>
        <td>
          <button onclick="editarProduto(${produto.id}, '${descricaoEscapada}', ${produto.preco})">Editar</button>
          <button onclick="deletarProduto(${produto.id})">Excluir</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

// Salvar ou atualizar produto
async function salvarProduto(event) {
  event.preventDefault();

  const id = document.getElementById("produto-id").value;
  const descricao = document.getElementById("descricao").value;
  const preco = parseFloat(document.getElementById("preco").value);

  const produto = { id, descricao, preco };

  try {
    let response;
    if (id) {
      // Atualizar (PUT)
      response = await fetch(`${API_URL}/produto/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
      });
    } else {
      // Criar (POST)
      response = await fetch(`${API_URL}/produtos/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
      });
    }

    if (!response.ok) {
      throw new Error("Erro ao salvar produto");
    }

    document.getElementById("form-produto").reset();
    fetchDados();
  } catch (error) {
    console.error("Erro ao salvar:", error);
  }
}

// Deletar produto
async function deletarProduto(id) {
  if (confirm("Deseja excluir este produto?")) {
    try {
      const response = await fetch(`${API_URL}/produto/delete/${id}`, { method: "DELETE" });

      if (!response.ok) {
        throw new Error("Erro ao excluir produto");
      }

      fetchDados();
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  }
}

// Editar produto (preenche o formulário)
function editarProduto(id, descricaoEscapada, preco) {
  const descricao = decodeURIComponent(descricaoEscapada);
  document.getElementById("produto-id").value = id;
  document.getElementById("descricao").value = descricao;
  document.getElementById("preco").value = preco;
}

// Listener do formulário
document.getElementById("form-produto").addEventListener("submit", salvarProduto);

// Carregar produtos na inicialização
fetchDados();
