var Handlebars = require("./helpers");
 exports["_404"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2>404: Page Not Found</h2>\n<div>The page "
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + " cannot be found.</div>\n";
},"useData":true});
exports["artist"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <iframe width=\"100%\"\n	height=\"450\"\n	scrolling=\"no\"\n	frameborder=\"no\" \n	    src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.soundcloud : depth0)) != null ? stack1.type : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.soundcloud : depth0)) != null ? stack1.id : stack1), depth0))
    + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"releases\">\n	<h3>Releases</h3>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.releases : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	    <div><img src=\"/assets/285x285/"
    + container.escapeExpression(((helper = (helper = helpers.cat_id || (depth0 != null ? depth0.cat_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"cat_id","hash":{},"data":data}) : helper)))
    + ".png\"/></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<h2>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n<img src=\"/assets/285x285/"
    + alias3((helpers.kebabCase || (depth0 && depth0.kebabCase) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"kebabCase","hash":{},"data":data}))
    + ".png\"/>\n<div>"
    + ((stack1 = (helpers.markdown || (depth0 && depth0.markdown) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"markdown","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.soundcloud : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.releases : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \n";
},"useData":true});
exports["release"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div>"
    + ((stack1 = (helpers.markdown || (depth0 && depth0.markdown) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.notes : depth0),{"name":"markdown","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\n    <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.artist_display || (depth0 != null ? depth0.artist_display : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist_display","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.notes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
exports["releases"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"box\">\n	<img src=\"/assets/285x285/"
    + alias4(((helper = (helper = helpers.cat_id || (depth0 != null ? depth0.cat_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cat_id","hash":{},"data":data}) : helper)))
    + ".png\"/>\n	<div class=\"detail\">\n	    <div class=\"inner\">\n		<h2><a href=\"/#!/releases/"
    + alias4((helpers.kebabCase || (depth0 && depth0.kebabCase) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"kebabCase","hash":{},"data":data}))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\n		<div>Artist(s):\n		    <ul>\n			"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		    </ul>\n		</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.available : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "	    </div>\n	</div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "<li><a href=\"/#!/artists/"
    + alias1((helpers.kebabCase || (depth0 && depth0.kebabCase) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"kebabCase","hash":{},"data":data}))
    + "\">"
    + alias1(container.lambda(depth0, depth0))
    + "</a></li>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.paypal : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"add_to_cart\">\n			    <form target=\"paypal\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">\n				<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n				<input type=\"hidden\" name=\"hosted_button_id\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.paypal : depth0)) != null ? stack1.hosted_button_id : stack1), depth0))
    + "\">\n				<input type=\"image\" src=\"https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal – The safer, easier way to pay online.\">\n				<img src=\"/assets/svg/ic_add_shopping_cart_black_24px.svg\" />\n			    </form>\n			</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<div><strong>SOLD OUT</strong></div>	\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		    <div><strong>SOLD OUT</strong></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});