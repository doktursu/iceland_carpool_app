var SelectTo = function(select){
  this.select = select;
  // this.onchange = undefined;
  // this.select.addEventListener('change', function(){
  //   var city = this.select.value;
  //   this.onchange(city);
  // }.bind(this));
};

SelectTo.prototype.populate = function(items){
  this.select.innerHTML = '';
  items.forEach(function(item){
    var option = document.createElement('option');
    option.text = item;
    option.value = item;
    this.select.appendChild(option);
  }.bind(this));
}