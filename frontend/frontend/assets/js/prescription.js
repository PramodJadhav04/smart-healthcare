
// // prescription.js - ADVANCED MEDICINE RECOMMENDATION

// const advancedMedicineDB = {
//     "Fever": {
//         "0-10": [
//             { name: "Paracetamol Suspension", type: "Syrup", dosage: "5ml", frequency: "3 times daily", duration: "3 days", qty: "100ml", price: 0, timing: ["8 AM", "2 PM", "8 PM"], instructions: "For children. Shake well." }
//         ],
//         "11-20": [
//             { name: "Paracetamol 500mg", type: "Tablet", dosage: "500mg", frequency: "3 times daily", duration: "3 days", qty: "9 tabs", price: 0, timing: ["Morning", "Afternoon", "Night"], instructions: "Take with water." }
//         ],
//         "21-40": [
//             { name: "Paracetamol 650mg", type: "Tablet", dosage: "650mg", frequency: "3 times daily", duration: "3 days", qty: "9 tabs", price: 0, timing: ["8 AM", "2 PM", "8 PM"], instructions: "Adult dose." }
//         ],
//         "41-60": [
//             { name: "Paracetamol 500mg", type: "Tablet", dosage: "500mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 0, timing: ["Morning", "Night"], instructions: "Lower dose for middle age." }
//         ],
//         "61+": [
//             { name: "Paracetamol 325mg", type: "Tablet", dosage: "325mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 0, timing: ["Morning", "Night"], instructions: "Lowest dose for seniors." }
//         ]
//     },
//     "Cough": {
//         "0-10": [
//             { name: "Dextromethorphan Pediatric", type: "Syrup", dosage: "2.5ml", frequency: "3 times daily", duration: "5 days", qty: "75ml", price: 0, timing: ["8 AM", "2 PM", "8 PM"], instructions: "Children's cough syrup." }
//         ],
//         "11-20": [
//             { name: "Dextromethorphan 10mg", type: "Tablet", dosage: "10mg", frequency: "3 times daily", duration: "5 days", qty: "15 tabs", price: 0, timing: ["Morning", "Afternoon", "Night"], instructions: "For teens." }
//         ],
//         "21-40": [
//             { name: "Codeine Phosphate", type: "Tablet", dosage: "15mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 0, timing: ["Morning", "Night"], instructions: "For severe cough." }
//         ],
//         "41-60": [
//             { name: "Dextromethorphan 20mg", type: "Tablet", dosage: "20mg", frequency: "2 times daily", duration: "5 days", qty: "10 tabs", price: 0, timing: ["Morning", "Night"], instructions: "Extended release." }
//         ],
//         "61+": [
//             { name: "Honey Ginger Syrup", type: "Syrup", dosage: "10ml", frequency: "3 times daily", duration: "7 days", qty: "210ml", price: 0, timing: ["After meals"], instructions: "Natural for seniors." }
//         ]
//     },
//     "Headache": {
//         "0-10": [
//             { name: "Paracetamol Suspension", type: "Syrup", dosage: "5ml", frequency: "As needed", duration: "2 days", qty: "30ml", price: 0, timing: ["When needed"], instructions: "Children's headache." }
//         ],
//         "11-20": [
//             { name: "Ibuprofen 200mg", type: "Tablet", dosage: "200mg", frequency: "As needed", duration: "2 days", qty: "4 tabs", price: 0, timing: ["When needed"], instructions: "Teen headache." }
//         ],
//         "21-40": [
//             { name: "Sumatriptan 50mg", type: "Tablet", dosage: "50mg", frequency: "As needed", duration: "2 days", qty: "2 tabs", price: 0, timing: ["When migraine starts"], instructions: "For migraine." }
//         ],
//         "41-60": [
//             { name: "Aspirin 325mg", type: "Tablet", dosage: "325mg", frequency: "As needed", duration: "2 days", qty: "4 tabs", price: 0, timing: ["When needed"], instructions: "Adult headache." }
//         ],
//         "61+": [
//             { name: "Paracetamol 325mg", type: "Tablet", dosage: "325mg", frequency: "As needed", duration: "2 days", qty: "4 tabs", price: 0, timing: ["When needed"], instructions: "Senior safe." }
//         ]
//     },
//     "Cold": {
//         "0-10": [
//             { name: "Saline Nasal Drops", type: "Drops", dosage: "2 drops", frequency: "4 times daily", duration: "5 days", qty: "10ml", price: 0, timing: ["Morning", "Afternoon", "Evening", "Night"], instructions: "Safe for kids." }
//         ],
//         "11-20": [
//             { name: "Phenylephrine 10mg", type: "Tablet", dosage: "10mg", frequency: "3 times daily", duration: "5 days", qty: "15 tabs", price: 0, timing: ["8 AM", "2 PM", "8 PM"], instructions: "Teen decongestant." }
//         ],
//         "21-40": [
//             { name: "Pseudoephedrine 60mg", type: "Tablet", dosage: "60mg", frequency: "2 times daily", duration: "5 days", qty: "10 tabs", price: 0, timing: ["Morning", "Night"], instructions: "Adult cold." }
//         ],
//         "41-60": [
//             { name: "Guaifenesin 600mg", type: "Tablet", dosage: "600mg", frequency: "3 times daily", duration: "5 days", qty: "15 tabs", price: 0, timing: ["8 AM", "2 PM", "8 PM"], instructions: "For congestion." }
//         ],
//         "61+": [
//             { name: "Steam Inhalation", type: "Therapy", dosage: "10 mins", frequency: "3 times daily", duration: "5 days", qty: "NA", price: 0, timing: ["Morning", "Afternoon", "Night"], instructions: "Natural for seniors." }
//         ]
//     },
//     "Body Pain": {
//         "0-10": [
//             { name: "Ibuprofen Suspension", type: "Syrup", dosage: "3ml", frequency: "2 times daily", duration: "3 days", qty: "60ml", price: 0, timing: ["Morning", "Night"], instructions: "Children's pain." }
//         ],
//         "11-20": [
//             { name: "Ibuprofen 400mg", type: "Tablet", dosage: "400mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 0, timing: ["Morning", "Night"], instructions: "Teen pain." }
//         ],
//         "21-40": [
//             { name: "Diclofenac 50mg", type: "Tablet", dosage: "50mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 0, timing: ["Morning", "Night"], instructions: "Adult pain." }
//         ],
//         "41-60": [
//             { name: "Naproxen 250mg", type: "Tablet", dosage: "250mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 0, timing: ["Morning", "Night"], instructions: "Middle age pain." }
//         ],
//         "61+": [
//             { name: "Paracetamol 500mg", type: "Tablet", dosage: "500mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 0, timing: ["Morning", "Night"], instructions: "Senior safe pain." }
//         ]
//     }
// };

