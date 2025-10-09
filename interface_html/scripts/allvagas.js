async function fetchDados() {
  try {
    const response = await fetch(`${API_URL}/vagas`);

    if (!response.ok) {
      throw new Error("Erro ao buscar vagas");
    }

    const data = await response.json();
    const tbody = document.getElementById("tabela-produtos");
    tbody.innerHTML = "";

    data.forEach(vaga => {

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="vaga">${vaga.empresa}</td>
        <td class="vaga">${vaga.tituloVaga}</td>
        <td class="vaga">${vaga.tipoDeficiencia}</td>
        <td class="vaga">${vaga.endereco}</td>
        <td class="vaga">${vaga.salario.toFixed(2)}</td>
        <td class="vaga">${vaga.beneficios}</td>
        <td class="vaga">${vaga.tipoContrato}</td>
        <td class="vaga">${vaga.requisitos}</td>
        <td class="vaga">${vaga.texto}</td>
        <td class="vaga">${vaga.dataPublicacao}</td>
        <td class="vaga">${vaga.dataExpiracao}</td>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao carregar vagas:", error);
  }
}

// atualiza a pagina a cada 1 segundo mostrando as novas vagas
document.addEventListener("DOMContentLoaded", () => {
  fetchDados();
  setInterval(fetchDados, 1000); 
}); ;
