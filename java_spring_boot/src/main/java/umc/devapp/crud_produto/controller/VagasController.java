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
import org.springframework.web.bind.annotation.RestController;

import umc.devapp.crud_produto.entity.Vaga_pcd;
import umc.devapp.crud_produto.service.VagasService;


@RestController
public class VagasController {
    @Autowired
    VagasService vagasService;

    //Retorna Lista de produtos

    @GetMapping("/vagas")

    public List<Vaga_pcd> getAllProducts() {
        List<Vaga_pcd> vaga = vagasService.getAllProductsService();
        return vaga;
    }

    @PostMapping("/vagas/add")

    public ResponseEntity<Vaga_pcd> addProduct(@RequestBody Vaga_pcd vaga_pcd) {
        Vaga_pcd newProduct = vagasService.insertProdutoService(vaga_pcd);
        return new ResponseEntity<Vaga_pcd>(newProduct, HttpStatus.OK);
    }

    @GetMapping("/vagas/{id}")
    public ResponseEntity<Optional<Vaga_pcd>> getProductService(@PathVariable Integer id) {
        Optional<Vaga_pcd> vaga_pcd = vagasService.getProductService(id);
        return ResponseEntity.ok(vaga_pcd);
    }

    @DeleteMapping("/vagas/delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id){
        vagasService.deleteProductByIdService(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/vagas/update")
    public ResponseEntity<Vaga_pcd> updateProduct(@RequestBody Vaga_pcd vaga_pcd){
        Vaga_pcd updatedProduct = vagasService.updateProductService(vaga_pcd);
        return ResponseEntity.ok(updatedProduct);
    }
}