// const commonMedicinesByAge = {
//     "0-10": [
//         { name: "Vitamin D Drops", type: "Drops", dosage: "400IU", frequency: "Once daily", duration: "30 days", qty: "30ml", price: 0, timing: ["Morning"], instructions: "For bone growth." },
//         { name: "Iron Syrup", type: "Syrup", dosage: "5ml", frequency: "Once daily", duration: "30 days", qty: "150ml", price: 0, timing: ["Morning"], instructions: "For children's health." }
//     ],
//     "11-20": [
//         { name: "Multivitamin Teen", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 0, timing: ["Morning"], instructions: "Teen vitamins." },
//         { name: "Calcium 500mg", type: "Tablet", dosage: "500mg", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 0, timing: ["Night"], instructions: "For bones." }
//     ],
//     "21-40": [
//         { name: "Multivitamin Adult", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 0, timing: ["Morning"], instructions: "Adult vitamins." },
//         { name: "Vitamin C 500mg", type: "Tablet", dosage: "500mg", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 0, timing: ["Morning"], instructions: "Immunity." }
//     ],
//     "41-60": [
//         { name: "Multivitamin 40+", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 0, timing: ["Morning"], instructions: "For age 40+." },
//         { name: "Vitamin D3 1000IU", type: "Capsule", dosage: "1000IU", frequency: "Once daily", duration: "30 days", qty: "30 caps", price: 0, timing: ["Morning"], instructions: "Bone health." }
//     ],
//     "61+": [
//         { name: "Multivitamin Senior", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 0, timing: ["Morning"], instructions: "Senior formula." },
//         { name: "Omega 3", type: "Capsule", dosage: "1000mg", frequency: "Once daily", duration: "30 days", qty: "30 caps", price: 0, timing: ["Morning"], instructions: "For heart health." }
//     ]
// };

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Advanced prescription system loaded');
//     loadPatientData();
//     loadDoctorData();
//     document.getElementById('prescriptionDate').textContent = new Date().toLocaleDateString('en-IN', {
//         day: 'numeric',
//         month: 'short',
//         year: 'numeric'
//     });
//     generateAdvancedMedicines();
//     setupEventListeners();
// });

// function loadPatientData() {
//     const checkupData = JSON.parse(localStorage.getItem('smartcare_checkup'));
//     if (checkupData) {
//         document.getElementById('patientName').textContent = checkupData.fullName || 'Patient';
//         document.getElementById('patientAgeGender').textContent = `${checkupData.age || 'N/A'} Years, ${checkupData.gender || 'Not specified'}`;
//         document.getElementById('patientSymptoms').textContent = checkupData.symptoms || 'No symptoms recorded';
//         updateDiagnosis(checkupData.symptoms, checkupData.temperature, checkupData.age);
//     }
// }

// function loadDoctorData() {
//     const doctorData = JSON.parse(localStorage.getItem('selectedDoctor')) || {
//         name: "Dr. Sharma",
//         specialty: "General Physician",
//         license: "MCI-12345",
//         hospital: "District Hospital"
//     };
//     document.getElementById('doctorName').textContent = doctorData.name;
//     document.getElementById('doctorSpecialty').textContent = doctorData.specialty;
//     document.getElementById('doctorLicense').textContent = doctorData.license || "MCI-XXXXX";
//     document.getElementById('doctorContact').textContent = doctorData.contact || "Government Hospital";
// }

// function updateDiagnosis(symptoms, temperature, age) {
//     const diagnosisText = document.getElementById('diagnosisText');
//     const severityLevel = document.getElementById('severityLevel');
    
//     if (!symptoms) return;
    
//     let diagnosis = "";
//     let severity = "Mild";
//     let severityClass = "mild";
    
//     const symptomsLower = symptoms.toLowerCase();
//     const temp = parseFloat(temperature) || 0;
//     const patientAge = parseInt(age) || 0;
    
//     if (symptomsLower.includes('fever')) {
//         if (temp >= 39) {
//             diagnosis = `High fever (${temp}°C). Possible serious infection. `;
//             severity = "Severe";
//             severityClass = "severe";
//         } else if (temp >= 38) {
//             diagnosis = `Moderate fever (${temp}°C). Likely viral infection. `;
//             severity = "Moderate";
//             severityClass = "moderate";
//         } else {
//             diagnosis = `Low-grade fever (${temp}°C). Mild infection. `;
//         }
        
//         if (patientAge < 12) {
//             diagnosis += "Pediatric fever management required. ";
//         } else if (patientAge > 60) {
//             diagnosis += "Senior patient - monitor closely. ";
//         }
//     }
    
