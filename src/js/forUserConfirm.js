$(document).ready(function(){
  $.get("json/userAuthentication.json", function(data){
    for (var i = 0; i < data.length; i++) {
      var x = data[i];
      var s = $('<div class="person_info">\n' +
        '        <span class="label">نام و نام خانوادگی:</span>\n' +
        '        <span>' +
        x.name+
        '</span><br>\n' +
        '        <span class="label">پست الکترونیکی:</span>\n' +
        '        <span>' +
        x.email+
        '</span><br>\n' +
        '        <span class="label">سمت:</span>\n' +
        '        <span>' +
        x.position+
        '</span><br>\n' +
        '        <span class="label">بخش:</span>\n' +
        '        <span>' +
        x.section+
        '</span><br>\n' +
        '        <br>\n' +
        '        <form method="post">\n' +
        '          <button type="submit" class="btn btn-success">تایید</button>\n' +
        '          <button type="submit" class="btn btn-secondary">غیرفعال</button>\n' +
        '          <button type="submit" class="btn btn-info">ویرایش پروفایل</button>\n' +
        '          <button type="submit" class="btn btn-danger">حذف</button>\n' +
        '        </form>\n' +
        '      </div>');
      $('.person_info_container').append(s);
    }

  });
});
