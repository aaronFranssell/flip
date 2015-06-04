$(document).ready(initialize_flip);
$(document).on('page:load', initialize_flip);

function initialize_flip() {
  $('.flip').on('change', '.onoffswitch-checkbox', function() {
    var value = '';
    $this = $(this)
    value = $this.is(':checked') ? 'Switch On' : 'Switch Off'
    var url = $this.closest('form').attr('action');

    $.ajax({
      method: 'PATCH',
      url: url,
      data: { commit: value },
      success: function(data) {
        if (data.state) {
          $this.attr('checked', 'checked');
          $this.closest('tr').find('.off').first().addClass('on').removeClass('off').find('.status').text('On');
        }
        else {
          $this.removeAttr('checked');
          $this.closest('tr').find('.on').first().addClass('off').removeClass('on').find('.status').text('Off');
        }

        if (!$this.closest('form').find('.button-delete').length) {
          $this.closest('.onoffswitch').after("<button class='button-delete' name='commit' type='submit' value='Delete'>Delete</button>");
        }
      },
      error: function() {
        if ($this.is(':checked')) {
          $this.removeAttr('checked');
        }
        else {
          $this.attr('checked', 'checked');
        }
      }
    });
  });
}
