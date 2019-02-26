$(function(){

    $('nav').coreNavigation({
        menuPosition: "right",
        container: true,
        dropdownEvent: 'hover',
        onOpenDropdown: function(){
            console.log('open');
        },
        onCloseDropdown: function(){
            console.log('close');
        }
    });
});
