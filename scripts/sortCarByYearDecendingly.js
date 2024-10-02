function sortCarByYearDescendingly(cars) {
  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Mendapatkan panjang array
  let n = result.length;

  // Implementasi Bubble Sort secara descending
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // Membandingkan elemen tahun mobil secara descending
      if (result[j].year < result[j + 1].year) {
        // Tukar elemen jika elemen berikutnya lebih besar
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Return array hasil sorting
  return result;
}