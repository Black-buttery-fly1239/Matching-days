function MatchingDays() {

    let theDate1;
    let theDate2;

    let weekday1;
    let weekday2;


    var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    function setDate1(date1) {
        theDate1 = new Date(date1)
        weekday1 = theDate1.getDay()

    }

    function getDate1() {
        return daysArray[weekday1]
    }

    function setDate2(date2) {
        theDate2 = new Date(date2)
        weekday2 = theDate2.getDay()
    }

    function getDate2() {
        return daysArray[weekday2]
    }
    function sameDay() {
        if (weekday1 === weekday2){
            return 'matching'
    }
}

    function dateOne() {
        if (daysArray[weekday1] !== daysArray[weekday2]) {
            if (daysArray[weekday1]) {
                return 'date1'
            }
        }
    }

    function dateTwo() {
        if (daysArray[weekday2] !== daysArray[weekday1]) {
            if (daysArray[weekday2]) {
                return 'date2'
            }
        }
    }

    function daysOfTheWeek() {
        return daysArray;
    }


    return {
        daysOfTheWeek,
        setDate1,
        setDate2,
        getDate1,
        getDate2,
        sameDay,
        dateOne,
        dateTwo,
    }
}
