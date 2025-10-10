
const API_URL ="http://localhost:8080"; 
async function Enviar_Cadastro(params) {
    params.preventDefault();
    let response;
    const cadastro = {
        email : document.getElementById("email").value,
        area : document.getElementById("area").value,
        salario : document.getElementById("salario").value,
    }
    try {
        response = await fetch(`${API_URL}/vagas/cadastro_vagas`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cadastro)
        });
        if (!response.ok) {
            throw new Error("Erro ao enviar cadastro");
        }
            
    } catch (error) {
        console.error("Erro ao salvar:", error);
    }
}

document.getElementById("interestForm").addEventListener("submit", Enviar_Cadastro);
