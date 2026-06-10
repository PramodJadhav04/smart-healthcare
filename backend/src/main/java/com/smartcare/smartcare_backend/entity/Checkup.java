package com.smartcare.smartcare_backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "checkups")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Checkup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Logged-in patient
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    private String fullName;      // person being checked
    private String age;
    private Double weight;
    private Double height;
    private String gender;
    private String bloodGroup;

    private String previousDiseases;
    private String otherDiseases;
    private String symptoms;
    private String symptomDuration;

    private Integer painLevel;
    private Double temperature;

    private String medications;
    private String allergies;
    private String notes;

    private LocalDateTime submittedAt = LocalDateTime.now();
}
