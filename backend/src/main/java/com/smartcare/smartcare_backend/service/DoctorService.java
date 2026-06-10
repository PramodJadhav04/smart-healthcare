package com.smartcare.smartcare_backend.service;


import com.smartcare.smartcare_backend.entity.Doctor;
import com.smartcare.smartcare_backend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    // ================= CREATE =================
    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    // ================= READ =================
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public Doctor getDoctorById(Long id) {
        return doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found with id: " + id));
    }

    public List<Doctor> getDoctorsBySpecialty(String specialty) {
        return doctorRepository.findBySpecialty(specialty);
    }

    public List<Doctor> getDoctorsByHospital(String hospital) {
        return doctorRepository.findByHospital(hospital);
    }

    // ================= UPDATE =================
    public Doctor updateDoctor(Long id, Doctor updatedDoctor) {
        Doctor existingDoctor = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found with id: " + id));

        existingDoctor.setName(updatedDoctor.getName());
        existingDoctor.setSpecialty(updatedDoctor.getSpecialty());
        existingDoctor.setExperience(updatedDoctor.getExperience());
        existingDoctor.setRating(updatedDoctor.getRating());
        existingDoctor.setHospital(updatedDoctor.getHospital());
        existingDoctor.setContact(updatedDoctor.getContact());
        existingDoctor.setFee(updatedDoctor.getFee());

        return doctorRepository.save(existingDoctor);
    }

    // ================= DELETE =================
    public void deleteDoctor(Long id) {
        if (!doctorRepository.existsById(id)) {
            throw new RuntimeException("Doctor not found with id: " + id);
        }
        doctorRepository.deleteById(id);
    }
}
