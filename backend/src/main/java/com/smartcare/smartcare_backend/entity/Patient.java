package com.smartcare.smartcare_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
    private String phone;
    private String password;

    private String age;
    private String gender;
    private String bloodGroup;
    private String previousDiseases;

    private String emergencyName;
    private String emergencyPhone;
}
