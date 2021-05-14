Template.registerHelper('EQUALS', (condition1, condition2) => {
  return Boolean(condition1 === condition2);
});

Template.registerHelper('NOT', (condition) => {
    return !Boolean(condition);
});