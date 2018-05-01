import Route from '@ember/routing/route';

export default Route.extend({
	//model() method is called with the params from the URL
   model(params) {
      return { id: params.myId, name: `Id ${params.myId}` };
   }
});
