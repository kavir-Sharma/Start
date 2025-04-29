document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
  
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const dob = form.dob.value.trim();
    const contactNumber = form.contactNumber.value.trim();
    const address = form.address.value.trim();
    const reason = form.reason.value.trim();
  
    if (!fullName || !email || !dob || !contactNumber || !address || !reason) {
      alert("Please fill all the fields.");
      return;
    }
  
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');
    const newRow = document.createElement('tr');
  
    newRow.innerHTML = `
      <td>${fullName}</td>
      <td>${email}</td>
      <td>${dob}</td>
      <td>${contactNumber}</td>
      <td>${address}</td>
      <td>${reason}</td>
    `;
  
    tbody.appendChild(newRow);
    table.style.display = "table";
    form.reset();
  });
  