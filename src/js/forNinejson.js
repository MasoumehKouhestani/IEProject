$(document).ready(function(){
  $.get("json/userAuthentication.json", function(data){
  var m="m"
    for (var i = 0; i < data.length; i++) {
    m=m+i;
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
        '
        '<button type="submit" class="btn btn-success">تایید</button>
               <button type="submit" class="btn btn-secondary">غیرفعال</button>
               <input type="button" value="ویرایش پروفایل" class="btn btn-info" data-toggle="modal" data-target="#+
               m
              + ">
               <button type="submit" class="btn btn-danger">حذف</button>'


        '        </form>\n' +
        '      </div>');

      $('.person_info_container').append(s);
      $('div class="modal" id="">
           <div class="modal-dialog modal-dialog-centered modal-lg ">
             <div class="modal-content">
               <div class="modal-header">
                 <h5 class="modal-title">
                   ویرایش پروفایل کاربر انتخابی
                 </h5>
               </div>

               <div class="modal-body">
                 <div class="row bg-white">
                   <div class="col-sm">
                     <div class="boxinmodal text-sm-right ">
                       <form name="profile_edit_form" onsubmit="return validate_profile_edit()" method="post" class="form-group">
                         <div class="form-group">
                           <label for="name_edit_profile">نام و نام خانوادگی:</label>
                           <input type="text" id="name_edit_profile" name="name_edit_profile" class="form-control"
                                  placeholder="نام و نام خانوادگی "/>

                           <br>
                         </div>
                         <div class="form-group">
                           <label for="username_edit_profile">نام کاربری:</label>
                           <input type="text" id="username_edit_profile" name="username_edit_profile" class="form-control"
                                  placeholder="نام کاربری "/>

                           <br>
                         </div>
                         <div class="form-group">
                           <label for="email_edit_profile">پست الکترونیکی:</label>
                           <input type="email" id="email_edit_profile" name="email_edit_profile" class="form-control"
                                  placeholder="پست الکترونیکی "/>

                           <br>
                         </div>
                         <div class="form-group">
                           <label for="new_password_edit_profile">رمز عبور جدید:</label>
                           <input type="password" id="new_password_edit_profile" name="new_password_edit_profile" class="form-control"
                                  placeholder="رمز عبور جدید "/>

                         </div>
                         <div class="form-group">
                           <label for="repeat_password_edit_profile">تکرار رمز عبور جدید:</label>
                           <input type="password" id="repeat_password_edit_profile" name="repeat_password_edit_profile"
                                  class="form-control"
                                  placeholder="تکرار رمز عبور جدید "/>

                         </div>
                         <div id="edit_profile_btn_div" class="form-group">
                           <input id="edit_profile_btn" type="submit" class="form-control btn submit-btn btn-primary" value="اعمال تغییرات"/>
                         </div>
                       </form>

               </div>
             </div>
                 </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-danger" data-dismiss="modal">
                 بستن
               </button>
             </div>
           </div>
         </div>
         </div>')
    }

  });
});
