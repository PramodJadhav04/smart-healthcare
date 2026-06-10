package com.smartcare.smartcare_backend.dto;

import lombok.Data;

@Data
public class CheckupRequestDTO {
    private Long patientId;        // mandatory
    private String fullName;
    private String age;
    private Double weight;
    private Double height;
    private String gender;
    private String bloodGroup;
    private String previousDiseases; // string, comma separated
    private String otherDiseases;
    private String symptoms;
    private String symptomDuration;
    private Integer painLevel;
    private Double temperature;
    private String medications;
    private String allergies;
    private String notes;
}