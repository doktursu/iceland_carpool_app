var FilterForm = function(form){
  this.form = form;
  this.button = form.querySelector('input[type="button"]');
  this.selectFrom = form.querySelector('#select-from');
  this.selectTo = form.querySelector('#select-to');
};

FilterForm.prototype.populate = function(origins, destinations){
  this.selectFrom.innerHTML = '<option value="Anywhere">Anywhere</option>';
  origins.forEach(function(origin){
    var option = document.createElement('option');
    option.text = origin;
    option.value = origin;
    this.selectFrom.appendChild(option);
  }.bind(this));

  this.selectTo.innerHTML = '<option value="Anywhere">Anywhere</option>';
  destinations.forEach(function(destination){
    var option = document.createElement('option');
    option.text = destination;
    option.value = destination;
    this.selectTo.appendChild(option);
  }.bind(this));
}

