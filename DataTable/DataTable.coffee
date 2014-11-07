
$(document).ready(() ->
   #addRow('album', 'year', 'author')
)

window.addRow = () ->
   album = $('#albumInput').val();
   year = $('#yearInput').val();
   author = $('#authorInput').val();
   rowText = """
      <tr>
      	<td>#{album}</td>
      	<td>#{year}</td>
      	<td>#{author}</td>
         <td class="opCell" onclick="delRow(this, event)">删除</td>
      </tr>
   """
   $(rowText).insertBefore($('#mainTable > tbody > tr').last())
   #$('#mainTable > tbody').append(rowText)

window.delRow = (widget, event) ->
   widgetJO = $(widget)
   widgetJO.parent().remove();
