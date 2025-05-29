document.addEventListener('DOMContentLoaded', function () {
  const balanceText = document.getElementById('balance');
  const toggleSwitch = document.getElementById('toggle-balance');
  const altBalanceText = document.getElementById('alt-balance');

  let isVisible = false;

  toggleSwitch.addEventListener('click', function () {
    isVisible = !isVisible;
    if (isVisible) {
      balanceText.textContent = '₦100,000.00';
      altBalanceText.textContent = '₦100,000.00';
    } else {
      balanceText.textContent = '₦*****';
      altBalanceText.textContent = '₦*****';
    }
  });

  // Future interactivity: loading user info, routing, etc.
  // Example:
  // document.getElementById('menu-btn').addEventListener('click', () => {
  //   alert("Menu clicked!");
  // });
});