const budgetInput = document.getElementById('budget');
const budgetOutput = document.getElementById('budget-output');

// Pastikan elemen ada sebelum menambahkan event listener
if (budgetInput && budgetOutput) {
    // Tampilkan nilai awal saat halaman dimuat
    budgetOutput.textContent = `Rp ${budgetInput.value} Juta`;

    // Perbarui nilai saat slider digerakkan
    budgetInput.addEventListener('input', () => {
        budgetOutput.textContent = `Rp ${budgetInput.value} Juta`;
    });
}