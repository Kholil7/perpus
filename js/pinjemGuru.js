const scriptURL = 'https://script.google.com/macros/s/AKfycbykZ83Dtd3rUe7U-rKdoA5PoQOhUUGZMC-TJJ58-LOZMEr4O3cY5SSSMjmdNCMQEYYA/exec';
const form = document.forms['data-pinjam-guru'];
const content = document.querySelector('.content');
const pinjem = document.querySelector('.pinjamGuru');
const loadingScreen = document.getElementById('loading-screen');
var elemen = document.querySelector('.content');
var elemenHeight = elemen.clientHeight;
var elemenWidth = elemen.clientWidth;
elemen.style.textAlign = 'center';
elemen.style.backgroundColor = '#fff';
elemen.style.borderRadius = '8px';
elemen.style.padding = '5px';

// Mendapatkan tinggi dan lebar window (atau kontainer yang sesuai)
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

// Mengatur posisi absolut dan mengubah transform untuk menengahkan elemen secara horizontal dan vertikal
elemen.style.position = 'absolute';
elemen.style.top = (windowHeight - elemenHeight) / 2 + 'px';
elemen.style.left = (windowWidth - elemenWidth) / 2 + 'px';
elemen.style.transform = 'translate(-50%, -50%)';


// Fungsi untuk mengubah input menjadi huruf kapital
function capitalizeInput(event) {
  const input = event.target;
  input.value = input.value.toUpperCase();
}

// Menambahkan event listener ke input kelas, kode, dan durasi
const kelasInput = document.getElementById('jabatan');
const kodeInput = document.getElementById('kode');
const durasiInput = document.getElementById('durasi');

kelasInput.addEventListener('input', capitalizeInput);
kodeInput.addEventListener('input', capitalizeInput);
durasiInput.addEventListener('input', capitalizeInput);
// ...

form.addEventListener('submit', e => {
  e.preventDefault();

  loadingScreen.style.display = 'flex';

  // Validasi input
  const nama = form.elements['nama'].value;
  const kelas = form.elements['jabatan'].value;
  const judul = form.elements['judul'].value;
  const kode = form.elements['kode'].value;
  const durasi = form.elements['durasi'].value;
  const no = form.elements['no'].value;

  const regex = /[.\,/{}[\];'":~`+=_\-\\|<>]/;

  if (regex.test(nama) || regex.test(kelas) || regex.test(judul) || regex.test(durasi)) {
    alert('Input mengandung karakter terlarang!');
    return;
  }

  // Kirim data form
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (response.ok) {
        alert('Data berhasil dikirim!📩📚 Terima kasih!');
        form.reset();
        // Hilangkan  elemen dengan kelas .pinjem dari DOM
        pinjem.remove();
        // Menampilkan .content setelah .pinjem dihapus
        content.style.display = 'block'; // Menampilkan konten
        content.innerHTML = '<p>"Buku adalah sumber pengetahuan dan cahaya bagi pikiran."<br> - Albert Einstein 📚✨ <br> <br><a href = "../index.html">Kembali Ke Home</a></p>';
      } else {
        alert('Pesan gagal dikirim. Silakan coba lagi nanti atau hubungi kami melalui cara lain.');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Pesan gagal dikirim. Silakan coba lagi nanti atau hubungi kami melalui cara lain.');
    })
    .finally(() => {
      // Menyembunyikan loading screen setelah proses submit selesai
      loadingScreen.style.display = 'none';
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

// validasi 0 no
function tambahkanTandaPetik() {
    var nilai = document.getElementById("no").value;
    var nilaiDenganTandaPetik = "'" + nilai; // Menambahkan tanda petik satu ('') sebelum nilai
    document.getElementById("no").value = nilaiDenganTandaPetik;
  }
  
  // validasi 0 nisn
  function tambahkanTandaPetikDepan() {
    var nilai = document.getElementById("nip").value;
    var nilaiDenganTandaPetikDepan = "'" + nilai; // Menambahkan tanda petik satu ('') sebelum nilai
    document.getElementById("nip").value = nilaiDenganTandaPetikDepan;
  }