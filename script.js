// script.js — Tüm sayfalar için temel JavaScript fonksiyonları

// Sayfa yüklendiğinde çalışacak işlemler
window.addEventListener("DOMContentLoaded", function () {
    // Otomatik tarih alanı placeholder (gg.aa.yyyy) gösterimi için
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(function (input) {
      input.setAttribute("lang", "tr");
      input.placeholder = "gg.aa.yyyy";
  
      // Placeholder gibi görünmesi için sadece focus ile date tipine geçer
      input.addEventListener("focus", function () {
        this.type = "date";
      });
      input.addEventListener("blur", function () {
        if (!this.value) this.type = "text";
      });
      // İlk durumda type text olarak ayarlanır
      input.type = "text";
    });
  
    // Form gönderiminde örnek bilgi kutusu gösterimi
    const forms = document.querySelectorAll("form");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const mesaj = document.createElement("div");
        mesaj.className = "js-confirm";
        mesaj.innerText = "Form başarıyla gönderildi!";
  
        form.parentElement.insertBefore(mesaj, form);
        setTimeout(() => mesaj.remove(), 5000);
      });
    });
  
  });