async function fetchDados() {
    try {
        const response = await fetch("http://localhost:8080/produtos");

        if (!response.ok) {
            throw new Error("Falha ao conectar com o backend");
        }

        const data = await response.json();
        console.log("Produtos recebidos:", data);

        const tbody = document.getElementById("tabela-produtos");
        tbody.innerHTML = ""; // limpa antes de inserir

        data.forEach(produto => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.descricao}</td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
            `;
            tbody.appendChild(tr);
        });

    } catch (error) {
        console.error("Erro:", error);
    }
}

fetchDados();
