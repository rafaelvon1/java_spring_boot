// Buscar todas as vagas

async function fetchDados() {
  try {
    const response = await fetch(`${API_URL}/vagas`);

    if (!response.ok) {
      throw new Error("Erro ao buscar vagas");
    }

    const data = await response.json();
    const tbody = document.getElementById("tabela-vagas");
    tbody.innerHTML = "";

    data.forEach(vaga => {
      const empresaEscapada = encodeURIComponent(vaga.empresa);
      const tituloEscapado = encodeURIComponent(vaga.tituloVaga);

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${vaga.id}</td>
        <td>${vaga.empresa}</td>
        <td>${vaga.tituloVaga}</td>
        <td>${vaga.tipoDeficiencia}</td>
        <td>${vaga.dataPublicacao}</td>
        <td>${vaga.dataExpiracao}</td>
        <td>
          <button onclick="editarProduto(${vaga.id}, '${empresaEscapada}', '${tituloEscapado}', '${vaga.texto}', '${vaga.tipoDeficiencia}', '${vaga.endereco}', ${vaga.salario}, '${vaga.beneficios}', '${vaga.tipoContrato}', '${vaga.requisitos}', '${vaga.dataPublicacao}', '${vaga.dataExpiracao}')">Editar</button>
          <button onclick="deletarProduto(${vaga.id})">Excluir</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao carregar vagas:", error);
  }
}

// Salvar ou atualizar vaga
async function salvarProduto(event) {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const vaga = {
    id,
    empresa: document.getElementById("empresa").value,
    tituloVaga: document.getElementById("titulo_vaga").value,
    texto: document.getElementById("texto").value,
    tipoDeficiencia: document.getElementById("tipo_deficiencia").value,
    endereco: document.getElementById("endereco").value,
    salario: parseFloat(document.getElementById("salario").value),
    beneficios: document.getElementById("beneficios").value,
    tipoContrato: document.getElementById("tipo_contrato").value,
    requisitos: document.getElementById("requisitos").value,
    dataPublicacao: document.getElementById("data_publicacao").value,
    dataExpiracao: document.getElementById("data_expiracao").value
  };

  try {
    let response;
    alert("Vaga salva com sucesso")
    if (id) {
      response = await fetch(`${API_URL}/vagas/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vaga)
      });
    } else {
      response = await fetch(`${API_URL}/vagas/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vaga)
      });
    }

    if (!response.ok) {
      throw new Error("Erro ao salvar vaga");
    }

    document.getElementById("form-vaga").reset();
    fetchDados();
  } catch (error) {
    console.error("Erro ao salvar:", error);
  }
}

// Deletar vaga
async function deletarProduto(id) {
  if (confirm("Deseja excluir esta vaga?")) {
    try {
      const response = await fetch(`${API_URL}/vagas/delete/${id}`, { method: "DELETE" });
      alert("Vaga Excluida com sucesso")

      if (!response.ok) {
        throw new Error("Erro ao excluir vaga");
      }

      fetchDados();
    } catch (error) {
      console.error("Erro ao excluir:", error);
      alert("Erro ao excluir a vaga")
    }
  }
}

// Editar vaga (preenche o formulário)
function editarProduto(id, empresa, tituloVaga, texto, tipoDeficiencia, endereco, salario, beneficios, tipoContrato, requisitos, dataPublicacao, dataExpiracao) {
  document.getElementById("id").value = id;
  document.getElementById("empresa").value = decodeURIComponent(empresa);
  document.getElementById("titulo_vaga").value = decodeURIComponent(tituloVaga);
  document.getElementById("texto").value = texto;
  document.getElementById("tipo_deficiencia").value = tipoDeficiencia;
  document.getElementById("endereco").value = endereco;
  document.getElementById("salario").value = salario;
  document.getElementById("beneficios").value = beneficios;
  document.getElementById("tipo_contrato").value = tipoContrato;
  document.getElementById("requisitos").value = requisitos;
  document.getElementById("data_publicacao").value = dataPublicacao;
  document.getElementById("data_expiracao").value = dataExpiracao;
}

document.getElementById("form-vaga").addEventListener("submit", salvarProduto);

// Carregar vagas na inicialização
fetchDados();
