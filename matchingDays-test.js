describe("The MatchingDays function", function () {
    it("should be able to set the first date", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate1("12-01-2021");
// console.log(daysSetting.getDate1);
        assert.equal("Wednesday", daysSetting.getDate1());

    });

    it("should be able to set the second date", function () {
        let daysSetting = MatchingDays();
        
        daysSetting.setDate2("11-01-2021");
        assert.equal("Monday", daysSetting.getDate2());
       

    });

    it("should be able to set the dates that are on the same day and highlight the day with green", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate2("12-01-2021");
        daysSetting.setDate1("12-01-2021");

        assert.equal("matching", daysSetting.sameDay());

    });

    it("should be able to set the first date and reurn a day highlight with blue", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate1("12-02-2021");

        assert.equal("date1", daysSetting.dateOne());

    });

    it("should be able to set the second date andreturn a day highlight with red", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate2("11-02-2021");

        assert.equal("date2", daysSetting.dateTwo());

    });

    
    it("should be able to return the day e.g Monday", function () {
        let daysSetting = MatchingDays();
        
        daysSetting.setDate2("11-01-2021");
        assert.equal("Monday", daysSetting.getDate2());
    });
    
    it("should be able to return the day e.g Tuesday", function () {
        let daysSetting = MatchingDays();
        
        daysSetting.setDate1("11-02-2021");
        
        assert.equal("Tuesday", daysSetting.getDate1());
        
    });
    
    it("should be able to return the day e.g Wednesday", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate1("12-01-2021");

        assert.equal("Wednesday", daysSetting.getDate1());

    });

    it("should be able to return the day e.g Thursday", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate1("09-02-2021");

        assert.equal("Thursday", daysSetting.getDate1());

    });

    it("should be able to return the day e.g Friday", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate1("04-02-2021");

        assert.equal("Friday", daysSetting.getDate1());

    });

    it("should be able to return the day e.g Satursday", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate1("10-02-2021");

        assert.equal("Saturday", daysSetting.getDate1());

    });

    it("should be able to return the day e.g Sunday", function () {
        let daysSetting = MatchingDays();

        daysSetting.setDate1("08-01-2021");

        assert.equal("Sunday", daysSetting.getDate1("Sunday"));

    });
});