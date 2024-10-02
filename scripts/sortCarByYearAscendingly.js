function sortCarByYearAscendingly(cars) {
  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Implementasi Bubble Sort
  let n = result.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // Bandingkan dua mobil berdasarkan atribut year
      if (result[j].year > result[j + 1].year) {
        // Tukar posisi jika mobil di posisi j lebih baru daripada mobil di posisi j+1
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Return array hasil sorting
  return result;
}

// Contoh penggunaan
const cars = [
  {
    id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    plate: "DBH-3491",
    transmission: "Automatic",
    manufacture: "Ford",
    model: "F150",
    available: true,
    type: "Sedan",
    year: 2022,
    options: ["Cruise Control", "Tinted Glass", "AM/FM Stereo"],
    specs: ["Brake assist", "Leather-wrapped shift knob"]
  },
  {
    id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    plate: "WXB-3984",
    transmission: "Automatic",
    manufacture: "BMW",
    model: "X5",
    available: false,
    type: "Convertible",
    year: 2019,
    options: ["Keyless Entry", "Power Windows", "MP3 (Single Disc)", "Navigation"],
    specs: ["Rear passenger map pockets", "Dual chrome exhaust tips"]
  },
  {
    id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
    plate: "OSL-4224",
    transmission: "Automanual",
    manufacture: "Lincoln",
    model: "MKZ",
    available: true,
    type: "Sedan",
    year: 2021,
    options: ["Bucket Seats", "Airbag: Passenger", "Antilock Brakes", "CD (Multi Disc)"],
    specs: ["Driver & front passenger map pockets", "Cargo area lamp"]
  }
];

// Panggil fungsi dan tampilkan hasilnya
console.log(sortCarByYearAscendingly(cars));
