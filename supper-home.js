var stepsBottom = document.querySelectorAll(".steps-bottom");
var stepsTop = document.querySelectorAll(".steps-top");
var floatings = document.querySelectorAll(".steps-open");

var stepTreeButton = document.querySelectorAll('.step-tree-button');
var newSteps = document.querySelectorAll('.new-steps');

stepsBottom.forEach(function(stepBottom){
    stepBottom.addEventListener('click', function(){
        var dataId = stepBottom.dataset.id;

        if(stepBottom.classList.contains("grey-color")){ // Verifica se o botão do passo está inativo
        
            floatings.forEach(function(floatingOpen){
                if(floatingOpen.dataset.id == dataId){
                    floatingOpen.classList.toggle('hidden');
                } else {
                    floatingOpen.classList.add("hidden");
                }
            });

            stepsTop.forEach(function(stepTop){
                if(stepTop.dataset.id == dataId){
                    stepTop.classList.toggle('yellow-color');
                    stepTop.classList.toggle('grey-color');
                } else {
                    stepTop.classList.add('yellow-color');
                    stepTop.classList.remove('grey-color');
                }     
            });

            stepsBottom.forEach(function(stepBottom){
                if(stepBottom.dataset.id == dataId){ 
                    stepBottom.classList.toggle('yellow-color');
                    stepBottom.classList.toggle('grey-color');           
                } else {
                    stepBottom.classList.remove('yellow-color');
                    stepBottom.classList.add('grey-color');
                }
            });

            newSteps.forEach(function(newStep){
                newStep.classList.add("hidden");
            });
            
        } else {
            
            stepsTop.forEach(function(stepTop){
                if(stepTop.classList.contains("grey-color")){
                    stepTop.classList.remove('grey-color');
                    stepTop.classList.add('yellow-color');
                }
            });

            stepsBottom.forEach(function(stepBottom){
                if(stepBottom.classList.contains("yellow-color")){
                    stepBottom.classList.add('grey-color');
                    stepBottom.classList.remove('yellow-color');
                }
            });

            floatings.forEach(function(floatingOpen){
                floatingOpen.classList.add("hidden");
            });

            newSteps.forEach(function(newStep){
                newStep.classList.add("hidden");
            });
        }
    });
});

stepTreeButton.forEach(function(treeButtons){
    treeButtons.addEventListener("click", function(){
        var dataId = treeButtons.dataset.id;

        newSteps.forEach(function(newStep){
            if(newStep.dataset.id == dataId){
                newStep.classList.toggle('hidden');
            } else {
                newStep.classList.add("hidden");
            }

            floatings.forEach(function(floatingOpen){
                floatingOpen.classList.add("hidden");
            });
        });
    });
});