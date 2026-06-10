// SmartCare API Configuration
const API_BASE_URL = 'http://localhost:8080/api';

// Common API call function
async function apiCall(endpoint, method = 'GET', data = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    if (data) {
        options.body = JSON.stringify(data);
    }
    
    try {
        console.log(`API Call: ${method} ${API_BASE_URL}${endpoint}`);
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// ========== PATIENT APIs ==========
async function registerPatient(patientData) {
    return apiCall('/patients/register', 'POST', patientData);
}

async function loginPatient(email, password) {
    return apiCall('/patients/login', 'POST', { email, password });
}

async function getPatientById(patientId) {
    return apiCall(`/patients/${patientId}`);
}

async function updatePatient(patientId, patientData) {
    return apiCall(`/patients/${patientId}`, 'PUT', patientData);
}

// ========== DOCTOR APIs ==========
async function getAllDoctors() {
    return apiCall('/doctors/');
}

async function getAvailableDoctors() {
    return apiCall('/doctors/available');
}

async function getDoctorsBySpecialty(specialty) {
    return apiCall(`/doctors/specialty/${specialty}`);
}

async function addDoctor(doctorData) {
    return apiCall('/doctors/add', 'POST', doctorData);
}

// ========== MEDICINE APIs ==========
async function getAllMedicines() {
    return apiCall('/medicines/');
}

async function searchMedicines(query) {
    return apiCall(`/medicines/search?query=${encodeURIComponent(query)}`);
}

async function suggestMedicines(symptoms) {
    return apiCall(`/medicines/suggest?symptoms=${encodeURIComponent(symptoms)}`);
}

async function getFreeMedicines() {
    return apiCall('/medicines/free');
}

// ========== UTILITY FUNCTIONS ==========
async function checkBackendHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        return response.ok;
    } catch (error) {
        return false;
    }
}

function getCurrentPatient() {
    const patientData = localStorage.getItem('patientData');
    return patientData ? JSON.parse(patientData) : null;
}

function isPatientLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function logoutPatient() {
    localStorage.removeItem('patientData');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('patientId');
    localStorage.removeItem('patientName');
    window.location.href = 'index.html';
}

// ========== TEST DATA ==========
async function testBackendConnection() {
    try {
        const health = await checkBackendHealth();
        if (health) {
            console.log('✅ Backend is running');
            
            // Test some APIs
            const doctors = await getAllDoctors();
            console.log('Doctors count:', doctors.length);
            
            const medicines = await getAllMedicines();
            console.log('Medicines count:', medicines.length);
            
            return true;
        } else {
            console.error('❌ Backend is not running');
            return false;
        }
    } catch (error) {
        console.error('Backend test failed:', error);
        return false;
    }
}

// Export functions for use in HTML
window.SmartCareAPI = {
    // Patient
    registerPatient,
    loginPatient,
    getPatientById,
    updatePatient,
    
    // Doctor
    getAllDoctors,
    getAvailableDoctors,
    getDoctorsBySpecialty,
    addDoctor,
    
    // Medicine
    getAllMedicines,
    searchMedicines,
    suggestMedicines,
    getFreeMedicines,
    
    // Utility
    checkBackendHealth,
    getCurrentPatient,
    isPatientLoggedIn,
    logoutPatient,
    testBackendConnection,
    
    // Constants
    API_BASE_URL
};