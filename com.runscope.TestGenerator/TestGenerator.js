// Extensions are implemented as JavaScript classes
var TestGenerator = function() {

   // implement the generate() method to generate code
   this.generate = function(context, requests, options) {
      steps = []
      for (var i in requests) {
         request = requests[i];

         step = {
            "step_type": "request",
            "headers": {},
            "auth": {}
         }

         step["method"] = request.method;
         step["url"] = request.url;

         for (var header_name in request.headers) {
            header_value = request.headers[header_name];

            if (request.httpBasicAuth && header_name == "Authorization") {
               continue;
            }

            step["headers"][header_name] = [header_value];
         }

         note = request.name + " " + request.description;

         if (request.httpBasicAuth) {
            step["auth"]["auth_type"] = "basic";
            step["auth"]["username"] = request.httpBasicAuth.username;
            step["auth"]["password"] = request.httpBasicAuth.password;
         }

         if (request.oauth1) {
            step["auth"]["auth_type"] = "oauth1";
            step["auth"]["consumer_key"] = request.oauth1["oauth_consumer_key"];
            step["auth"]["consumer_secret"] = request.oauth1["oauth_consumer_secret"];
            step["auth"]["access_token"] = request.oauth1["oauth_token"];
            step["auth"]["token_secret"] = request.oauth1["oauth_token_secret"];
         }

         step["body"] = request.body;

         steps.push(step);
      }

       return JSON.stringify({"steps": steps});
   }
}

// set the extension identifier (must be same as the directory name)
TestGenerator.identifier = "com.runscope.TestGenerator";

// give a display name to your Code Generator
TestGenerator.title = "Runscope Test Generator";

// call to register function is required
registerCodeGenerator(TestGenerator)