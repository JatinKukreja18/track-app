window.addEventListener("DOMContentLoaded",function(){
    const step = window.location.hash.substring(1);
    console.log(step.spl);
    
    manageSteps(step)
    
})

function manageSteps(step){
    switch (step) {
        case "submitted":
            
            break;
        case "verification-progress":
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Current Status: Application Under Verification"
            // Change classes in steps
            document.querySelector('.ta-status-step#app-submission').classList.remove('current')
            document.querySelector('.ta-status-step#app-submission').classList.add('completed');
            document.querySelector('.ta-status-step#app-verification').classList.add('current');
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-2');
            }, 500);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            break;
        case "approved":
            manageSteps('verification-progress')
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Current Status: Your Physical Card is in Transit"
            // Change classes in steps
            document.querySelector('.ta-status-step#app-verification').classList.remove('current')
            document.querySelector('.ta-status-step#app-verification').classList.add('completed');
            document.querySelector('.ta-status-step#app-approval').classList.add('completed');
            document.querySelector('.ta-status-step#card-delivery').classList.add('current');
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-3');
            }, 500);
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
            document.querySelector('.ta-status-step#card-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#card-delivery').classList.add('completed');
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-4');
            }, 500);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            break;
        case "delivery-return":
            manageSteps('approved')
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "Current Status: Returned to Origin"
            // Change classes in steps
            // document.querySelector('.ta-status-step#card-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#card-delivery').classList.remove('completed');
            document.querySelector('.ta-status-step#card-delivery').classList.add('return');
            // Increase Track Length
            setTimeout(function(){                
                document.querySelector('.ta-timeline').classList.add('to-step-4');
            }, 1000);
            // change footer buttons
            document.querySelector('.new-app').classList.remove('active');
            document.querySelector('.inprocess-app').classList.add('active');
            break;
        case "declined":
            manageSteps('verification-progress');
            // Change Title in Current Status
            document.querySelector('#main-status').textContent = "We’re Sorry! Your Application has been Declined"
            // Change classes in steps
            // document.querySelector('.ta-status-step#card-delivery').classList.remove('current');
            document.querySelector('.ta-status-step#app-verification').classList.remove('current')
            document.querySelector('.ta-status-step#app-verification').classList.add('completed');
            document.querySelector('.ta-status-step#app-approval').classList.add('declined');
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