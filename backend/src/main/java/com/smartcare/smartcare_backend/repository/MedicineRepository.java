package com.smartcare.smartcare_backend.repository;

import com.smartcare.smartcare_backend.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    // Optional: price ya quantity filter ke liye methods
    // List<Medicine> findByPriceLessThan(Double price);
}