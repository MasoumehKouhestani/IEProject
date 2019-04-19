$(document).ready(function () {
  $("textarea[name=egdam_pos_dsc]").focus(function () {
    $(".egdam_pos_dsc").css("visibility", "hidden");
  });
  $("input[name=name_egdam]").focus(function () {
    $(".name_egdam").css("visibility", "hidden");
  });
  $("textarea[name=egdam_erja_dsc]").focus(function () {
    $(".egdam_erja_dsc").css("visibility", "hidden");
  });
});

var submit_egdam_or_not = true;

function validate_egdam() {
  var egdam_pos_dsc = document.forms["pos_change"]["egdam_pos_dsc"].value;
  var name_egdam = document.forms["erja_change"]["name_egdam"].value;
  var egdam_erja_dsc = document.forms["erja_change"]["egdam_erja_dsc"].value;
  if (egdam_pos_dsc == "") {
    $(".egdam_pos_dsc").css("visibility", "visible");
    submit_egdam_or_not = false;
  } else {
    $(".egdam_pos_dsc").css("visibility", "hidden");
    submit_egdam_or_not = true;
  }
  if (name_egdam == "") {
    $(".name_egdam").css("visibility", "visible");
    submit_egdam_or_not = false;
  } else {
    $(".name_egdam").css("visibility", "hidden");
    submit_egdam_or_not = true;
  }
  if (egdam_erja_dsc == "") {
    $(".egdam_erja_dsc").css("visibility", "visible");
    submit_egdam_or_not = false;
  } else {
    $(".egdam_erja_dsc").css("visibility", "hidden");
    submit_egdam_or_not = true;
  }
  return submit_egdam_or_not;
}
