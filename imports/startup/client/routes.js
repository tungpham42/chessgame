import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { FlowRouterTitle } from 'meteor/ostrio:flow-router-title';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Template } from 'meteor/templating';

// Import needed templates
import '/imports/ui/layouts/body/body.js';
import '/imports/ui/layouts/game/game.js';
import '/imports/ui/pages/home/home.js';
import '/imports/ui/pages/about/about.js';
import '/imports/ui/pages/ai/ai.js';
import '/imports/ui/pages/human/human.js';
import '/imports/ui/pages/board/board.js';
import '/imports/ui/pages/boardAi/boardAi.js';
import '/imports/ui/pages/setup/setup.js';
import '/imports/ui/pages/not-found/not-found.js';

BlazeLayout.setRoot('body');
// Set up all routes in the app
FlowRouter.route('/', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.home',
  title: 'Home - Chess',
  board: '',
  action() {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'aiAbove',
      belowContent: 'aiBelow',
      attrs: {
        aboveData: { levelTxt: 'Normal' },
        belowData: { level: 3 }
      }
    });
  },
});
FlowRouter.route('/newbie', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.newbie',
  title: 'Newbie - Chess',
  board: '',
  action() {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'aiAbove',
      belowContent: 'aiBelow',
      attrs: {
        aboveData: { levelTxt: 'Newbie' },
        belowData: { level: 1 }
      }
    });
  },
});
FlowRouter.route('/easy', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.easy',
  title: 'Easy - Chess',
  board: '',
  action() {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'aiAbove',
      belowContent: 'aiBelow',
      attrs: {
        aboveData: { levelTxt: 'Easy' },
        belowData: { level: 2 }
      }
    });
  },
});
FlowRouter.route('/normal', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.normal',
  title: 'Normal - Chess',
  board: '',
  action() {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'aiAbove',
      belowContent: 'aiBelow',
      attrs: {
        aboveData: { levelTxt: 'Normal' },
        belowData: { level: 3 }
      }
    });
  },
});
FlowRouter.route('/hard', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.hard',
  title: 'Hard - Chess',
  board: '',
  action() {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'aiAbove',
      belowContent: 'aiBelow',
      attrs: {
        aboveData: { levelTxt: 'Hard' },
        belowData: { level: 4 }
      }
    });
  },
});
FlowRouter.route('/insane', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.insane',
  title: 'Insane - Chess',
  board: '',
  action() {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'aiAbove',
      belowContent: 'aiBelow',
      attrs: {
        aboveData: { levelTxt: 'Insane' },
        belowData: { level: 5 }
      }
    });
  },
});
// Set up all routes in the app
FlowRouter.route('/about', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('about');
    });      
  }],
  name: 'App.about',
  title: 'About Us - Chess',
  action() {
    BlazeLayout.render('App_body', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      aboveContent: 'about'
    });
  }
});
FlowRouter.route('/play-with-friend', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.human',
  title: 'Play with friend - Chess',
  action() {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'humanAbove',
      belowContent: 'humanBelow'
    });
  }
});
FlowRouter.route('/set-up', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('setup');
    });      
  }],
  name: 'App.setup',
  title: 'Set up - Chess',
  action() {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'setupAbove',
      belowContent: 'setupBelow',
      attrs: {
        belowData: {
          board: '8/8/8/8/8/8/8/8',
          fullUrl: window.location.href.split('?')[0]
        }
      }
    });
  }
});
FlowRouter.route('/set-up/:board([a-zA-Z0-9\-\/\s| |%20|&nbsp;]+)', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('setup');
    });      
  }],
  name: 'App.setupBoard',
  title: 'Set up - Chess',
  action(params, queryParams) {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'setupAbove',
      belowContent: 'setupBelow',
      attrs: {
        belowData: {
          board: params.board,
          fullUrl: window.location.href.split('?')[0]
        }
      }
    });
  }
});

FlowRouter.route('/board/:fen([a-zA-Z0-9\-\/\s| |%20|&nbsp;]+)', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.board',
  title: 'Board - Chess',
  board: '',
  action(params, queryParams) {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'boardAbove',
      belowContent: 'boardBelow',
      attrs: {
        belowData: {
          fen: params.fen,
          fullUrl: window.location.href.split('?')[0]
        }
      }
    });
  },
});
FlowRouter.route('/newbie-board/:fen([a-zA-Z0-9\-\/\s| |%20|&nbsp;]+)', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.newbieBoard',
  title: 'Newbie Board - Chess',
  board: '',
  action(params, queryParams) {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'boardAiAbove',
      belowContent: 'boardAiBelow',
      attrs: {
        aboveData: { levelTxt: 'Newbie' },
        belowData: {
          level: 1,
          fen: params.fen,
          fullUrl: window.location.href.split('?')[0]
        }
      }
    });
  },
});
FlowRouter.route('/easy-board/:fen([a-zA-Z0-9\-\/\s| |%20|&nbsp;]+)', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.easyBoard',
  title: 'Easy Board - Chess',
  board: '',
  action(params, queryParams) {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'boardAiAbove',
      belowContent: 'boardAiBelow',
      attrs: {
        aboveData: { levelTxt: 'Easy' },
        belowData: {
          level: 2,
          fen: params.fen,
          fullUrl: window.location.href.split('?')[0]
        }
      }
    });
  },
});
FlowRouter.route('/normal-board/:fen([a-zA-Z0-9\-\/\s| |%20|&nbsp;]+)', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.normalBoard',
  title: 'Normal Board - Chess',
  board: '',
  action(params, queryParams) {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'boardAiAbove',
      belowContent: 'boardAiBelow',
      attrs: {
        aboveData: { levelTxt: 'Normal' },
        belowData: {
          level: 3,
          fen: params.fen,
          fullUrl: window.location.href.split('?')[0]
        }
      }
    });
  },
});
FlowRouter.route('/hard-board/:fen([a-zA-Z0-9\-\/\s| |%20|&nbsp;]+)', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.hardBoard',
  title: 'Hard Board - Chess',
  board: '',
  action(params, queryParams) {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'boardAiAbove',
      belowContent: 'boardAiBelow',
      attrs: {
        aboveData: { levelTxt: 'Hard' },
        belowData: {
          level: 4,
          fen: params.fen,
          fullUrl: window.location.href.split('?')[0]
        }
      }
    });
  },
});
FlowRouter.route('/insane-board/:fen([a-zA-Z0-9\-\/\s| |%20|&nbsp;]+)', {
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('body').removeClass().addClass('home');
    });      
  }],
  name: 'App.insaneBoard',
  title: 'Insane Board - Chess',
  board: '',
  action(params, queryParams) {
    BlazeLayout.render('App_game', {
      header: 'header',
      footer: 'footer',
      scripts: 'scripts',
      rules: 'rules',
      aboveContent: 'boardAiAbove',
      belowContent: 'boardAiBelow',
      attrs: {
        aboveData: { levelTxt: 'Insane' },
        belowData: {
          level: 5,
          fen: params.fen,
          fullUrl: window.location.href.split('?')[0]
        }
      }
    });
  },
});
FlowRouter.route('*', {
  action() {
    this.render('App_body', 'App_notFound');
  },
});
new FlowRouterTitle(FlowRouter);