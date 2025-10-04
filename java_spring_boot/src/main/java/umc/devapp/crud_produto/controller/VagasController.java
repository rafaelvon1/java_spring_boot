package umc.devapp.crud_produto.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import umc.devapp.crud_produto.entity.Vaga_pcd;
import umc.devapp.crud_produto.service.VagasService;


@RestController
public class VagasController {
    @Autowired
    VagasService vagasService;

    //Retorna Lista de produtos

    @GetMapping("/vagas")

    public List<Vaga_pcd> getAllvagas() {
        List<Vaga_pcd> vaga = vagasService.getAllvagas();
        return vaga;
    }

    @PostMapping("/vagas/add")

    public ResponseEntity<Vaga_pcd> addvagas(@RequestBody Vaga_pcd vaga_pcd) {
        Vaga_pcd newVaga = vagasService.insertVagaService(vaga_pcd);
        return new ResponseEntity<Vaga_pcd>(newVaga, HttpStatus.OK);
    }

    @GetMapping("/vagas/{id}")
    public ResponseEntity<Optional<Vaga_pcd>> getVagaId(@PathVariable Integer id) {
        Optional<Vaga_pcd> vaga_pcd = vagasService.getVagaService(id);
        return ResponseEntity.ok(vaga_pcd);
    }

    @DeleteMapping("/vagas/delete/{id}")
    public ResponseEntity<Void> deletevagas(@PathVariable Integer id){
        vagasService.deleteVagasByIdService(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/vagas/update")
    public ResponseEntity<Vaga_pcd> updatevaga(@RequestBody Vaga_pcd vaga_pcd){
        Vaga_pcd updatedVaga = vagasService.updateVagaService(vaga_pcd);
        return ResponseEntity.ok(updatedVaga);
    }

    @GetMapping("/vagas/consulta_empresa")
    public ResponseEntity<List<Vaga_pcd>> findByEmpresa(@RequestParam("empresa") String empresa) {
        List<Vaga_pcd> viewVagas = vagasService.getAllEmpresaService(empresa);
        return ResponseEntity.ok(viewVagas);
    }
}
