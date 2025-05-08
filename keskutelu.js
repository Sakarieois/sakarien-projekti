console.log("Keskustelu avattu");
function send() {
    
    const birthdayField = document.getElementById('birthday');
    const emailField = document.getElementById('email');
    const acceptMarketingField = document.getElementById('acceptMarketing');
    const denyMarketingField = document.getElementById('denyMarketing');
    const petSelectField = document.getElementById('pet-select');
    const messageField = document.getElementById('message');
    
    const birthday = birthdayField.value;
    const email = emailField.value;
    const denymarketing = denyMarketingField.value;
    const petselect = petSelectField.value;
    const message = messageField.value;
    const acceptMarketing = acceptMarketingField.value;

    
    console.log('Syntymäpäivä:', birthday);
    console.log('Sähköposti:', email);
    console.log('Viesti:', message);
    console.log('Hyväksy markkinointi:', acceptMarketing);
    console.log('Ei markkinointia:',denymarketing );
    console.log('Valitse:', petselect);

    
    const dialog = document.getElementById('commentDialog');
    dialog.close();
  }