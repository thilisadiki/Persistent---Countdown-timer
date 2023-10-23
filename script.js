
    // Get end date from localStorage
    let countDownDate = localStorage.getItem('countdownDate');

    if(countDownDate) {
      // Parse back to date object
      countDownDate = new Date(countDownDate);
    } else {
      // No date, set to 10 days from now
      countDownDate = new Date();
      countDownDate.setDate(countDownDate.getDate() + 10);
      
      // Save to localStorage
      localStorage.setItem('countdownDate', countDownDate); 
    }
    
    setInterval(function() {
    
      // Get today's date
      let now = new Date().getTime();
    
      // Distance to date
      let distance = countDownDate - now;
    
      // Calculations    
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
      // Get span elements
      const daysSpan = document.querySelector('#countdown span:nth-child(1)');
      const hoursSpan = document.querySelector('#countdown span:nth-child(2)');
      const minsSpan = document.querySelector('#countdown span:nth-child(3)');
      const secsSpan = document.querySelector('#countdown span:nth-child(4)');
    
      // Update DOM
      daysSpan.textContent = days;
      hoursSpan.textContent = hours; 
      minsSpan.textContent = minutes;
      secsSpan.textContent = seconds;
    
      // Update localStorage
      localStorage.setItem('countdownDate', countDownDate);
      
      // Check for end
      if(distance < 0) {
        clearInterval(this);
        document.getElementById('countdown').innerHTML = 'Expired!';
      }
    
    }, 1000);