document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;

  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const dob = form.dob.value.trim();
  const contactNumber = form.contactNumber.value.trim();
  const ageGroup = form.ageGroup.value;
  const address = form.address.value.trim();
  const reason = form.reason.value.trim();

  
  const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  if (!fullName || !nameRegex.test(fullName)) {
    alert("Please enter a valid full name (letters only, no numbers or empty spaces).");
    return;
  }

 
  const phoneRegex = /^\+?[1-9]\d{7,14}$/;
  if (!phoneRegex.test(contactNumber)) {
    alert("Please enter a valid international phone number (e.g. +9779812345678).");
    return;
  }

  if (!email || !dob || !ageGroup || !address || !reason) {
    alert("Please fill all the fields.");
    return;
  }


  addRowToTable(fullName, email, dob, contactNumber, ageGroup, address, reason);
  form.reset();
});

function addRowToTable(fullName, email, dob, contactNumber, ageGroup, address, reason) {
  const table = document.getElementById('dataTable');
  const tbody = table.querySelector('tbody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${fullName}</td>
    <td>${email}</td>
    <td>${dob}</td>
    <td>${contactNumber}</td>
    <td>${ageGroup}</td>
    <td>${address}</td>
    <td>${reason}</td>
    <td>
      <button class="delete-btn">Delete</button>
    </td>
  `;
  
  newRow.querySelector('.delete-btn').addEventListener('click', () => {
    if (confirm("Are you sure you want to delete this entry?")) {
      newRow.remove();
      if (!tbody.hasChildNodes()) {
        table.style.display = "none";
      }
    }
  });

  tbody.appendChild(newRow);
  table.style.display = "table";
}
