package umc.devapp.crud_produto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import umc.devapp.crud_produto.entity.Vaga_pcd;
import umc.devapp.crud_produto.repository.VagasRepository;

@Service
public class VagasService {

    @Autowired
    VagasRepository vagasRepository;

    public List<Vaga_pcd> getAllvagas() {
        List<Vaga_pcd> vagas = vagasRepository.findAll();
        return vagas;
    }

    public Vaga_pcd insertVagaService(Vaga_pcd vaga_pcd) {
        return vagasRepository.save(vaga_pcd);
    }

    public Optional<Vaga_pcd> getVagaService(Integer id){
        return vagasRepository.findById(id);
    }
    public void deleteVagasByIdService(Integer id){
        vagasRepository.deleteById(id);
    }
    public Vaga_pcd updateVagaService(Vaga_pcd vaga_pcd){
        Vaga_pcd updatedProduct = vagasRepository.findById(vaga_pcd.getId()).get();
        updatedProduct = vaga_pcd;
        return vagasRepository.save(updatedProduct);
    }
    public List<Vaga_pcd> getAllEmpresaService(String empresa){
        List<Vaga_pcd> vagas = vagasRepository.findByEmpresa(empresa);
        return vagas;
    }
}
