parseChecks = function(checksData) {
    var checks = [];

    $(checksData).each(function (index, value) {
        if (value["Check date"]) {
            title = "test"
            link = "https://codecheck.org/test"
            date = "2020"
            var view = {
                date: new Date(value["Check date"]),
                title: value["Title"],
                certificate: value["Certificate"],
                link: value["Report"],
                type: value["Type"]
            };
            view.datestring = $.format.prettyDate(view.date);
            checks.push(view);
        } else {
            console.log("No check date, not adding ", JSON.stringify(value));
        }
    });

    return (checks);
}

updateList = function(checks, count, listId, templateId) {
    // sort by date, descending
    checks_to_add = checks;
    checks_to_add.sort(function(a,b){
        return b.date - a.date;
    });

    // limit list length
    checks_to_add = checks_to_add.slice(0, count);

    // clear existing list
    var checkList = $(listId);
    checkList.empty();

    var templateCheck = $(templateId).html();
    Mustache.parse(templateCheck);
    
    checks_to_add.forEach(function(element, index, array) {
        var output = Mustache.render(templateCheck, element);
        checkList.append(output);
    });
}

updateCount = function(checks, countId) {
    var count_element = $(countId);
    count_element.html(checks.length);
}