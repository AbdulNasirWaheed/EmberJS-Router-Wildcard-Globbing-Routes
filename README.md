# EmberJS-Router-Wildcard-Globbing-Routes
Wildcard routes are used for matching the multiple URL segments.

The below example specifies the wildcard routes with multiple URL segments. Open the file created under app/templates/. Here, we have created the file as dynamic-segment.hbs and dynamic-segment1.hbs with the below code −

dynamic-segment.hbs

<h3>Key One</h3>
Name: {{model.name}}
{{outlet}}
dynamic-segment1.hbs

<h3>Key Two</h3>
Name: {{model.name}}
{{outlet}}
Open the router.js file to define URL mappings −

import Ember from 'ember';                   
//Access to Ember.js library as variable Ember
import config from './config/environment';
//It provides access to app's configuration data as variable config 

//The const declares read only variable
const Router = Ember.Router.extend ({
   location: config.locationType,
   rootURL: config.rootURL
});

//Defines URL mappings that takes parameter as an object to create the routes
Router.map(function() {
   
   //definig the routes
   this.route('dynamic-segment', { path: '/dynamic-segment/:myId', 
      resetNamespace: true }, function() {
      this.route('dynamic-segment1', { path: '/dynamic-segment1/:myId1', 
         resetNamespace: true }, function() {
         this.route('item', { path: '/item/:itemId' });
      });
   });
});

export default Router;
Create the application.hbs file and add the following code −

<h2 id = "title">Welcome to Ember</h2>
{{#link-to 'dynamic-segment1' '101' '102'}}Deep Link{{/link-to}}
<br>
{{outlet}}
Under routes folder, define the model for dynamic-segment.js and dynamic-segment1.js with the below code −

dynamic-segment.hbs

import Ember from 'ember';

export default Ember.Route.extend ({
   //model() method is called with the params from the URL
   model(params) {
      return { id: params.myId, name: `Id ${params.myId}` };
   }
});
dynamic-segment1.hbs

import Ember from 'ember';

export default Ember.Route.extend ({
   model(params) {
      return { id: params.myId1, name: `Id ${params.myId1}` };
   }
});

Only dynamic-segment.hbs,dynamic-segment1.hbs,dynamic-segment.js,dynamic-segment1.js,application.hbs and router.js files are included in
this repository


