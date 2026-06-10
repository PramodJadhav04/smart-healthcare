// // check.js - SIMPLE VERSION
// document.addEventListener('DOMContentLoaded', function() {
//     const submitBtn = document.getElementById('submitBtn');
//     const errorMessage = document.getElementById('errorMessage');
//     const successMessage = document.getElementById('successMessage');

//     // Error handler
//     function showError(msg) {
//         if (!errorMessage) {
//             alert(msg);
//             return;
//         }
//         errorMessage.style.display = 'block';
//         errorMessage.textContent = msg;
//         setTimeout(() => errorMessage.style.display = 'none', 5000);
//     }

//     // Pain slider
//     const painSlider = document.getElementById('painLevel');
//     const painLabel = document.getElementById('painLabel');
//     if (painSlider && painLabel) {
//         painSlider.addEventListener('input', function() {
//             painLabel.textContent = `1 (Mild) - Current: ${this.value}`;
//         });
//     }

//     // Disease checkboxes
//     const diseaseCheckboxes = document.querySelectorAll('#diseaseCheckboxes input[type="checkbox"]');
//     diseaseCheckboxes.forEach(cb => cb.addEventListener('change', function() {
//         if (this.value === 'None' && this.checked) {
//             diseaseCheckboxes.forEach(c => { if(c.value !== 'None') c.checked = false; });
//         } else if(this.checked && this.value !== 'None') {
//             const noneCb = document.querySelector('input[value="None"]');
//             if(noneCb) noneCb.checked = false;
//         }
//     }));

//     // ✅ FORM SUBMIT - SIMPLE VERSION
//     submitBtn.addEventListener('click', function(e) {
//         e.preventDefault();

//         // ✅ Collect form data (NO PATIENT ID NEEDED)
//         const checkupData = {
//             // ✅ Patient information (will create new patient)
//             fullName: document.getElementById('fullName').value.trim(),
//             age: document.getElementById('age').value.trim(),
//             weight: parseFloat(document.getElementById('weight').value) || 0,
//             height: parseFloat(document.getElementById('height').value) || 0,
//             gender: document.getElementById('gender').value,
//             bloodGroup: document.getElementById('bloodGroup').value,
//             previousDiseases: Array.from(document.querySelectorAll('#diseaseCheckboxes input[type="checkbox"]:checked'))
//                                 .map(cb => cb.value !== 'None' ? cb.value : null)
//                                 .filter(Boolean)
//                                 .join(","),
//             otherDiseases: document.getElementById('otherDiseases').value.trim(),
//             symptoms: document.getElementById('symptoms').value.trim(),
//             symptomDuration: document.getElementById('symptomDuration').value.trim(),
//             painLevel: parseInt(document.getElementById('painLevel').value) || 0,
//             temperature: parseFloat(document.getElementById('temperature').value) || 0,
//             medications: document.getElementById('medications').value.trim(),
//             allergies: document.getElementById('allergies').value.trim(),
//             notes: document.getElementById('notes').value.trim()
//         };

//         console.log("Sending checkup data:", checkupData);

//         // ✅ API Call
//         fetch('http://localhost:8080/api/checkups', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(checkupData)
//         })
//         .then(async res => {
//             const text = await res.text();
//             console.log("Response:", text);
            
//             if (!res.ok) {
//                 throw new Error(`Server error: ${text}`);
//             }
            
//             return JSON.parse(text);
//         })
//         .then(data => {
//             console.log("Success! Checkup created:", data);
            
//             // ✅ Show success message
//             successMessage.style.display = 'block';
//             successMessage.textContent = '✅ Checkup submitted! Redirecting to doctors...';
            
//             // ✅ Store checkup ID for doctor selection
//             if (data && data.id) {
//                 localStorage.setItem("checkupId", data.id);
//                 // ✅ Also store patient ID if returned
//                 if (data.patient && data.patient.id) {
//                     localStorage.setItem("patientId", data.patient.id);
//                 }
//             }
            
//             // ✅ Redirect to doctors page
//             setTimeout(() => {
//                 window.location.href = 'doctors.html';
//             }, 1500);
//         })
//         .catch(err => {
//             console.error("Error:", err);
//             showError('❌ ' + err.message);
//         });
//     });
// });

