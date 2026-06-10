package com.smartcare.smartcare_backend.service;

import com.smartcare.smartcare_backend.entity.Patient;
import com.smartcare.smartcare_backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // ================= CREATE =================
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // ================= READ =================
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Patient getPatientById(Long id) {
        return patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id: " + id));
    }

    public Patient getPatientByEmail(String email) {
        return patientRepository.findByEmail(email);
    }

    // ================= UPDATE =================
    public Patient updatePatient(Long id, Patient updatedPatient) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id: " + id));

        existingPatient.setFullName(updatedPatient.getFullName());
        existingPatient.setEmail(updatedPatient.getEmail());
        existingPatient.setPhone(updatedPatient.getPhone());
        existingPatient.setPassword(updatedPatient.getPassword());
        existingPatient.setAge(updatedPatient.getAge());
        existingPatient.setGender(updatedPatient.getGender());
        existingPatient.setBloodGroup(updatedPatient.getBloodGroup());
        existingPatient.setPreviousDiseases(updatedPatient.getPreviousDiseases());
        existingPatient.setEmergencyName(updatedPatient.getEmergencyName());
        existingPatient.setEmergencyPhone(updatedPatient.getEmergencyPhone());

        return patientRepository.save(existingPatient);
    }

    // ================= DELETE =================
    public void deletePatient(Long id) {
        if (!patientRepository.existsById(id)) {
            throw new RuntimeException("Patient not found with id: " + id);
        }
        patientRepository.deleteById(id);
    }
}
