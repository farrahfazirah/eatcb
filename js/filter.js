//Filter News
$('select#sort-news').change(function() {
    var filter = $(this).val()
    filterList(filter);
});

//News filter function
function filterList(value) {
    var list = $(".news-list .news-item");
    $(list).fadeOut("fast");
    if (value == "All") {
        $(".news-list").find("article").each(function (i) {
            $(this).delay(200).slideDown("fast");
        });
    } else {
        //Notice this *=" <- This means that if the data-category contains multiple options, it will find them
        //Ex: data-category="Cat1, Cat2"
        $(".news-list").find("article[data-category*=" + value + "]").each(function (i) {
            $(this).delay(200).slideDown("fast");
        });
    }
}

