

// doctors.js - COMPLETE WORKING VERSION

let selectedDoctor = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('Doctors page loaded');
    
    // ✅ Load checkup summary from localStorage
    loadCheckupSummary();
    
    // ✅ Show recommended specialties
    showRecommendedSpecialties();
    
    // ✅ Setup event listeners
    setupEventListeners();
    
    // ✅ Initially hide selected doctor box
    document.getElementById('selectedDoctorBox').style.display = 'none';
    
    // ✅ Setup search and filter
    setupFilters();
});

// ✅ LOAD CHECKUP SUMMARY
function loadCheckupSummary() {
    const checkupData = JSON.parse(localStorage.getItem('smartcare_checkup'));
    const summaryContent = document.getElementById('summaryContent');
    
    if (!checkupData || !summaryContent) return;
    
    summaryContent.innerHTML = `
        <div class="summary-grid">
            <div class="summary-item">
                <span class="label">Patient:</span>
                <span class="value">${checkupData.fullName || 'Not specified'}</span>
            </div>
            <div class="summary-item">
                <span class="label">Age/Gender:</span>
                <span class="value">${checkupData.age || 'N/A'} / ${checkupData.gender || 'Not specified'}</span>
            </div>
            <div class="summary-item">
                <span class="label">Symptoms:</span>
                <span class="value">${checkupData.symptoms || 'No symptoms recorded'}</span>
            </div>
            <div class="summary-item">
                <span class="label">Submitted:</span>
                <span class="value">${new Date().toLocaleDateString()}</span>
            </div>
        </div>
    `;
}

// ✅ SHOW RECOMMENDED SPECIALTIES BASED ON SYMPTOMS
function showRecommendedSpecialties() {
    const checkupData = JSON.parse(localStorage.getItem('smartcare_checkup'));
    const recommendedContainer = document.getElementById('recommendedSpecialties');
    
    if (!checkupData || !checkupData.symptoms || !recommendedContainer) return;
    
    const symptoms = checkupData.symptoms.toLowerCase();
    let recommendations = [];
    
    // Determine specialties based on symptoms
    if (symptoms.includes('fever') || symptoms.includes('cough') || symptoms.includes('cold')) {
        recommendations.push('General Physician');
    }
    if (symptoms.includes('chest') || symptoms.includes('heart') || symptoms.includes('breath')) {
        recommendations.push('Cardiologist');
    }
    if (symptoms.includes('headache') || symptoms.includes('dizziness')) {
        recommendations.push('Neurologist');
    }
    if (symptoms.includes('skin') || symptoms.includes('rash') || symptoms.includes('allergy')) {
        recommendations.push('Dermatologist');
    }
    if (symptoms.includes('child') || symptoms.includes('baby') || parseInt(checkupData.age) < 18) {
        recommendations.push('Pediatrician');
    }
    
    // If no specific recommendations, suggest General Physician
    if (recommendations.length === 0) {
        recommendations.push('General Physician');
    }
    
    // Display recommendations
    recommendedContainer.innerHTML = recommendations.map(spec => 
        `<span class="specialty-tag">${spec}</span>`
    ).join('');
}

// ✅ SETUP FILTERS AND SEARCH
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const specialtyFilter = document.getElementById('specialtyFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');
    const hospitalFilter = document.getElementById('hospitalFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterDoctors);
    }
    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', filterDoctors);
    }
    if (availabilityFilter) {
        availabilityFilter.addEventListener('change', filterDoctors);
    }
    if (hospitalFilter) {
        hospitalFilter.addEventListener('change', filterDoctors);
    }
    
    // Search button
    document.getElementById('searchBtn')?.addEventListener('click', filterDoctors);
}

// ✅ FILTER DOCTORS FUNCTION
function filterDoctors() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const specialty = document.getElementById('specialtyFilter').value;
    const availability = document.getElementById('availabilityFilter').value;
    const hospital = document.getElementById('hospitalFilter').value;
    
    const doctorCards = document.querySelectorAll('.doctor-card');
    
    doctorCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const cardSpecialty = card.dataset.specialty;
        const cardAvailability = card.dataset.availability;
        const cardHospital = card.dataset.hospital;
        
        let matches = true;
        
        // Search by name
        if (searchTerm && !name.includes(searchTerm)) {
            matches = false;
        }
        
        // Filter by specialty
        if (specialty && cardSpecialty !== specialty) {
            matches = false;
        }
        
        // Filter by availability
        if (availability) {
            if (availability === 'today' && !card.classList.contains('available')) {
                matches = false;
            }
            // Add more availability logic as needed
        }
        
        // Filter by hospital
        if (hospital && cardHospital !== hospital) {
            matches = false;
        }
        
        // Show/hide card based on matches
        card.style.display = matches ? 'block' : 'none';
    });
}

// ✅ SELECT DOCTOR FUNCTION (MUST BE GLOBAL)
window.selectDoctor = function(name, specialty, hospital, experience, rating) {
    // Store selected doctor in global variable
    selectedDoctor = {
        name: name,
        specialty: specialty,
        hospital: hospital,
        experience: experience,
        rating: rating
    };
    
    // Show selected doctor info
    const selectedDoctorInfo = document.getElementById('selectedDoctorInfo');
    if (selectedDoctorInfo) {
        selectedDoctorInfo.innerHTML = `
            <div class="selected-info">
                <h4>${name}</h4>
                <p><strong>Specialty:</strong> ${specialty}</p>
                <p><strong>Hospital:</strong> ${hospital}</p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>Rating:</strong> ${rating}</p>
            </div>
        `;
    }
    
    // Show selected doctor box
    document.getElementById('selectedDoctorBox').style.display = 'block';
    
    // Save to localStorage for prescription page
    localStorage.setItem('selectedDoctor', JSON.stringify(selectedDoctor));
    
    // Scroll to selected doctor box
    document.getElementById('selectedDoctorBox').scrollIntoView({ behavior: 'smooth' });
};

// ✅ VIEW DOCTOR PROFILE
window.viewDoctorProfile = function(name) {
    alert(`Viewing profile of ${name}\n\nThis feature would show detailed doctor information, qualifications, and reviews.`);
};

// ✅ PROCEED TO PRESCRIPTION
document.getElementById('proceedToPrescription')?.addEventListener('click', function() {
    if (!selectedDoctor) {
        alert('Please select a doctor first!');
        return;
    }
    
    // Save final selection
    localStorage.setItem('selectedDoctor', JSON.stringify(selectedDoctor));
    
    // Redirect to prescription page
    window.location.href = 'prescription.html';
});

// ✅ SETUP EVENT LISTENERS
function setupEventListeners() {
    // Proceed to prescription button
    document.getElementById('proceedToPrescription')?.addEventListener('click', function() {
        if (!selectedDoctor) {
            alert('Please select a doctor first!');
            return;
        }
        window.location.href = 'prescription.html';
    });
    
    // Emergency help
    window.emergencyHelp = function() {
        alert('Emergency Help:\n\nCall: 108 (Ambulance)\n\nPolice: 100\n\nFire: 101\n\nWomen Helpline: 1091');
    };
    
    // Show free medicines
    window.showFreeMedicines = function() {
        alert('FREE MEDICINES LIST:\n\n1. Paracetamol 500mg\n2. Ibuprofen 400mg\n3. Amoxicillin 500mg\n4. Cetirizine 10mg\n5. Metformin 500mg\n6. Losartan 50mg\n7. Insulin\n8. Multivitamins\n\nAll available at government pharmacies.');
    };
}