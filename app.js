// Listern to Submit

document.querySelector('#loan-form').addEventListener('submit', function(e){

    // Hide Result
    document.getElementById('results').style.display = 'none';
    // show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResult,1000);

    e.preventDefault();
});

// create a fundtion for caluclatin result

function calculateResult(e){
    // UI Variables
    const UIamount = document.getElementById('amount');
    const UIIntrest = document.getElementById('intrest')
    const UIYears = document.getElementById('years')
    const Monthlypayment = document.getElementById('monthly-payment')
    const Totalpayment = document.getElementById('total-payment')
    const TotalIntrest = document.getElementById('total-interest')

    const Principle = parseFloat(UIamount.value);    
    const calculate_payments = parseFloat(UIYears.value) * 12 // how many payments we need to do like how many months
    const calculated_intrest = parseFloat(Principle * UIIntrest.value ) / 100 * UIYears.value// Intrest amount
    console.log(calculated_intrest)

    // compute month and payments

    const Monthly_payment = ((Principle + calculated_intrest) / calculate_payments)

    if (isFinite(Monthly_payment)){
        Monthlypayment.value = Monthly_payment
        Totalpayment.value = Principle + calculated_intrest
        TotalIntrest.value = ((Principle + calculated_intrest) - Principle)

        // hide loader
        document.getElementById('loading').style.display = 'none';
        // show results
        document.getElementById('results').style.display = 'block';
        
    }else{
        showError('Please check your numbers!')
    }
}

function showError(error){

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    
    const error_alert = document.createElement('div')

    // Add classes
    error_alert.className ='alert alert-danger'
    // create text node and appedn to div
    error_alert.appendChild(document.createTextNode(error))
    //Insert before heading of form
    // taking head and card classes

    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading');
    
   card.insertBefore(error_alert,heading)

   // clear error after 3 seconds

   setTimeout(clear_,3000);
}

// clear error function

function clear_(){
    document.querySelector('.alert').remove();
}






