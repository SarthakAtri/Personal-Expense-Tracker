document.addEventListener('DOMContentLoaded', function() {
  const userForm = document.getElementById('user-form');
  const expenseTracker = document.getElementById('expense-tracker');
  const welcomeMessage = document.getElementById('welcome-message');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');
  const earningForm = document.getElementById('earning-form');
  const earningList = document.getElementById('earning-list');
  const totalExpensesElem = document.getElementById('total-expenses');
  const totalEarningsElem = document.getElementById('total-earnings');
  const totalMoneyLeftElem = document.getElementById('total-money-left');

  let totalExpenses = 0;
  let totalEarnings = 0;

  // Handle user form submission
  userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();

    if (username) {
      welcomeMessage.textContent = `Welcome, ${username}!`;
      document.body.classList.add('background-image');
      userForm.style.display = 'none';
      expenseTracker.style.display = 'block';
    }
  });

  // Handle expense form submission
  expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const expenseName = document.getElementById('expense-name').value.trim();
    const expenseCategory = document.getElementById('expense-category').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value.trim());

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
      const expenseItem = document.createElement('li');
      expenseItem.textContent = `${expenseName} (${expenseCategory}): ₹${expenseAmount}`;
      expenseList.appendChild(expenseItem);

      totalExpenses += expenseAmount;
      totalExpensesElem.textContent = totalExpenses;
      updateTotalMoneyLeft();

      // Clear form
      expenseForm.reset();
    }
  });

  // Handle earning form submission
  earningForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const earningSource = document.getElementById('earning-source').value.trim();
    const earningAmount = parseFloat(document.getElementById('earning-amount').value.trim());

    if (earningSource && !isNaN(earningAmount) && earningAmount > 0) {
      const earningItem = document.createElement('li');
      earningItem.textContent = `${earningSource}: ₹${earningAmount}`;
      earningList.appendChild(earningItem);

      totalEarnings += earningAmount;
      totalEarningsElem.textContent = totalEarnings;
      updateTotalMoneyLeft();

      // Clear form
      earningForm.reset();
    }
  });

  // Update total money left
  function updateTotalMoneyLeft() {
    const totalMoneyLeft = totalEarnings - totalExpenses;
    totalMoneyLeftElem.textContent = totalMoneyLeft;
  }
});
