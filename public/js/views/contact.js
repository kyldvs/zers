define(['backbone', 'dusts/contact'], function() {
  return ContactView = Backbone.View.extend({
    initialize: function() {
      this.render();
    },
    render: function() {
      var el = this.$el;
      dust.render('contact', this.options.data, function(err, out) {
        if (err) throw err;
        el.html(out);
      });
    }
  });
});