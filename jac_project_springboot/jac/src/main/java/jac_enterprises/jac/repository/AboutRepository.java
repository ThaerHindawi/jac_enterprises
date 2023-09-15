package jac_enterprises.jac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import jac_enterprises.jac.model.About;

public interface AboutRepository extends JpaRepository<About, Long> {
    
}
