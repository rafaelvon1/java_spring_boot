package umc.devapp.crud_produto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import umc.devapp.crud_produto.entity.Produto;
import umc.devapp.crud_produto.service.ProdutoService;

import java.util.List;
import java.util.Optional;


@RestController
public class ProdutoController {
    @Autowired
    ProdutoService produtoService;

    //Retorna Lista de produtos

    @GetMapping("/produtos")

    public List<Produto> getAllProducts() {
        List<Produto> produtos = produtoService.getAllProductsService();
        return produtos;
    }

    @PostMapping("/produtos/add")

    public ResponseEntity<Produto> addProduct(@RequestBody Produto produto) {
        Produto newProduct = produtoService.insertProdutoService(produto);
        return new ResponseEntity<Produto>(newProduct, HttpStatus.OK);
    }

    @GetMapping("/produto/{id}")
    public ResponseEntity<Optional<Produto>> getProductService(@PathVariable Integer id) {
        Optional<Produto> produto = produtoService.getProductService(id);
        return ResponseEntity.ok(produto);
    }

    @DeleteMapping("/produto/delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id){
        produtoService.deleteProductByIdService(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/produto/update")
    public ResponseEntity<Produto> updateProduct(@RequestBody Produto produto){
        Produto updatedProduct = produtoService.updateProductService(produto);
        return ResponseEntity.ok(updatedProduct);
    }
}
