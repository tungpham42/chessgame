import { Template } from 'meteor/templating';

import './ai.html';

Template.aiAbove.events({
  'click .go-to-href'(event) {
    event.preventDefault();
    const target = event.target;
    const href = target["data-href"];
    window.location.href = href;
  }
});

Template.aiBelow.events({
  'click .go-to-href'(event) {
    event.preventDefault();
    const target = event.target;
    const href = target["data-href"];
    window.location.href = href;
  }
});