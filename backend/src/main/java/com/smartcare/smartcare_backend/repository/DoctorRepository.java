package com.smartcare.smartcare_backend.repository;

import com.smartcare.smartcare_backend.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    // Ye method Spring Data JPA automatically implement karega
    List<Doctor> findBySpecialty(String specialty);

    // Optional: availability or hospital filter ke liye methods
    List<Doctor> findByHospital(String hospital);
    List<Doctor> findByIsFree(boolean isFree);


}