// check.js - WORKING VERSION

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Error handler
    function showError(msg) {
        if (!errorMessage) {
            alert(msg);
            return;
        }
        errorMessage.style.display = 'block';
        errorMessage.textContent = msg;
        setTimeout(() => errorMessage.style.display = 'none', 5000);
    }

    // Pain slider
    const painSlider = document.getElementById('painLevel');
    const painLabel = document.getElementById('painLabel');
    if (painSlider && painLabel) {
        painSlider.addEventListener('input', function() {
            painLabel.textContent = `1 (Mild) - Current: ${this.value}`;
        });
    }

    // Disease checkboxes
    const diseaseCheckboxes = document.querySelectorAll('#diseaseCheckboxes input[type="checkbox"]');
    diseaseCheckboxes.forEach(cb => cb.addEventListener('change', function() {
        if (this.value === 'None' && this.checked) {
            diseaseCheckboxes.forEach(c => { if(c.value !== 'None') c.checked = false; });
        } else if(this.checked && this.value !== 'None') {
            const noneCb = document.querySelector('input[value="None"]');
            if(noneCb) noneCb.checked = false;
        }
    }));

    // FORM SUBMIT
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Collect form data
        const checkupData = {
            fullName: document.getElementById('fullName').value.trim(),
            age: document.getElementById('age').value.trim(),
            weight: parseFloat(document.getElementById('weight').value) || 0,
            height: parseFloat(document.getElementById('height').value) || 0,
            gender: document.getElementById('gender').value,
            bloodGroup: document.getElementById('bloodGroup').value,
            previousDiseases: Array.from(document.querySelectorAll('#diseaseCheckboxes input[type="checkbox"]:checked'))
                                .map(cb => cb.value !== 'None' ? cb.value : null)
                                .filter(Boolean)
                                .join(","),
            otherDiseases: document.getElementById('otherDiseases').value.trim(),
            symptoms: document.getElementById('symptoms').value.trim(),
            symptomDuration: document.getElementById('symptomDuration').value,
            painLevel: parseInt(document.getElementById('painLevel').value) || 0,
            temperature: parseFloat(document.getElementById('temperature').value) || 0,
            medications: document.getElementById('medications').value.trim(),
            allergies: document.getElementById('allergies').value.trim(),
            notes: document.getElementById('notes').value.trim()
        };

        // Validate required fields
        if (!checkupData.fullName) {
            showError("Please enter Full Name");
            document.getElementById('fullName').focus();
            return;
        }
        if (!checkupData.age) {
            showError("Please enter Age");
            document.getElementById('age').focus();
            return;
        }
        if (!checkupData.gender) {
            showError("Please select Gender");
            document.getElementById('gender').focus();
            return;
        }
        if (!checkupData.symptoms) {
            showError("Please describe Symptoms");
            document.getElementById('symptoms').focus();
            return;
        }
        if (!checkupData.symptomDuration) {
            showError("Please select Symptom Duration");
            document.getElementById('symptomDuration').focus();
            return;
        }

        console.log("Sending checkup data:", checkupData);

        // ✅ API Call to create checkup (and patient)
        fetch('http://localhost:8080/api/checkups', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(checkupData)
        })
        .then(async res => {
            const text = await res.text();
            console.log("Response:", text);
            
            if (!res.ok) {
                throw new Error(`Server error: ${text}`);
            }
            
            return JSON.parse(text);
        })
        .then(data => {
            console.log("Success! Checkup created:", data);
            
            // ✅ Store in localStorage for doctors page
            localStorage.setItem('smartcare_checkup', JSON.stringify(checkupData));
            localStorage.setItem('checkupId', data.id);
            
            if (data.patient && data.patient.id) {
                localStorage.setItem('patientId', data.patient.id);
            }
            
            // ✅ Show success and redirect
            successMessage.style.display = 'block';
            successMessage.textContent = '✅ Checkup submitted! Redirecting to doctors...';
            
            setTimeout(() => {
                window.location.href = 'doctors.html';
            }, 1500);
        })
        .catch(err => {
            console.error("Error:", err);
            showError('❌ ' + err.message);
        });
    });
});