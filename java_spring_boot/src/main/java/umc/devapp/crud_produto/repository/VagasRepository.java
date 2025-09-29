package umc.devapp.crud_produto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import umc.devapp.crud_produto.entity.Vaga_pcd;

public interface VagasRepository extends JpaRepository<Vaga_pcd, Integer> {
}
