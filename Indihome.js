const kategoriData = [
    { nama: "Paket Jitu 1", kategori: "JITU-1" },
    { nama: "Paket Jitu 2", kategori: "JITU-2" },
    { nama: "Paket Jitu 3", kategori: "JITU-3" }
]

const paketData = [
    {
        kategori: "JITU-1",
        nama: "Basic",
        mbps: "10 Mbps",
        harga: "Rp. 150.000",
        icon: "fas fa-home",
        deskripsi: [
            {
              icon: "fas fa-tag",
              text: "Biaya pasang",
              text2: "Gratis"
            },
            {
              icon: "fas fa-gift",
              text: "Benefit",
              text2: "1 Aplikasi"
            }
        ],
        infoSelengkapnya: [
            "Prioritas layanan",
            "SLA 99% uptime",
            "Dukungan 24/7"
        ],
        waLink: "https://wa.me/62811367123?text=Saya%20ingin%20berlangganan%20Paket%20Basic"
    },
    {
        kategori: "JITU-1",
        nama: "Standard",
        mbps: "30 Mbps",
        harga: "Rp. 220.000",
        icon: "fas fa-building",
        deskripsi: [
            {
              icon: "fas fa-tag",
              text: "Biaya pasang",
              text2: "Gratis"
            },
            {
              icon: "fas fa-gift",
              text: "Benefit",
              text2: "3 Aplikasi"
            }
        ],
        infoSelengkapnya: [
            "Prioritas layanan",
            "SLA 99% uptime",
            "Dukungan 24/7"
        ],
        waLink: "https://wa.me/62811367123?text=Saya%20ingin%20berlangganan%20Paket%20Standard"
    },
    {
        kategori: "JITU-1",
        nama: "Enterprise",
        mbps: "50 Mbps",
        harga: "Rp. 265.000",
        icon: "fas fa-city",
        deskripsi: [
            {
              icon: "fas fa-tag",
              text: "Biaya pasang",
              text2: "Gratis"
            },
            {
              icon: "fas fa-gift",
              text: "Benefit",
              text2: "6 Aplikasi"
            }
        ],
        infoSelengkapnya: [
            "Prioritas layanan",
            "SLA 99% uptime",
            "Dukungan 24/7"
        ],
        waLink: "https://wa.me/62811367123?text=Saya%20ingin%20berlangganan%20Paket%20Enterprise"
    },
    {
        kategori: "JITU-2",
        nama: "Basic",
        mbps: "10 Mbps",
        harga: "Rp. 150.000",
        icon: "fas fa-city",
        deskripsi: [
            {
              icon: "fas fa-tag",
              text: "Biaya pasang",
              text2: "Gratis"
            },
            {
              icon: "fas fa-gift",
              text: "Benefit",
              text2: "1 Aplikasi"
            }
        ],
        infoSelengkapnya: [
            "Prioritas layanan",
            "SLA 99% uptime",
            "Dukungan 24/7"
        ],
        waLink: "https://wa.me/62811367123?text=Saya%20ingin%20berlangganan%20Paket%20Basic"
    },
    {
        kategori: "JITU-2",
        nama: "Standard",
        mbps: "30 Mbps",
        harga: "Rp. 220.000",
        icon: "fas fa-city",
        deskripsi: [
            {
              icon: "fas fa-tag",
              text: "Biaya pasang",
              text2: "Gratis"
            },
            {
              icon: "fas fa-gift",
              text: "Benefit",
              text2: "3 Aplikasi"
            }
        ],
        infoSelengkapnya: [
            "Prioritas layanan",
            "SLA 99% uptime",
            "Dukungan 24/7"
        ],
        waLink: "https://wa.me/62811367123?text=Saya%20ingin%20berlangganan%20Paket%20Standard"
    },
    {
        kategori: "JITU-2",
        nama: "Enterprise",
        mbps: "50 Mbps",
        harga: "Rp. 265.000",
        icon: "fas fa-city",
        deskripsi: [
            {
              icon: "fas fa-tag",
              text: "Biaya pasang",
              text2: "Gratis"
            },
            {
              icon: "fas fa-gift",
              text: "Benefit",
              text2: "6 Aplikasi"
            }
        ],
        infoSelengkapnya: [
            "Prioritas layanan",
            "SLA 99% uptime",
            "Dukungan 24/7"
        ],
        waLink: "https://wa.me/62811367123?text=Saya%20ingin%20berlangganan%20Paket%20Enterprise"
    }
]

