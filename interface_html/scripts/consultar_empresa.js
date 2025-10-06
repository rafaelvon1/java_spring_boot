const API_URL = "http://localhost:8080";

// Elementos DOM
const listaVagasDiv = document.getElementById('lista-vagas');
const inputEmpresa = document.getElementById('empresa');

/**
 * Formata um valor numérico para moeda BRL
 */
function formatarMoeda(valor) {
    if (typeof valor !== 'number' || isNaN(valor)) return 'N/A';
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    }).format(valor);
}

/**
 * Renderiza os cards de vagas
 */
function renderizarCards(listaVagas) {
    listaVagasDiv.innerHTML = '';

    if (listaVagas.length === 0) {
        listaVagasDiv.innerHTML = `
            <div class="bg-yellow-100 p-6 rounded-xl text-center text-lg font-semibold text-yellow-800 shadow-md">
                Nenhuma vaga encontrada.
            </div>
        `;
        return;
    }

    listaVagas.forEach(vaga => {
        const card = document.createElement("div");
        card.classList.add(
            "bg-white", "p-8", "rounded-2xl", "shadow-xl", "hover:shadow-2xl",
            "transition", "duration-300", "w-full", "max-w-4xl", "mx-auto", "border-t-4", "border-indigo-700", "mb-6"
        );

        const expirationDate = new Date(vaga.dataExpiracao);
        const isExpired = expirationDate < new Date();
        const isExpiringSoon = expirationDate < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        const expirationColor = isExpired 
            ? 'text-red-700 font-bold' 
            : isExpiringSoon 
                ? 'text-yellow-600 font-semibold' 
                : 'text-gray-500';

        const salarioFormatado = formatarMoeda(vaga.salario);

        card.innerHTML = `
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-4">
                <h1 class="text-3xl font-bold text-indigo-700">${vaga.empresa}</h1>
                <span class="text-lg font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mt-2 sm:mt-0">
                    ${vaga.tipoDeficiencia || 'N/A'}
                </span>
            </div>

            <h2 class="text-2xl font-semibold text-gray-800 mb-4">${vaga.tituloVaga}</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div class="flex items-center space-x-2">
                    <span class="text-green-600">💰</span>
                    <p><span class="font-semibold">Salário:</span> <span class="text-secondary font-extrabold">${salarioFormatado}</span></p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-primary">📍</span>
                    <p><span class="font-semibold">Local:</span> ${vaga.endereco || 'Não informado'}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-500">📜</span>
                    <p><span class="font-semibold">Contrato:</span> ${vaga.tipoContrato || 'N/A'}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-500">🗓️</span>
                    <p><span class="font-semibold">Publicação:</span> ${vaga.dataPublicacao}</p>
                </div>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-100">
                <p class="mb-3 text-gray-800"><span class="font-bold">Descrição:</span> ${vaga.texto || 'Descrição não disponível.'}</p>
                <p class="mb-3 text-gray-800"><span class="font-bold">Requisitos:</span> ${vaga.requisitos || 'Não listados.'}</p>
                <p class="mb-3 text-gray-800"><span class="font-bold">Benefícios:</span> ${vaga.beneficios || 'Não listados.'}</p>
            </div>

            <div class="mt-4 pt-3 border-t">
                <p class="text-sm ${expirationColor}">
                    <span class="font-bold">Expiração:</span> ${vaga.dataExpiracao} ${isExpired ? '(ENCERRADA)' : ''}
                </p>
            </div>
        `;
        listaVagasDiv.appendChild(card);
    });
}

/**
 * Busca vagas da API
 */
async function buscarVagas(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erro ao buscar vagas');
        const data = await response.json();
        renderizarCards(data);
    } catch (error) {
        console.error("Erro ao carregar vagas:", error);
        listaVagasDiv.innerHTML = `
            <div class="bg-red-100 p-4 rounded-lg text-red-700 font-bold text-center">
                ❌ Não foi possível carregar vagas. Verifique o servidor.
            </div>
        `;
    }
}

/**
 * Busca por empresa
 */
function buscarPorEmpresa(e) {
    
    e.preventDefault();
    const empresa = inputEmpresa.value.trim();
    const url = empresa 
        ? `${API_URL}/vagas/consulta_empresa?empresa=${encodeURIComponent(empresa)}`
        : `${API_URL}/vagas`;
        /**operador tenario :) */
    buscarVagas(url);
}

// Event listeners
document.getElementById("form-busca").addEventListener("submit", buscarPorEmpresa);

// Carrega todas as vagas ao iniciar
buscarVagas(`${API_URL}/vagas`);