//     if (symptomsLower.includes('cough')) {
//         diagnosis += "Cough present. ";
//         if (symptomsLower.includes('dry')) {
//             diagnosis += "Dry cough - suppressant recommended. ";
//         } else if (symptomsLower.includes('chest') || symptomsLower.includes('phlegm')) {
//             diagnosis += "Chesty cough - expectorant recommended. ";
//             severity = "Moderate";
//             severityClass = "moderate";
//         }
//     }
    
//     if (symptomsLower.includes('headache')) {
//         diagnosis += "Headache reported. ";
//         if (symptomsLower.includes('severe') || symptomsLower.includes('migraine')) {
//             diagnosis += "Severe headache - may need specific treatment. ";
//             severity = "Moderate";
//             severityClass = "moderate";
//         }
//     }
    
//     if (symptomsLower.includes('pain')) {
//         diagnosis += "Body pain reported. ";
//         if (symptomsLower.includes('severe') || symptomsLower.includes('extreme')) {
//             diagnosis += "Severe pain - strong analgesics needed. ";
//             severity = "Moderate";
//             severityClass = "moderate";
//         }
//     }
    
//     if (!diagnosis) {
//         diagnosis = "General health checkup. No serious conditions detected. ";
//     }
    
//     diagnosis += "Recommended treatment based on age and symptoms.";
    
//     diagnosisText.textContent = diagnosis;
//     severityLevel.textContent = severity;
//     severityLevel.className = `severity-level ${severityClass}`;
// }

// function getAgeGroup(age) {
//     age = parseInt(age) || 0;
//     if (age <= 10) return "0-10";
//     if (age <= 20) return "11-20";
//     if (age <= 40) return "21-40";
//     if (age <= 60) return "41-60";
//     return "61+";
// }

// function getTemperatureBasedMeds(symptoms, temperature, ageGroup) {
//     const temp = parseFloat(temperature) || 0;
//     let extraMeds = [];
    
//     if (symptoms.toLowerCase().includes('fever')) {
//         if (temp >= 39) {
//             extraMeds.push({
//                 name: "Cold Sponge",
//                 type: "Therapy",
//                 dosage: "As needed",
//                 frequency: "Every 4 hours",
//                 duration: "Until fever breaks",
//                 qty: "NA",
//                 price: 0,
//                 timing: ["When fever high"],
//                 instructions: "Use lukewarm water. Do not use cold water."
//             });
            
//             if (ageGroup === "0-10" || ageGroup === "11-20") {
//                 extraMeds.push({
//                     name: "Extra Hydration",
//                     type: "Therapy",
//                     dosage: "500ml extra",
//                     frequency: "Daily",
//                     duration: "Until recovery",
//                     qty: "NA",
//                     price: 0,
//                     timing: ["Throughout day"],
//                     instructions: "Oral rehydration solution or water"
//                 });
//             }
//         }
        
//         if (temp >= 38 && ageGroup === "61+") {
//             extraMeds.push({
//                 name: "Close Monitoring",
//                 type: "Instruction",
//                 dosage: "Check every 2 hours",
//                 frequency: "Continuous",
//                 duration: "48 hours",
//                 qty: "NA",
//                 price: 0,
//                 timing: ["Every 2 hours"],
//                 instructions: "Monitor temperature. Seek help if rising."
//             });
//         }
//     }
    
//     return extraMeds;
// }

// function generateAdvancedMedicines() {
//     const checkupData = JSON.parse(localStorage.getItem('smartcare_checkup'));
//     const medicinesList = document.getElementById('medicinesList');
    
//     if (!medicinesList) return;
    
//     medicinesList.innerHTML = '';
    
//     let allMedicines = [];
//     let srNo = 1;
    
//     if (checkupData) {
//         const age = checkupData.age || 30;
//         const ageGroup = getAgeGroup(age);
//         const symptoms = checkupData.symptoms || '';
//         const temperature = checkupData.temperature || 0;
//         const symptomsLower = symptoms.toLowerCase();
        
//         Object.keys(advancedMedicineDB).forEach(symptom => {
//             if (symptomsLower.includes(symptom.toLowerCase())) {
//                 const ageSpecificMeds = advancedMedicineDB[symptom][ageGroup];
//                 if (ageSpecificMeds) {
//                     ageSpecificMeds.forEach(med => {
//                         allMedicines.push({ ...med, srNo: srNo++ });
//                     });
//                 }
//             }
//         });
        
//         const tempBasedMeds = getTemperatureBasedMeds(symptoms, temperature, ageGroup);
//         tempBasedMeds.forEach(med => {
//             allMedicines.push({ ...med, srNo: srNo++ });
//         });
        
//         const commonMeds = commonMedicinesByAge[ageGroup] || [];
//         commonMeds.forEach(med => {
//             allMedicines.push({ ...med, srNo: srNo++ });
//         });
//     }
    
//     if (allMedicines.length === 0) {
//         allMedicines.push({
//             srNo: 1,
//             name: "Multivitamin",
//             type: "Tablet",
//             dosage: "1 tablet",
//             frequency: "Once daily",
//             duration: "30 days",
//             qty: "30 tabs",
//             price: 0,
//             timing: ["Morning"],
//             instructions: "General health supplement"
//         });
//     }
    
//     allMedicines.forEach(medicine => {
//         const timingHTML = medicine.timing.map(t => 
//             `<span class="timing-badge">${t}</span>`
//         ).join('');
        
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${medicine.srNo}</td>
//             <td><strong>${medicine.name}</strong></td>
//             <td>${medicine.type}</td>
//             <td>${medicine.dosage}</td>
//             <td>${medicine.frequency}</td>
//             <td>${medicine.duration}</td>
//             <td>${medicine.qty}</td>
//             <td>₹ ${medicine.price}</td>
//             <td><div class="timing-badges">${timingHTML}</div></td>
//             <td>${medicine.instructions}</td>
//         `;
//         medicinesList.appendChild(row);
//     });
    
