
function Person (_name) {
  let [_first, _last] = _name.split(' ')

  this.getFirstName = () => {
    return _first
  }

  this.getFullName = () => {
    return _first + ' ' + _last
  }

  this.getLastName = () => {
    return _last
  }

  this.setFirstName = (first) => {
    _first = first
  }

  this.setLastName = (last) => {
    _last = last
  }

  this.setFullName = (name) => {
    [_first, _last] = name.split(' ')
  }
}

var bob = new Person('Bob Ross')
bob.getFullName()
