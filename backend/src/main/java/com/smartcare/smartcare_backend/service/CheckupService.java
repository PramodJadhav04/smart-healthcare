package com.smartcare.smartcare_backend.service;

import com.smartcare.smartcare_backend.entity.Checkup;
import com.smartcare.smartcare_backend.entity.Patient;
import com.smartcare.smartcare_backend.repository.CheckupRepository;
import com.smartcare.smartcare_backend.repository.PatientRepository;
import org.springframework.stereotype.Service;

@Service
public class CheckupService {

    private final CheckupRepository checkupRepository;
    private final PatientRepository patientRepository;

    public CheckupService(CheckupRepository checkupRepository,
                          PatientRepository patientRepository) {
        this.checkupRepository = checkupRepository;
        this.patientRepository = patientRepository;
    }

    public Checkup saveCheckup(Checkup checkup, Long patientId) {

        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        checkup.setPatient(patient);   // VERY IMPORTANT
        return checkupRepository.save(checkup);
    }
}
