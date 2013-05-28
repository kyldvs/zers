define(['backbone', 'dusts/default'], function() {
  return DefaultView = Backbone.View.extend({
    initialize: function() {
      this.render();
    },
    render: function() {
      var el = this.$el;
      dust.render('default', this.options.data, function(err, out) {
        if (err) throw err;
        el.html(out);
      });
    }
  });
});