(function() {
var t = Handlebars.template;
Em.I18n.translations = {
    'group': {
        'create': {
            'static': t({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "This one has escaped ' and is quoted with the same.";
},"useData":true}),
            "dynamic" : t({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "This string has a \""
    + container.escapeExpression(((helper = (helper = helpers.dynamic || (depth0 != null ? depth0.dynamic : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"dynamic","hash":{},"data":data}) : helper)))
    + "\" part.";
},"useData":true})
        }
    }
};})();