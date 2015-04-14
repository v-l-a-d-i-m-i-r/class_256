;(function($, undefined){
    $(document).ready(function(){
        var maxClass = 257;
//        workClassForP();
//        addClassForP();
        addClassForP();

        function classToCss(){
            var newpClass = $('p').attr('class').replace(/\s/g, '');
            $('p').text(newpClass);
        };
        function addClassForP(){
            for(i=1; i<maxClass; i++){
                $('p').addClass('class_' + i);
            };
        };
        function workClassForP(){
            for(i=1; i<maxClass; i++){
                $('p').addClass( '.' + 'class_' + i);
            };
        };
    });
})(jQuery);
