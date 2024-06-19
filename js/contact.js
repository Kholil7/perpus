document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Menghentikan pengiriman formulir default

        const name = document.getElementById("name").value;
        const classInput = document.getElementById("class").value;
        const message = document.getElementById("message").value;

        // Kirim pesan ke WhatsApp, Anda perlu menyesuaikan URL dengan nomor WhatsApp Anda
        const whatsappURL = `https://wa.me/6285258437571?text=Assalamualikum Wr. Wb Nama:%20${encodeURIComponent(name)}%0AKelas:%20${encodeURIComponent(classInput)}%0APesan:%20${encodeURIComponent(message)}`;

        // Buka WhatsApp dengan URL yang disiapkan
        const whatsappWindow = window.open(whatsappURL);

        // Tangani kesalahan jika pengiriman pesan gagal
        if (whatsappWindow) {
            alert("Pesan telah berhasil dikirim. Terima kasih telah menghubungi kami.");
            form.reset(); // Mengosongkan formulir jika berhasil
        } else {
            alert("Pesan gagal dikirim. Silakan coba lagi nanti atau hubungi kami melalui cara lain.");
        }
    });
});


// validasi
function capitalizeFirstLetter(id) {
  var element = document.getElementById(id);
  var str = element.value;
  str = str.toLowerCase().replace(/\b\w/g, function(char) {
      return char.toUpperCase();
  });
  element.value = str;
}

// Fungsi untuk mengubah input menjadi huruf kapital
function capitalizeInput(event) {
    const input = event.target;
    input.value = input.value.toUpperCase();
  }
  
  // Menambahkan event listener ke input kelas, kode, dan durasi
  const kelasInput = document.getElementById('class');
  
  kelasInput.addEventListener('input', capitalizeInput);