async function fetchDados() {
    try {
        const response = await fetch("http://localhost:8080/produtos"); 
        if (!response.ok) {
            throw new Error("Conexão falhou");
        }

        const data = await response.json(); // aqui você pega o array de produtos

        // Print direto da lista
        console.log("Lista completa de produtos:", data);

        // Ou printando cada produto separadamente
        data.forEach((produto, index) => {
            console.log(`Produto ${index + 1}:`);
            console.log("ID:", produto.id);
            console.log("Nome:", produto.nome);
            console.log("Preço:", produto.preco);
            console.log("-------------------");
        });

    } catch (error) {
        console.error("Erro:", error);
    }
}

// Chama a função
fetchDados();
