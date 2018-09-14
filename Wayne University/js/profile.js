  $(document).ready(function(){
  $('ul.dashprof_tabs li a:first').addClass('dashprof_tabs_active');
  $('.dashprof_secciones article').hide();
  $('.dashprof_secciones article:first').show();

  $('ul.dashprof_tabs li a').click(function(){
    $('ul.dashprof_tabs li a').removeClass('dashprof_tabs_active');
    $(this).addClass('dashprof_tabs_active');
    $('.dashprof_secciones article').hide();

    var activeTab = $(this).attr('href');
    $(activeTab).show();
    return false;
  });
});