//     document.getElementById('totalCost').textContent = '₹ 0';
// }

// function setupEventListeners() {
//     document.getElementById('printBtn')?.addEventListener('click', function() {
//         window.print();
//     });
    
//     document.getElementById('exportWordBtn')?.addEventListener('click', exportToWord);
    
//     document.getElementById('downloadPdfBtn')?.addEventListener('click', downloadPDF);
    
//     document.getElementById('addMedicineBtn')?.addEventListener('click', addCustomMedicine);
    
//     document.getElementById('savePrescriptionBtn')?.addEventListener('click', savePrescription);
    
//     document.getElementById('sendEmailBtn')?.addEventListener('click', sendEmail);
// }

// function addCustomMedicine() {
//     const medicinesList = document.getElementById('medicinesList');
//     const rowCount = medicinesList.querySelectorAll('tr').length;
    
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>${rowCount + 1}</td>
//         <td contenteditable="true"><strong>Custom Medicine</strong></td>
//         <td contenteditable="true">Tablet</td>
//         <td contenteditable="true">500mg</td>
//         <td contenteditable="true">2 times daily</td>
//         <td contenteditable="true">5 days</td>
//         <td contenteditable="true">10 tabs</td>
//         <td contenteditable="true">₹ 0</td>
//         <td>
//             <div class="timing-badges">
//                 <span class="timing-badge">Morning</span>
//                 <span class="timing-badge">Night</span>
//             </div>
//         </td>
//         <td contenteditable="true">Take as directed</td>
//     `;
    
//     medicinesList.appendChild(newRow);
// }

// function savePrescription() {
//     const prescriptionData = {
//         patient: document.getElementById('patientName').textContent,
//         doctor: document.getElementById('doctorName').textContent,
//         date: document.getElementById('prescriptionDate').textContent,
//         diagnosis: document.getElementById('diagnosisText').textContent,
//         savedAt: new Date().toISOString()
//     };
    
//     localStorage.setItem('smartcare_prescription', JSON.stringify(prescriptionData));
    
//     const successMsg = document.getElementById('successMessage');
//     successMsg.style.display = 'flex';
    
//     setTimeout(() => {
//         successMsg.style.display = 'none';
//     }, 3000);
// }

// function exportToWord() {
//     const content = document.querySelector('.prescription-container').innerHTML;
//     const htmlContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <meta charset="UTF-8">
//             <title>SmartCare Prescription</title>
//             <style>
//                 body { font-family: Arial, sans-serif; margin: 20px; }
//                 h1 { color: #2196f3; }
//                 table { border-collapse: collapse; width: 100%; margin: 20px 0; }
//                 th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
//                 th { background-color: #f2f2f2; }
//                 .header { display: flex; justify-content: space-between; }
//             </style>
//         </head>
//         <body>
//             ${content}
//         </body>
//         </html>
//     `;
    
//     const blob = new Blob([htmlContent], { type: 'application/msword' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `Prescription_${Date.now()}.doc`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
// }

// function downloadPDF() {
//     const element = document.querySelector('.prescription-container');
    
//     html2pdf()
//         .from(element)
//         .set({
//             margin: [10, 10, 10, 10],
//             filename: `SmartCare_Prescription_${Date.now()}.pdf`,
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//         })
//         .save();
// }

// function sendEmail() {
//     alert('Prescription email sent successfully!');
// }

// prescription.js - COMPLETE WITH COSTS

