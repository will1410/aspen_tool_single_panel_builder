$(document).ready(function () {
  $("#accordion_generator").click(function (event) {
    event.preventDefault();

    const panel_title = $("#panel_title").val();
    const note_text = $("#note_text").val().replace(/(?<!>)\n/g, '<br>\n');

    const now = new Date($.now());
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const year = ("0" + now.getFullYear()).slice(-4);
    const hour = now.getHours();
    const minute = ("0" + now.getMinutes()).slice(-2);
    const id_suffix = year + month + day + hour + minute;

    $("#output").val(
      '<p><span style="display: none;">=== BEGIN ' + id_suffix + ' ===</span></p>\n' +
      '<div class="panel panel-default">\n' +
        '  <div class="panel-heading" role="tab" id="heading-' +
        id_suffix +
        '">\n' +
        '    <h5 class="panel-title">\n' +
        '      <a role="button" data-toggle="collapse" class="accordion-plus-toggle collapsed" href="#collapse-' +
        id_suffix +
        '" aria-expanded="false" aria-controls="collapse-' +
        id_suffix +
        '"><strong>' +
        panel_title +
        "</strong></a>\n" +
        "    </h5>\n" +
        "  </div>\n" +
        '  <div id="collapse-' +
        id_suffix +
        '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-' +
        id_suffix +
        '">\n' +
        "    <div class='panel-body'>\n" +
        "      <p>\n" + 
        "        " + 
        note_text +
        "\n      </p>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>\n" +
        '<p><span style="display: none;">=== END ' + id_suffix + ' ===</span></p>'
    );
  });

  $("#copy_to_clipboard").click(function () {
    event.preventDefault();
    var copy_output = $("#output").val().trim();
    console.log(copy_output);
    navigator.clipboard.writeText(copy_output);
  });
});