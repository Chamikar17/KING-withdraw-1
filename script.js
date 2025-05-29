<script>
  function showWithdrawOptions() {
    document.getElementById("withdrawOptions").style.display = "block";
  }

  function openForm(type) {
    document.getElementById("withdrawOptions").style.display = "none";

    // Set title depending on type
    const titleInput = document.querySelector('input[name="title"]');
    if (type === 'dialog') {
      titleInput.value = 'Dialog Reload';
    } else if (type === 'hutch') {
      titleInput.value = 'Hutch Reload';
    }

    // Show the main form
    document.getElementById("withdrawForm").style.display = "block";
  }
</script>
