package com.smartcare.smartcare_backend.controller;

import com.smartcare.smartcare_backend.dto.CheckupRequestDTO;
import com.smartcare.smartcare_backend.entity.Checkup;
import com.smartcare.smartcare_backend.entity.Patient;
import com.smartcare.smartcare_backend.repository.PatientRepository;
import com.smartcare.smartcare_backend.repository.CheckupRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checkups")
@CrossOrigin(origins = "*")
public class CheckupController {

    private final PatientRepository patientRepository;
    private final CheckupRepository checkupRepository;

    public CheckupController(PatientRepository patientRepository,
                             CheckupRepository checkupRepository) {
        this.patientRepository = patientRepository;
        this.checkupRepository = checkupRepository;
    }

    @PostMapping
    public ResponseEntity<?> addCheckup(@RequestBody CheckupRequestDTO dto) {
        try {
            // ✅ STEP 1: CREATE NEW PATIENT FROM CHECKUP DATA
            Patient patient = new Patient();
            patient.setFullName(dto.getFullName());
            patient.setAge(dto.getAge());
            patient.setGender(dto.getGender());
            patient.setBloodGroup(dto.getBloodGroup());
            patient.setPreviousDiseases(dto.getPreviousDiseases());

            // ✅ Save patient first
            Patient savedPatient = patientRepository.save(patient);
            System.out.println("✅ New patient created with ID: " + savedPatient.getId());

            // ✅ STEP 2: CREATE CHECKUP WITH THIS PATIENT
            Checkup checkup = new Checkup();
            checkup.setPatient(savedPatient); // ✅ Link to new patient

            // Set checkup details
            checkup.setFullName(dto.getFullName());
            checkup.setAge(dto.getAge());
            checkup.setWeight(dto.getWeight());
            checkup.setHeight(dto.getHeight());
            checkup.setGender(dto.getGender());
            checkup.setBloodGroup(dto.getBloodGroup());
            checkup.setPreviousDiseases(dto.getPreviousDiseases());
            checkup.setOtherDiseases(dto.getOtherDiseases());
            checkup.setSymptoms(dto.getSymptoms());
            checkup.setSymptomDuration(dto.getSymptomDuration());
            checkup.setPainLevel(dto.getPainLevel());
            checkup.setTemperature(dto.getTemperature());
            checkup.setMedications(dto.getMedications());
            checkup.setAllergies(dto.getAllergies());
            checkup.setNotes(dto.getNotes());

            Checkup savedCheckup = checkupRepository.save(checkup);

            // ✅ Return both patient and checkup info
            return ResponseEntity.ok(savedCheckup);

        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body("{\"error\": \"" + e.getMessage() + "\"}");
        }
    }
}