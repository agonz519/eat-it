// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devourBurger").on("click", function(event) {
    let id = $(this).data("id");
    let devoured = $(this).data("devoured");

    let devouredState = {
      devoured: Math.abs(devoured - 1)
    };

    // Send the PUT request.
    $.ajax("/api/eatburger/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed state to", devoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".deleteBurger").on("click", function(event) {
    let id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/deleteburger/" + id, {
      type: "DELETE",
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bName").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/addburger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New burger added!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
