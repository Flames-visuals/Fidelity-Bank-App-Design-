function switchTab(tab) {
  const buttons = document.querySelectorAll('.tab-btns button');
  buttons.forEach(btn => btn.classList.remove('active'));

  if (tab === 'password') {
    buttons[0].classList.add('active');
    // You could show/hide different forms here
  } else {
    buttons[1].classList.add('active');
    alert("Verification Login not yet implemented.");
  }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate login success
  window.location.href = "dashboard.html";
});