package umc.devapp.crud_produto.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter ;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "descrição")
    private String descricao;
    @Column(name = "preco")
    private double preco;
    @Column (name = "fornecedor")
    private String fornecedor;
    @Column(name = "quantidade estoque")
    private double quantidadeEstoque;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public String getFornecedor() {
        return fornecedor;
    }

    public void setFornecedor(String fornecedor) {
        this.fornecedor = fornecedor;
    }

    public double getQuantidadeEstoque() {
        return quantidadeEstoque;
    }

    public void setQuantidadeEstoque(double quantidadeEstoque) {
        this.quantidadeEstoque = quantidadeEstoque;
    }
}
