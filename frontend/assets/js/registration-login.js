// registration-login.js

document.addEventListener("DOMContentLoaded", function () {
  const errorMessage = document.getElementById("errorMessage");
  const API_BASE_URL = "http://localhost:8080/api";

  // --- Registration ---
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const userData = {
        fullName: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        password: document.getElementById("password").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        bloodGroup: document.getElementById("bloodGroup").value,
        previousDiseases: document.getElementById("previousDiseases").value,
        emergencyName: document.getElementById("emergencyName").value,
        emergencyPhone: document.getElementById("emergencyPhone").value,
      };

      fetch(`${API_BASE_URL}/patients/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            showMessage(
              "✅ Account created successfully! Redirecting to dashboard...",
              "success"
            );
            setTimeout(() => (window.location.href = "dashboard.html"), 2000);
          } else {
            showMessage(
              "❌ " + (data.message || "Registration failed"),
              "error"
            );
          }
        })
        .catch((err) => showMessage("❌ Server error", "error"));
    });
  }

  // --- Login ---
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const loginData = {
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
      };

      fetch(`${API_BASE_URL}/patients/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      })
        .then((res) => {
          if (!res.ok) throw res;
          return res.json();
        })
        .then((data) => {
          if (data.id) {
            // ✅ Save patient info for dashboard & checkup
            localStorage.setItem("patientId", data.id);       // <-- MUST
            localStorage.setItem("patientName", data.fullName);
            localStorage.setItem("isLoggedIn", "true");

            showMessage("✅ Login successful! Redirecting...", "success");
            setTimeout(() => (window.location.href = "dashboard.html"), 1500);
          } else {
            showMessage(
              "❌ " + (data.message || "Invalid credentials"),
              "error"
            );
          }
        })
        .catch(async (err) => {
          let msg = "Server error";
          try {
            const errorData = await err.json();
            msg = errorData.error || errorData.message || msg;
          } catch (e) {}
          showMessage("❌ " + msg, "error");
        });
    });
  }

  function showMessage(msg, type) {
    if (!errorMessage) return;
    errorMessage.style.display = "block";
    errorMessage.style.padding = "10px";
    errorMessage.style.borderRadius = "6px";
    errorMessage.style.marginBottom = "10px";
    if (type === "success") {
      errorMessage.style.background = "#d4edda";
      errorMessage.style.color = "#155724";
    } else {
      errorMessage.style.background = "#f8d7da";
      errorMessage.style.color = "#721c24";
    }
    errorMessage.textContent = msg;
  }

  // Test backend connection on page load
  window.addEventListener("load", async function () {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      if (response.ok) {
        console.log("✅ Backend connected successfully");
      } else {
        console.warn("⚠️ Backend connection issue");
      }
    } catch (error) {
      console.error(
        "❌ Cannot connect to backend. Make sure Spring Boot is running on port 8080"
      );
    }
  });
});
