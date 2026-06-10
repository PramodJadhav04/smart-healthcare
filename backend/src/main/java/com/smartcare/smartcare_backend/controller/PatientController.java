package com.smartcare.smartcare_backend.controller;

import com.smartcare.smartcare_backend.entity.Patient;
import com.smartcare.smartcare_backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class PatientController {

    @Autowired
    private PatientService patientService;

    // ================= CREATE =================
    @PostMapping
    public Patient savePatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }

    // ================= READ =================
    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable Long id) {
        return patientService.getPatientById(id);
    }

    @GetMapping("/email/{email}")
    public Patient getPatientByEmail(@PathVariable String email) {
        return patientService.getPatientByEmail(email);
    }

    // ================= UPDATE =================
    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable Long id, @RequestBody Patient patient) {
        return patientService.updatePatient(id, patient);
    }

    // ================= DELETE =================
    @DeleteMapping("/{id}")
    public String deletePatient(@PathVariable Long id) {
        patientService.deletePatient(id);
        return "Patient deleted successfully";
    }

    // --- Registration with duplicate email check ---
    @PostMapping("/register")
    public Patient registerPatient(@RequestBody Patient patient) {
        // Check if email already exists
        if (patientService.getPatientByEmail(patient.getEmail()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already registered");
        }
        return patientService.savePatient(patient);
    }

    // --- Login ---
    @PostMapping("/login")
    public Patient loginPatient(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Patient patient = patientService.getPatientByEmail(email);
        if (patient != null && patient.getPassword().equals(password)) {
            return patient;
        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
    }
}
