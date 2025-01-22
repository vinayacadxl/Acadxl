document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const className = document.getElementById('class').value;
    const message = document.getElementById('message').value;
  
    // Create an object to store the data
    const formData = {
      name,
      email,
      number,
      class: className,
      message,
      submittedAt: new Date().toISOString()
    };
  
    // Save data to localStorage (replace this with API call or database storage)
    let storedData = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    storedData.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(storedData));
  
    // Show confirmation
    document.getElementById('confirmation').innerText = "Your details have been submitted successfully!";
    document.getElementById('dataForm').reset();
  });
