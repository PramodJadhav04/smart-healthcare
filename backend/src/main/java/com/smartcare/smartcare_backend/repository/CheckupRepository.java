package com.smartcare.smartcare_backend.repository;

import com.smartcare.smartcare_backend.entity.Checkup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CheckupRepository extends JpaRepository<Checkup, Long> {
    List<Checkup> findByPatientId(Long patientId);
}
