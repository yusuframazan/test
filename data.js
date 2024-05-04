// Firebase veri tabanı URL'si
var firebaseURL = "https://bitki-izleme-default-rtdb.firebaseio.com/sensors.json";

// Verileri çekmek için bir HTTP isteği yap
fetch(firebaseURL)
  .then(response => response.json())
  .then(data => {
    // Verileri işle
    console.log("Firebase'den alınan veriler:", data);
    
    // Verileri HTML'e ekleme veya başka bir işlem yapma
  })
  .catch(error => {
    console.error("Veriler alınırken hata oluştu:", error);
  });
