// reference the first or second date
var theDateElem = document.querySelector("#first");
var dateElem = document.querySelector("#date");
//reference the template user data
var theThathaDateElem = document.querySelector(".thathaDate")
// var templateData = document.querySelector(".userData");

var settingInstance = MatchingDays()

var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var userDataElem = document.querySelector(".userData");
userDataElem.innerHTML = userTemplate({ regT: daysArray })
var dabuka = userDataElem.children;


theThathaDateElem.addEventListener('change', function () {
    let theDate1 = new Date(theDateElem.value);
    let theDate2 = new Date(dateElem.value);
    settingInstance.setDate1(theDate1)
    settingInstance.setDate2(theDate2)
    
    for(var i =0; i < dabuka.length; i++){
        dabuka[i].classList.remove(settingInstance.dateOne())
        dabuka[i].classList.remove(settingInstance.dateTwo())
        dabuka[i].classList.remove(settingInstance.sameDay())
        console.log(dabuka[i])
    }
    
    if (theDate1.getDay() === theDate2.getDay()){
        dabuka[theDate1.getDay()].classList.add(settingInstance.sameDay())
    }
    else if(theDate1.getDay() !== theDate2.getDay()){
        if(dabuka[theDate1.getDay()]){
            dabuka[theDate1.getDay()].classList.add(settingInstance.dateOne())  
            // console.log(dabuka[!theDate1.getDay()]);
        }
        if(dabuka[theDate2.getDay()]){
            dabuka[theDate2.getDay()].classList.add(settingInstance.dateTwo())  
        }
    } 
    
});
// var tickDate = daysArray[theDate1.getDay()];
// console.log(tickDate);
// let theDate1 = new Date;
//   if (tickDate) {