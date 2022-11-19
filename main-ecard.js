window.addEventListener("DOMContentLoaded",function(){
    const step = window.location.hash.substring(1);
    console.log(step.spl);
    
    manageSteps(step)
    
})

function manageSteps(step){
    switch (step) {
        case "new-app-offer":
            document.querySelector('.offer-image').classList.add('activate')
            break;
        case "new-app":
            
            break;
        case "verification-progress":
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Current Status: Application Under Verification"
            // Change classes in steps
            document.querySelector('.ta-status-step#app-submission').classList.remove('current')
            document.querySelector('.ta-status-step#app-submission').classList.add('completed');
            document.querySelector('.ta-status-step#app-submission .ta-status-step-title').innerHTML = "Application <br> Submitted"
            document.querySelector('.ta-status-step#app-verification').classList.add('current');
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-2');
            }, 1000);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            break;
        case "approved":
            manageSteps('verification-progress')
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Current Status: E-Card Delivery"
            // Change classes in steps
            document.querySelector('.ta-status-step#app-verification').classList.remove('current')
            document.querySelector('.ta-status-step#app-verification').classList.add('completed');
            document.querySelector('.ta-status-step#app-verification .ta-status-step-title').innerHTML = "Application <br> Verified"
            document.querySelector('.ta-status-step#app-approval').classList.add('completed');
            document.querySelector('.ta-status-step#app-approval .ta-status-step-title').innerHTML = "Application <br> Approved"
            document.querySelector('.ta-status-step#ecard-delivery').classList.add('current');
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-4');
            }, 500);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            // show details of delivery
            // document.querySelector('.ta-status-header-content').classList.add('has-delivery-details');

            break;
        case "ecard-delivered":
            // this case is when both e-card and physical is in transit
            manageSteps('approved')
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Current Status: Your Physical Card is in Transit."
            // Change classes in steps
            document.querySelector('.ta-status-step#app-verification').classList.remove('current')
            document.querySelector('.ta-status-step#app-verification').classList.add('completed');
            document.querySelector('.ta-status-step#app-approval').classList.add('completed');
            document.querySelector('.ta-status-step#ecard-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#ecard-delivery').classList.add('completed'); 
            document.querySelector('.ta-status-step#ecard-delivery .ta-status-step-title').innerHTML = "E-Card<br> Delivered"
            document.querySelector('.ta-status-step#card-delivery').classList.add('current');           
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-5');
            }, 500);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            // show details of delivery
            document.querySelector('.ta-status-header-content').classList.add('has-delivery-details');
            
            break;
        case "delivery":
            // this case is when both e-card and physical is in transit
            manageSteps('approved')
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Current Status: Your Physical Card is in Transit"
            // Change classes in steps
            document.querySelector('.ta-status-step#app-verification').classList.remove('current')
            document.querySelector('.ta-status-step#app-verification').classList.add('completed');
            document.querySelector('.ta-status-step#app-approval').classList.add('completed');
            document.querySelector('.ta-status-step#ecard-delivery').classList.add('current');
            document.querySelector('.ta-status-step#card-delivery').classList.add('current');
            // Change track color
            document.querySelector('.ta-timeline').style.backgroundColor = '#00b1f2';
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-4');
            }, 1000);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            // show details of delivery
            document.querySelector('.ta-status-header-content').classList.add('has-delivery-details');

            break;
        
        case "delivered":
            manageSteps('approved')
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Congratulations! Your Physical Card has been Delivered!"
            // Change classes in steps
            document.querySelector('.ta-status-step#ecard-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#ecard-delivery').classList.add('completed');
            document.querySelector('.ta-status-step#card-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#card-delivery').classList.add('completed');
            document.querySelector('.ta-status-step#card-delivery .ta-status-step-title').innerHTML = "Physical Card<br> Delivered"
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-5');
            }, 1000);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            // show details of delivery
            document.querySelector('.ta-status-header-content').classList.add('has-delivery-details');

            break;
        case "delivery-return":
            manageSteps('approved')
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Current Status: Returned to Origin"
            // Change classes in steps
            // document.querySelector('.ta-status-step#card-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#ecard-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#ecard-delivery').classList.add('completed');
            document.querySelector('.ta-status-step#card-delivery').classList.remove('completed');
            document.querySelector('.ta-status-step#card-delivery').classList.add('return');
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-5');
            }, 1000);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            // show details of delivery
            document.querySelector('.ta-status-header-content').classList.add('has-delivery-details');
            
            break;
        case "declined":
            manageSteps('verification-progress');
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "We’re Sorry! Your Application has been Declined"
            // Change classes in steps
            // document.querySelector('.ta-status-step#card-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#app-verification').classList.remove('current')
            document.querySelector('.ta-status-step#app-verification').classList.add('completed');
            document.querySelector('.ta-status-step#app-verification .ta-status-step-title').innerHTML = "Application<br> Verified"
            document.querySelector('.ta-status-step#app-approval').classList.add('declined');
            document.querySelector('.ta-status-step#app-approval .ta-status-step-title').innerHTML = "Application<br> Declined"
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-3');
            }, 1000);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            break;
    
        default:
            break;
    }
}