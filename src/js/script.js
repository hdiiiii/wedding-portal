//AOS
AOS.init()

//Button Music
var isPlaying = true
function toggleMusic(event){
    event.preventDefault()

    const musicButton = document.getElementById('music-button')

    if (isPlaying) {
        musicButton.innerHTML = '<i class"fas fa-fw fa-pause"></i>'
        musicButton.classList.remove('rotate')
        musicButton.style.transform = 'traslateY(0)'
        music.pause()
    } else {
        musicButton.innerHTML = '<i class"fas fa-fw fa-compact-disc"></i>'
        musicButton.classList.add('rotate')
        music.play()
    }
    isPlaying = !isPlaying
}

//Waktu wedding
var countdownDate = new Date("Jan 26, 2025 09:00:00").getTime()
var x = setInterval(function (){
    var now = new Date().getTime()

    var distance = countdownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('countdown-wedding').innerHTML = `
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${days}</h5>Hari</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${hours}</h5>Jam</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${minutes}</h5>Menit</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${seconds}</h5>Detik</div></div>
 `
    if (distance < 0) {
        clearInterval(x)
        document.getElementById('countdown-wedding').innerHTML = "<span class='text-center p-3 rounded text-light m-2'><h2>Sudah di mulai</h2></span>"
    }
}, 1000)

//Gift bank
function downloadImage(imageId, fileName) {
    const image = document.getElementById(imageId);
    const link = document.createElement('a');
    link.href = image.src;
    link.download = fileName;
    link.click();
  }

  //Button submit rvsp
  document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen tombol
    const submitButton = document.querySelector(".btn-submit");

    submitButton.addEventListener("click", function (event) {
      // Mencegah pengiriman formulir default
      event.preventDefault();

      // Ambil nilai input
      const nama = document.getElementById("nama").value.trim();
      const pesan = document.getElementById("pesan").value.trim();

      // Validasi input sederhana
      if (nama === "" || pesan === "") {
        alert("Harap isi semua kolom sebelum mengirim.");
      } else {
        alert(`Terima kasih, ${nama}. Doa Anda: "${pesan}" telah kami terima.`);
        
        // Bersihkan input setelah kirim
        document.getElementById("nama").value = "";
        document.getElementById("pesan").value = "";
      }
    });
  });
  


