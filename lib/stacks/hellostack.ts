import { App, Stack, StackProps, Api, Function } from '@serverless-stack/resources';

export class HelloStack extends Stack {
	public constructor(scope: App, id: string, props?: StackProps) {
		super(scope, id, props);

		const api = new Api(this, 'HelloStackAPI');

		const helloLambda = new Function(this, 'HelloLambda', {
			handler: 'src/hello/handler.handler',
		});

		api.addRoutes(this, {
			'GET /hello': helloLambda,
		});

		this.addOutputs({
			APIBase: api.url,
			Routes: api.routes.join(', '),
		});
	}
}
