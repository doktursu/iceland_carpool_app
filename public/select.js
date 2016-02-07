var Select = function(select){
  this.select = select;
};

Select.prototype.populate = function(items){
  this.select.innerHTML = '';
  items.forEach(function(item){
    var option = document.createElement('option');
    option.text = item;
    option.value = item;
    this.select.appendChild(option);
  }.bind(this));
}