const advancedMedicineDB = {
    "Fever": {
        "0-10": [
            { name: "Paracetamol Suspension", type: "Syrup", dosage: "5ml", frequency: "3 times daily", duration: "3 days", qty: "100ml", price: 45, timing: ["8 AM", "2 PM", "8 PM"], instructions: "For children. Shake well." },
            { name: "Ibuprofen Suspension", type: "Syrup", dosage: "3ml", frequency: "2 times daily", duration: "3 days", qty: "60ml", price: 65, timing: ["Morning", "Night"], instructions: "If fever > 38.5°C" }
        ],
        "11-20": [
            { name: "Paracetamol 500mg", type: "Tablet", dosage: "500mg", frequency: "3 times daily", duration: "3 days", qty: "9 tabs", price: 15, timing: ["Morning", "Afternoon", "Night"], instructions: "Take with water." },
            { name: "Vitamin C 500mg", type: "Tablet", dosage: "500mg", frequency: "Once daily", duration: "5 days", qty: "5 tabs", price: 30, timing: ["Morning"], instructions: "Immunity booster." }
        ],
        "21-40": [
            { name: "Paracetamol 650mg", type: "Tablet", dosage: "650mg", frequency: "3 times daily", duration: "3 days", qty: "9 tabs", price: 20, timing: ["8 AM", "2 PM", "8 PM"], instructions: "Adult dose." },
            { name: "Ibuprofen 400mg", type: "Tablet", dosage: "400mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 35, timing: ["Morning", "Night"], instructions: "For pain with fever." }
        ],
        "41-60": [
            { name: "Paracetamol 500mg", type: "Tablet", dosage: "500mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 15, timing: ["Morning", "Night"], instructions: "Lower dose for middle age." },
            { name: "Multivitamin 40+", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 250, timing: ["Morning"], instructions: "For age 40+." }
        ],
        "61+": [
            { name: "Paracetamol 325mg", type: "Tablet", dosage: "325mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 10, timing: ["Morning", "Night"], instructions: "Lowest dose for seniors." },
            { name: "Vitamin D3 1000IU", type: "Capsule", dosage: "1000IU", frequency: "Once daily", duration: "30 days", qty: "30 caps", price: 180, timing: ["Morning"], instructions: "For bone health." }
        ]
    },
    "Cough": {
        "0-10": [
            { name: "Dextromethorphan Pediatric", type: "Syrup", dosage: "2.5ml", frequency: "3 times daily", duration: "5 days", qty: "75ml", price: 85, timing: ["8 AM", "2 PM", "8 PM"], instructions: "Children's cough syrup." },
            { name: "Honey Lemon Syrup", type: "Syrup", dosage: "5ml", frequency: "3 times daily", duration: "7 days", qty: "105ml", price: 120, timing: ["After meals"], instructions: "Natural remedy." }
        ],
        "11-20": [
            { name: "Dextromethorphan 10mg", type: "Tablet", dosage: "10mg", frequency: "3 times daily", duration: "5 days", qty: "15 tabs", price: 40, timing: ["Morning", "Afternoon", "Night"], instructions: "For teens." },
            { name: "Guaifenesin 400mg", type: "Tablet", dosage: "400mg", frequency: "3 times daily", duration: "5 days", qty: "15 tabs", price: 75, timing: ["Morning", "Afternoon", "Night"], instructions: "For chesty cough." }
        ],
        "21-40": [
            { name: "Codeine Phosphate", type: "Tablet", dosage: "15mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 120, timing: ["Morning", "Night"], instructions: "For severe cough." },
            { name: "Ambroxol 30mg", type: "Tablet", dosage: "30mg", frequency: "3 times daily", duration: "5 days", qty: "15 tabs", price: 90, timing: ["8 AM", "2 PM", "8 PM"], instructions: "Mucolytic agent." }
        ],
        "41-60": [
            { name: "Dextromethorphan 20mg", type: "Tablet", dosage: "20mg", frequency: "2 times daily", duration: "5 days", qty: "10 tabs", price: 60, timing: ["Morning", "Night"], instructions: "Extended release." },
            { name: "Steam Inhalation Kit", type: "Kit", dosage: "As needed", frequency: "3 times daily", duration: "7 days", qty: "1 kit", price: 150, timing: ["Morning", "Afternoon", "Night"], instructions: "With eucalyptus oil." }
        ],
        "61+": [
            { name: "Honey Ginger Syrup", type: "Syrup", dosage: "10ml", frequency: "3 times daily", duration: "7 days", qty: "210ml", price: 95, timing: ["After meals"], instructions: "Natural for seniors." },
            { name: "Saline Gargle Kit", type: "Kit", dosage: "As needed", frequency: "4 times daily", duration: "5 days", qty: "1 kit", price: 50, timing: ["After meals", "Before bed"], instructions: "With salt and warm water." }
        ]
    },
    "Headache": {
        "0-10": [
            { name: "Paracetamol Suspension", type: "Syrup", dosage: "5ml", frequency: "As needed", duration: "2 days", qty: "30ml", price: 45, timing: ["When needed"], instructions: "Children's headache." }
        ],
        "11-20": [
            { name: "Ibuprofen 200mg", type: "Tablet", dosage: "200mg", frequency: "As needed", duration: "2 days", qty: "4 tabs", price: 25, timing: ["When needed"], instructions: "Teen headache." },
            { name: "Caffeine 65mg", type: "Tablet", dosage: "65mg", frequency: "Once daily", duration: "2 days", qty: "2 tabs", price: 40, timing: ["Morning"], instructions: "For migraine." }
        ],
        "21-40": [
            { name: "Sumatriptan 50mg", type: "Tablet", dosage: "50mg", frequency: "As needed", duration: "2 days", qty: "2 tabs", price: 180, timing: ["When migraine starts"], instructions: "For migraine only." },
            { name: "Naproxen 250mg", type: "Tablet", dosage: "250mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 65, timing: ["Morning", "Night"], instructions: "For severe headache." }
        ],
        "41-60": [
            { name: "Aspirin 325mg", type: "Tablet", dosage: "325mg", frequency: "As needed", duration: "2 days", qty: "4 tabs", price: 20, timing: ["When needed"], instructions: "Adult headache." },
            { name: "Magnesium 400mg", type: "Tablet", dosage: "400mg", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 200, timing: ["Night"], instructions: "Preventive for chronic headaches." }
        ],
        "61+": [
            { name: "Paracetamol 325mg", type: "Tablet", dosage: "325mg", frequency: "As needed", duration: "2 days", qty: "4 tabs", price: 10, timing: ["When needed"], instructions: "Senior safe." }
        ]
    },
    "Cold": {
        "0-10": [
            { name: "Saline Nasal Drops", type: "Drops", dosage: "2 drops", frequency: "4 times daily", duration: "5 days", qty: "10ml", price: 35, timing: ["Morning", "Afternoon", "Evening", "Night"], instructions: "Safe for kids." },
            { name: "Vapor Rub", type: "Ointment", dosage: "Apply on chest", frequency: "3 times daily", duration: "5 days", qty: "10g", price: 85, timing: ["Morning", "Afternoon", "Night"], instructions: "For children above 2 years." }
        ],
        "11-20": [
            { name: "Phenylephrine 10mg", type: "Tablet", dosage: "10mg", frequency: "3 times daily", duration: "5 days", qty: "15 tabs", price: 45, timing: ["8 AM", "2 PM", "8 PM"], instructions: "Teen decongestant." },
            { name: "Cetirizine 10mg", type: "Tablet", dosage: "10mg", frequency: "Once daily", duration: "5 days", qty: "5 tabs", price: 20, timing: ["Night"], instructions: "For runny nose." }
        ],
        "21-40": [
            { name: "Pseudoephedrine 60mg", type: "Tablet", dosage: "60mg", frequency: "2 times daily", duration: "5 days", qty: "10 tabs", price: 75, timing: ["Morning", "Night"], instructions: "Adult cold." },
            { name: "Vitamin C 1000mg", type: "Tablet", dosage: "1000mg", frequency: "Once daily", duration: "7 days", qty: "7 tabs", price: 50, timing: ["Morning"], instructions: "Immune booster." }
        ],
        "41-60": [
            { name: "Guaifenesin 600mg", type: "Tablet", dosage: "600mg", frequency: "3 times daily", duration: "5 days", qty: "15 tabs", price: 85, timing: ["8 AM", "2 PM", "8 PM"], instructions: "For congestion." },
            { name: "Zinc 50mg", type: "Tablet", dosage: "50mg", frequency: "Once daily", duration: "5 days", qty: "5 tabs", price: 40, timing: ["Morning"], instructions: "Reduces cold duration." }
        ],
        "61+": [
            { name: "Steam Inhaler", type: "Device", dosage: "10 mins", frequency: "3 times daily", duration: "5 days", qty: "1 device", price: 300, timing: ["Morning", "Afternoon", "Night"], instructions: "Electric steam inhaler." }
        ]
    },
    "Body Pain": {
        "0-10": [
            { name: "Ibuprofen Suspension", type: "Syrup", dosage: "3ml", frequency: "2 times daily", duration: "3 days", qty: "60ml", price: 65, timing: ["Morning", "Night"], instructions: "Children's pain." },
            { name: "Warm Compress", type: "Therapy", dosage: "15 mins", frequency: "3 times daily", duration: "3 days", qty: "NA", price: 0, timing: ["Morning", "Afternoon", "Night"], instructions: "For muscle pain." }
        ],
        "11-20": [
            { name: "Ibuprofen 400mg", type: "Tablet", dosage: "400mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 35, timing: ["Morning", "Night"], instructions: "Teen pain." },
            { name: "Voltaren Gel", type: "Gel", dosage: "Apply thinly", frequency: "3 times daily", duration: "5 days", qty: "30g", price: 120, timing: ["Morning", "Afternoon", "Night"], instructions: "Topical pain relief." }
        ],
        "21-40": [
            { name: "Diclofenac 50mg", type: "Tablet", dosage: "50mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 55, timing: ["Morning", "Night"], instructions: "Adult pain." },
            { name: "Muscle Relaxant", type: "Tablet", dosage: "5mg", frequency: "Once at night", duration: "3 days", qty: "3 tabs", price: 90, timing: ["Night"], instructions: "For severe muscle spasm." }
        ],
        "41-60": [
            { name: "Naproxen 250mg", type: "Tablet", dosage: "250mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 65, timing: ["Morning", "Night"], instructions: "Middle age pain." },
            { name: "Glucosamine", type: "Capsule", dosage: "500mg", frequency: "3 times daily", duration: "30 days", qty: "90 caps", price: 450, timing: ["Morning", "Afternoon", "Night"], instructions: "For joint health." }
        ],
        "61+": [
            { name: "Paracetamol 500mg", type: "Tablet", dosage: "500mg", frequency: "2 times daily", duration: "3 days", qty: "6 tabs", price: 15, timing: ["Morning", "Night"], instructions: "Senior safe pain." },
            { name: "Omega 3", type: "Capsule", dosage: "1000mg", frequency: "Once daily", duration: "30 days", qty: "30 caps", price: 300, timing: ["Morning"], instructions: "For inflammation." }
        ]
    }
};

const commonMedicinesByAge = {
    "0-10": [
        { name: "Vitamin D Drops", type: "Drops", dosage: "400IU", frequency: "Once daily", duration: "30 days", qty: "30ml", price: 150, timing: ["Morning"], instructions: "For bone growth." },
        { name: "Iron Syrup", type: "Syrup", dosage: "5ml", frequency: "Once daily", duration: "30 days", qty: "150ml", price: 180, timing: ["Morning"], instructions: "For children's health." }
    ],
    "11-20": [
        { name: "Multivitamin Teen", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 200, timing: ["Morning"], instructions: "Teen vitamins." },
        { name: "Calcium 500mg", type: "Tablet", dosage: "500mg", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 120, timing: ["Night"], instructions: "For bones." }
    ],
    "21-40": [
        { name: "Multivitamin Adult", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 250, timing: ["Morning"], instructions: "Adult vitamins." },
        { name: "Vitamin B Complex", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 100, timing: ["Morning"], instructions: "For energy." }
    ],
    "41-60": [
        { name: "Multivitamin 40+", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 300, timing: ["Morning"], instructions: "For age 40+." },
        { name: "Vitamin D3 1000IU", type: "Capsule", dosage: "1000IU", frequency: "Once daily", duration: "30 days", qty: "30 caps", price: 180, timing: ["Morning"], instructions: "Bone health." }
    ],
    "61+": [
        { name: "Multivitamin Senior", type: "Tablet", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", qty: "30 tabs", price: 350, timing: ["Morning"], instructions: "Senior formula." },
        { name: "Omega 3 Fish Oil", type: "Capsule", dosage: "1000mg", frequency: "Once daily", duration: "30 days", qty: "30 caps", price: 300, timing: ["Morning"], instructions: "For heart health." }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('Advanced prescription system with costs loaded');
    loadPatientData();
    loadDoctorData();
    document.getElementById('prescriptionDate').textContent = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    generateAdvancedMedicines();
    calculateTotalCost();
    setupEventListeners();
});

function loadPatientData() {
    const checkupData = JSON.parse(localStorage.getItem('smartcare_checkup'));
    if (checkupData) {
        document.getElementById('patientName').textContent = checkupData.fullName || 'Patient';
        document.getElementById('patientAgeGender').textContent = `${checkupData.age || 'N/A'} Years, ${checkupData.gender || 'Not specified'}`;
        document.getElementById('patientSymptoms').textContent = checkupData.symptoms || 'No symptoms recorded';
        updateDiagnosis(checkupData.symptoms, checkupData.temperature, checkupData.age);
    }
}

function loadDoctorData() {
    const doctorData = JSON.parse(localStorage.getItem('selectedDoctor')) || {
        name: "Dr. Sharma",
        specialty: "General Physician",
        license: "MCI-12345",
        hospital: "District Hospital"
    };
    document.getElementById('doctorName').textContent = doctorData.name;
    document.getElementById('doctorSpecialty').textContent = doctorData.specialty;
    document.getElementById('doctorLicense').textContent = doctorData.license || "MCI-XXXXX";
    document.getElementById('doctorContact').textContent = doctorData.contact || "Government Hospital";
}

function updateDiagnosis(symptoms, temperature, age) {
    const diagnosisText = document.getElementById('diagnosisText');
    const severityLevel = document.getElementById('severityLevel');
    
    if (!symptoms) return;
    
    let diagnosis = "";
    let severity = "Mild";
    let severityClass = "mild";
    
    const symptomsLower = symptoms.toLowerCase();
    const temp = parseFloat(temperature) || 0;
    const patientAge = parseInt(age) || 0;
    
    if (symptomsLower.includes('fever')) {
        if (temp >= 39) {
            diagnosis = `High fever (${temp}°C). Possible serious infection. `;
            severity = "Severe";
            severityClass = "severe";
        } else if (temp >= 38) {
            diagnosis = `Moderate fever (${temp}°C). Likely viral infection. `;
            severity = "Moderate";
            severityClass = "moderate";
        } else {
            diagnosis = `Low-grade fever (${temp}°C). Mild infection. `;
        }
        
        if (patientAge < 12) {
            diagnosis += "Pediatric fever management required. ";
        } else if (patientAge > 60) {
            diagnosis += "Senior patient - monitor closely. ";
        }
    }
    
    if (symptomsLower.includes('cough')) {
        diagnosis += "Cough present. ";
        if (symptomsLower.includes('dry')) {
            diagnosis += "Dry cough - suppressant recommended. ";
        } else if (symptomsLower.includes('chest') || symptomsLower.includes('phlegm')) {
            diagnosis += "Chesty cough - expectorant recommended. ";
            severity = "Moderate";
            severityClass = "moderate";
        }
    }
    
    if (symptomsLower.includes('headache')) {
        diagnosis += "Headache reported. ";
        if (symptomsLower.includes('severe') || symptomsLower.includes('migraine')) {
            diagnosis += "Severe headache - may need specific treatment. ";
            severity = "Moderate";
            severityClass = "moderate";
        }
    }
    
    if (symptomsLower.includes('pain')) {
        diagnosis += "Body pain reported. ";
        if (symptomsLower.includes('severe') || symptomsLower.includes('extreme')) {
            diagnosis += "Severe pain - strong analgesics needed. ";
            severity = "Moderate";
            severityClass = "moderate";
        }
    }
    
    if (!diagnosis) {
        diagnosis = "General health checkup. No serious conditions detected. ";
    }
    
    diagnosis += "Recommended treatment based on age and symptoms.";
    
    diagnosisText.textContent = diagnosis;
    severityLevel.textContent = severity;
    severityLevel.className = `severity-level ${severityClass}`;
}

function getAgeGroup(age) {
    age = parseInt(age) || 0;
    if (age <= 10) return "0-10";
    if (age <= 20) return "11-20";
    if (age <= 40) return "21-40";
    if (age <= 60) return "41-60";
    return "61+";
}

function getTemperatureBasedMeds(symptoms, temperature, ageGroup) {
    const temp = parseFloat(temperature) || 0;
    let extraMeds = [];
    
    if (symptoms.toLowerCase().includes('fever')) {
        if (temp >= 39) {
            extraMeds.push({
                name: "Cold Sponge Kit",
                type: "Kit",
                dosage: "As needed",
                frequency: "Every 4 hours",
                duration: "Until fever breaks",
                qty: "1 kit",
                price: 75,
                timing: ["When fever high"],
                instructions: "Contains towels and thermometer."
            });
            
            if (ageGroup === "0-10" || ageGroup === "11-20") {
                extraMeds.push({
                    name: "ORS Sachets",
                    type: "Powder",
                    dosage: "1 sachet",
                    frequency: "3 times daily",
                    duration: "3 days",
                    qty: "9 sachets",
                    price: 45,
                    timing: ["Morning", "Afternoon", "Night"],
                    instructions: "Mix in 1 liter water."
                });
            }
        }
        
        if (temp >= 38 && ageGroup === "61+") {
            extraMeds.push({
                name: "Digital Thermometer",
                type: "Device",
                dosage: "As needed",
                frequency: "Every 2 hours",
                duration: "7 days",
                qty: "1 device",
                price: 200,
                timing: ["Every 2 hours"],
                instructions: "For continuous monitoring."
            });
        }
    }
    
    return extraMeds;
}

function generateAdvancedMedicines() {
    const checkupData = JSON.parse(localStorage.getItem('smartcare_checkup'));
    const medicinesList = document.getElementById('medicinesList');
    
    if (!medicinesList) return;
    
    medicinesList.innerHTML = '';
    
    let allMedicines = [];
    let srNo = 1;
    let totalCost = 0;
    
    if (checkupData) {
        const age = checkupData.age || 30;
        const ageGroup = getAgeGroup(age);
        const symptoms = checkupData.symptoms || '';
        const temperature = checkupData.temperature || 0;
        const symptomsLower = symptoms.toLowerCase();
        
        Object.keys(advancedMedicineDB).forEach(symptom => {
            if (symptomsLower.includes(symptom.toLowerCase())) {
                const ageSpecificMeds = advancedMedicineDB[symptom][ageGroup];
                if (ageSpecificMeds) {
                    ageSpecificMeds.forEach(med => {
                        allMedicines.push({ ...med, srNo: srNo++ });
                        totalCost += med.price;
                    });
                }
            }
        });
        
        const tempBasedMeds = getTemperatureBasedMeds(symptoms, temperature, ageGroup);
        tempBasedMeds.forEach(med => {
            allMedicines.push({ ...med, srNo: srNo++ });
            totalCost += med.price;
        });
        
        const commonMeds = commonMedicinesByAge[ageGroup] || [];
        commonMeds.forEach(med => {
            allMedicines.push({ ...med, srNo: srNo++ });
            totalCost += med.price;
        });
    }
    
    if (allMedicines.length === 0) {
        const defaultMed = {
            srNo: 1,
            name: "Multivitamin",
            type: "Tablet",
            dosage: "1 tablet",
            frequency: "Once daily",
            duration: "30 days",
            qty: "30 tabs",
            price: 250,
            timing: ["Morning"],
            instructions: "General health supplement"
        };
        allMedicines.push(defaultMed);
        totalCost = defaultMed.price;
    }
    
    allMedicines.forEach(medicine => {
        const timingHTML = medicine.timing.map(t => 
            `<span class="timing-badge">${t}</span>`
        ).join('');
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${medicine.srNo}</td>
            <td><strong>${medicine.name}</strong></td>
            <td>${medicine.type}</td>
            <td>${medicine.dosage}</td>
            <td>${medicine.frequency}</td>
            <td>${medicine.duration}</td>
            <td>${medicine.qty}</td>
            <td>₹ ${medicine.price}</td>
            <td><div class="timing-badges">${timingHTML}</div></td>
            <td>${medicine.instructions}</td>
        `;
        medicinesList.appendChild(row);
    });
    
    document.getElementById('totalCost').textContent = `₹ ${totalCost}`;
    localStorage.setItem('prescriptionTotalCost', totalCost);
}

function calculateTotalCost() {
    const medicinesList = document.getElementById('medicinesList');
    const totalCostElement = document.getElementById('totalCost');
    
    if (!medicinesList || !totalCostElement) return;
    
    let total = 0;
    const rows = medicinesList.querySelectorAll('tr');
    
    rows.forEach(row => {
        const priceCell = row.querySelector('td:nth-child(8)');
        if (priceCell) {
            const priceText = priceCell.textContent.replace('₹', '').trim();
            const price = parseFloat(priceText) || 0;
            total += price;
        }
    });
    
    totalCostElement.textContent = `₹ ${total}`;
    localStorage.setItem('prescriptionTotalCost', total);
}

function setupEventListeners() {
    document.getElementById('printBtn')?.addEventListener('click', function() {
        window.print();
    });
    
    document.getElementById('exportWordBtn')?.addEventListener('click', exportToWord);
    
    document.getElementById('downloadPdfBtn')?.addEventListener('click', downloadPDF);
    
    document.getElementById('addMedicineBtn')?.addEventListener('click', addCustomMedicine);
    
    document.getElementById('savePrescriptionBtn')?.addEventListener('click', savePrescription);
    
    document.getElementById('sendEmailBtn')?.addEventListener('click', sendEmail);
}

function addCustomMedicine() {
    const medicinesList = document.getElementById('medicinesList');
    const rowCount = medicinesList.querySelectorAll('tr').length;
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${rowCount + 1}</td>
        <td contenteditable="true"><strong>Custom Medicine</strong></td>
        <td contenteditable="true">Tablet</td>
        <td contenteditable="true">500mg</td>
        <td contenteditable="true">2 times daily</td>
        <td contenteditable="true">5 days</td>
        <td contenteditable="true">10 tabs</td>
        <td contenteditable="true">₹ 100</td>
        <td>
            <div class="timing-badges">
                <span class="timing-badge">Morning</span>
                <span class="timing-badge">Night</span>
            </div>
        </td>
        <td contenteditable="true">Take as directed</td>
    `;
    
    medicinesList.appendChild(newRow);
    calculateTotalCost();
}

function savePrescription() {
    const prescriptionData = {
        patient: document.getElementById('patientName').textContent,
        doctor: document.getElementById('doctorName').textContent,
        date: document.getElementById('prescriptionDate').textContent,
        diagnosis: document.getElementById('diagnosisText').textContent,
        totalCost: document.getElementById('totalCost').textContent,
        savedAt: new Date().toISOString()
    };
    
    localStorage.setItem('smartcare_prescription', JSON.stringify(prescriptionData));
    
    const successMsg = document.getElementById('successMessage');
    successMsg.style.display = 'flex';
    
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 3000);
}

function exportToWord() {
    const content = document.querySelector('.prescription-container').innerHTML;
    const totalCost = document.getElementById('totalCost').textContent;
    
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>SmartCare Prescription - Total: ${totalCost}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #2196f3; }
                table { border-collapse: collapse; width: 100%; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
                .total-cost { font-size: 18px; font-weight: bold; color: #e53935; margin: 20px 0; }
                .header { display: flex; justify-content: space-between; }
            </style>
        </head>
        <body>
            <div class="total-cost">Total Prescription Cost: ${totalCost}</div>
            ${content}
        </body>
        </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SmartCare_Prescription_${totalCost.replace('₹ ', '')}_${Date.now()}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function downloadPDF() {
    const element = document.querySelector('.prescription-container');
    const totalCost = document.getElementById('totalCost').textContent;
    
    html2pdf()
        .from(element)
        .set({
            margin: [10, 10, 10, 10],
            filename: `SmartCare_Prescription_${totalCost.replace('₹ ', 'Rs')}_${Date.now()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .save();
}

function sendEmail() {
    const patientName = document.getElementById('patientName').textContent;
    const totalCost = document.getElementById('totalCost').textContent;
    alert(`Prescription email sent to patient ${patientName}!\n\nTotal Cost: ${totalCost}\n\nIn a real application, this would send the prescription to the patient's email.`);
}