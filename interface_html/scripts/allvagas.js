function Exibirvagas(vagas){
    document.getElementById('#empresa').value = vagas.empresa;
    document.getElementById('#vaga').value = vagas.vaga;
    document.getElementById('#salario').value = vagas.salario;
    document.getElementById('#tipocontrato').value = vagas.tipocontrato;
    document.getElementById('#tipodeficiencia').value = vagas.tipodeficiencia;
    document.getElementById('#endereco').value = vagas.endereco;
    document.getElementById('#beneficios').value = vagas.beneficios;
    document.getElementById('#descricao').value = vagas.descricao;
    document.getElementById('#requisitos').value = vagas.requisitos;
    document.getElementById('#datap').value = vagas.datap;
    document.getElementById('#datal').value = vagas.datal;
}