const kategoriContainer = document.querySelector("#pilihPaket")
kategoriContainer.innerHTML = `
    <h2 class="text-xl font-bold text-center">Pilih Paket Anda</h2>
    <div class="flex gap-1 mt-6 overflow-x-auto whitespace-nowrap px-4 w-full flex-nowrap items-center justify-center md:justify-start">
        <div class="flex gap-2 pl-10">
            ${kategoriData.map((kategori, index) => `
                <button class="kategoriPaket ${index === 0 ? "bg-red-600 text-white" : "bg-gray-300 text-gray-700"} px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 shrink-0" data-kategori="${kategori.kategori}">
                    ${kategori.nama}
                </button>
            `).join("")}
        </div>
    </div>
    <div class="scroll-container mt-8"></div>
`

const paketContainer = document.querySelector(".scroll-container")

function renderPaket(kategori) {
    const filteredPaket = paketData.filter(paket => paket.kategori === kategori)

    paketContainer.style.justifyContent = filteredPaket.length === 1 ? "center" : "flex-start"

    paketContainer.innerHTML = filteredPaket.map(paket => `
        <div class="kategoriContent shadow-md bg-white rounded-xl overflow-hidden w-64 h-[380px] border border-gray-200 flex flex-col">
            <div class="bg-gradient-to-b from-red-500 to-red-700 text-white p-6 rounded-t-xl flex flex-col items-start">
                <h3 class="text-xl font-bold">${paket.nama}</h3>
                <p class="text-3xl font-extrabold mt-1">${paket.harga}</p>
                <div class="bg-white text-red-600 px-4 py-2 rounded-full text-lg font-semibold mt-3">
                    ${paket.mbps}
                </div>
            </div>
            <div class="p-6 text-gray-700 flex-grow flex flex-col justify-between">
                <div class="space-y-4 text-sm">
                    ${paket.deskripsi.map(desc => `
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <i class="${desc.icon} text-gray-600 text-lg"></i>
                                <span>${desc.text}</span>
                            </div>
                            <span class="font-semibold text-gray-900">${desc.text2}</span>
                        </div>
                    `).join("")}
                </div>
                <p class="infoToggle text-blue-600 font-bold text-sm cursor-pointer text-left border-t border-gray-200 pt-4">
                    Info Selengkapnya
                </p>
                <a href="${paket.waLink}" class="block bg-red-600 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-red-700 transition-all duration-300 text-center text-lg">
                    Beli
                </a>
            </div>
        </div>
    `).join("")
}

renderPaket(kategoriData[0].kategori)

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("kategoriPaket")) {
        document.querySelectorAll(".kategoriPaket").forEach(btn => btn.classList.remove("bg-red-600", "text-white"))
        e.target.classList.add("bg-red-600", "text-white")
        renderPaket(e.target.dataset.kategori)
    }

    const toggle = e.target.closest(".infoToggle")
    if (toggle) {
        const paket = paketData.find(p => p.nama === toggle.closest(".kategoriContent").querySelector("h3").textContent)
        document.querySelector("#popupTitle").textContent = paket.nama
        document.querySelector("#popupMbps").textContent = paket.mbps
        document.querySelector("#popupPrice").textContent = paket.harga
        document.querySelector("#popupDescription").innerHTML = paket.deskripsi.map(d => `
            <p><i class="${d.icon}"></i> ${d.text}: <strong>${d.text2}</strong></p>
        `).join("")
        document.querySelector("#popupDetails").innerHTML = paket.infoSelengkapnya.map(info => `<p>- ${info}</p>`).join("")
        
        document.body.classList.add("overflow-hidden")
        document.querySelector("#infoPopup").classList.remove("hidden")
    }

    if (e.target.id === "closePopup") {
        document.body.classList.remove("overflow-hidden")
        document.querySelector("#infoPopup").classList.add("hidden")
    }
})

const scrollToPaket = () => document.getElementById('pilihPaket').scrollIntoView({ behavior: 'smooth' })
document.getElementById('lihatPaket').addEventListener('click', scrollToPaket)
document.getElementById('menuPaket').addEventListener('click', scrollToPaket)

const kategoriButtons = document.querySelectorAll('.kategoriPaket')
const kategoriContents = document.querySelectorAll('.kategoriContent')

kategoriButtons.forEach(button => {
    button.addEventListener('click', () => {
        kategoriButtons.forEach(btn => {
            btn.classList.remove('bg-red-600', 'text-white')
            btn.classList.add('bg-gray-300', 'text-gray-700')
        })
        button.classList.remove('bg-gray-300', 'text-gray-700')
        button.classList.add('bg-red-600', 'text-white')

        kategoriContents.forEach(content => {
            content.style.display = content.getAttribute('data-kategori') === button.getAttribute('data-kategori') ? 'block' : 'none'
        })
    })
})
