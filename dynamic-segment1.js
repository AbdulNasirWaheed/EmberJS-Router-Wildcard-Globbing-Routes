import Route from '@ember/routing/route';

export default Route.extend({
	 model(params) {
      return { id: params.myId1, name: `Id ${params.myId1}` };
   }
});
