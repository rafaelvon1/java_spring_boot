package umc.devapp.crud_produto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import umc.devapp.crud_produto.entity.Vaga_pcd;

public interface VagasRepository extends JpaRepository<Vaga_pcd, Integer> {

    List<Vaga_pcd> findByEmpresa(String Empresa);

    @Query(value = "select * from vagas_pcd where salario < :salario", nativeQuery=true)
    List<Vaga_pcd> findBySalario(@Param("salario") double salario);

}
