// Generated by CoffeeScript 1.8.0
(function() {
  $(document).ready(function() {});

  window.addRow = function() {
    var album, author, rowText, year;
    album = $('#albumInput').val();
    year = $('#yearInput').val();
    author = $('#authorInput').val();
    rowText = "<tr>\n	<td>" + album + "</td>\n	<td>" + year + "</td>\n	<td>" + author + "</td>\n   <td class=\"opCell\" onclick=\"delRow(this, event)\">删除</td>\n</tr>";
    return $(rowText).insertBefore($('#mainTable > tbody > tr').last());
  };

  window.delRow = function(widget, event) {
    var widgetJO;
    widgetJO = $(widget);
    return widgetJO.parent().remove();
  };

}).call(this);