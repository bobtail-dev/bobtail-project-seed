let $ = require('jquery');
let rx = require('bobtail');
let {bind, rxt} = rx;
let {tags} = rxt;

function counterApp() {
  let counter = rx.cell(0);
  return tags.div({class: 'row'}, [
    tags.div({class: 'col-xs-4'}, tags.button({
      class: 'btn btn-primary btn-block',
      click() {
        counter.set(counter.raw() + 1);
      }
    }, "Increment")),
    tags.div({class: 'col-xs-4'}, tags.button({
      class: 'btn btn-danger btn-block',
      click() {
        counter.set(counter.raw() - 1);
      }
    }, "Decrement")),
    tags.div({class: 'col-xs-4'}, tags.h3(
      {style: {display: 'inline'}},
      bind(() => `count ${counter.get()}`))
    )
  ])
}

$(document).ready(() => $('body').append(tags.div({class: 'container'}, [
  tags.h1("Bobtail Sample App"), counterApp()
])));
