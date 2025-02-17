document.addEventListener("DOMContentLoaded", function () {
    let accountList = document.getElementById("account-list");

    // Data akun dengan gambar dan deskripsi yang unik
    let accounts = [
        { id: 1, image: "https://i.ibb.co.com/CKcG06TC/Screenshot-20250207-181048.jpg", description: "Allkosong, login moonton only!! harga? tes harga aja." },
        { id: 2, image: "https://placekitten.com/101/100", description: "Akun dengan akses penuh ke konten eksklusif dan layanan premium." },
        { id: 3, image: "https://placekitten.com/102/100", description: "Akun untuk pengguna yang ingin menikmati fitur lengkap dan lebih banyak keuntungan." },
        { id: 4, image: "https://placekitten.com/103/100", description: "Akun dengan fitur terbaik dan pengalaman pengguna premium." },
        { id: 5, image: "https://placekitten.com/104/100", description: "Akun dengan akses VIP ke berbagai fitur terbaru dan terbaik." },
        // Tambahkan akun lainnya dengan gambar dan deskripsi yang berbeda
        { id: 6, image: "https://placekitten.com/105/100", description: "Akun untuk pengguna yang mencari keuntungan maksimal dengan harga terjangkau." },
        { id: 7, image: "https://placekitten.com/106/100", description: "Akun dengan fitur eksklusif untuk pengalaman lebih baik dalam game." },
        { id: 8, image: "https://placekitten.com/107/100", description: "Akun premium yang menawarkan pengalaman tanpa batas di platform kami." },
        // ... bisa menambah akun lainnya dengan pola yang sama
    ];

    // Loop untuk menampilkan akun
    accounts.forEach(account => {
        let accountHTML = `
            <div class="account-card">
                <img src="${account.image}" alt="Akun ${account.id}">
                <h3>Akun ${account.id}</h3>
                <p>${account.description}</p>
                <button class="info-btn" onclick="showInfo(${account.id})">Lihat Info</button>
                <a href="https://wa.me/6283867056910?text=Halo,%20saya%20ingin%20beli%20Akun%20${account.id}" class="buy-btn">
                    <i class="fab fa-whatsapp"></i>Beli Sekarang
                </a>
            </div>
        `;
        accountList.innerHTML += accountHTML;
    });

    // Efek animasi saat scroll
    let cards = document.querySelectorAll(".account-card");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.9;
        cards.forEach(card => {
            let cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", function() {
        requestAnimationFrame(checkScroll);
    });
    checkScroll();
});

// Fungsi untuk melihat info akun 
function showInfo(id) {
  let popup = document.getElementById("popup");
  let popupImg = document.getElementById("popup-img");
  let popupTitle = document.getElementById("popup-title");
  let popupDesc = document.getElementById("popup-desc");

  // 1. Cek id dan set gambar serta detail berdasarkan id akun
  if (id === 1) {
    popupImg.src = "https://i.ibb.co.com/CKcG06TC/Screenshot-20250207-181048.jpg"; // Gambar untuk Akun 1
    popupDesc.textContent = "Detail Akun 1: Tes harga acc pribadi ynz.";
  } else if (id === 2) {
    popupImg.src = "https://placekitten.com/201/201"; // Gambar untuk Akun 2
    popupDesc.textContent = "Detail Akun 2: Fitur eksklusif, keanggotaan premium, dan akses penuh.";
  } else if (id === 3) {
    popupImg.src = "https://placekitten.com/202/202"; // Gambar untuk Akun 3
    popupDesc.textContent = "Detail Akun 3: Fitur dasar dengan akses terbatas.";
  } else if (id === 4) {
    popupImg.src = "https://placekitten.com/203/203"; // Gambar untuk Akun 4
    popupDesc.textContent = "Detail Akun 4: Akses VIP, premium, dan fitur tambahan.";
  } else if (id === 5) {
    popupImg.src = "https://placekitten.com/204/204"; // Gambar untuk Akun 5
    popupDesc.textContent = "Detail Akun 5: Fitur standar dengan update rutin.";
  } else if (id === 6) {
    popupImg.src = "https://placekitten.com/205/205"; // Gambar untuk Akun 6
    popupDesc.textContent = "Detail Akun 6: Keanggotaan seumur hidup, akses penuh.";
  } else if (id === 7) {
    popupImg.src = "https://placekitten.com/206/206"; // Gambar untuk Akun 7
    popupDesc.textContent = "Detail Akun 7: Fitur premium dan keanggotaan eksklusif.";
  } else if (id === 8) {
    popupImg.src = "https://placekitten.com/207/207"; // Gambar untuk Akun 8
    popupDesc.textContent = "Detail Akun 8: Fitur super lengkap, akses penuh tanpa batas.";
  }

  // 2. Menyusun judul untuk popup
  popupTitle.textContent = "Akun " + id;

  // 3. Menampilkan popup
  popup.style.display = "flex";
setTimeout(() => {
    popup.classList.add("fade-in");
}, 10); // Animasi popup


}



// Fungsi menutup popup
function closePopup() { let popup = document.getElementById("popup"); popup.classList.remove("fade-in"); popup.style.display = "none"; }
