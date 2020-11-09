<template>
  <div class="board-card">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 mt-4 mb-4">
          <div class="card bg-dark">
            <div class="card-body">
              <h3 class="card-title text-danger d-flex justify-content-center">
                { Board Title }
              </h3>
              <p class="text-light" href="#">
                <strong>Description:</strong>
              </p>
              <p class="card-text text-light">
                { This is going to be a description of the board for the user if
                they choose to input one }
              </p>
              <a href="#" class="btn btn-danger d-flex justify-content-center">
                Details</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-card"
};
</script>

<style>
a.btn.btn-danger.d-flex.justify-content-center {
  font-size: 18px;
}
.card {
  border-radius: 7px;
}
</style>