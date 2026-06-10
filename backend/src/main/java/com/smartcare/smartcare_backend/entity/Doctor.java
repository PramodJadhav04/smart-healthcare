package com.smartcare.smartcare_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "doctors")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String specialty;

    @Column(nullable = false)
    private String hospital;

    @Column(nullable = true)
    private String experience;  // e.g., "10 years"

    @Column(nullable = true)
    private Double rating;  // e.g., 4.5

    @Column(nullable = true)
    private String contact;

    @Column(nullable = true)
    private String fee; // e.g., "FREE" or "₹500"

    private boolean isFree;
}
