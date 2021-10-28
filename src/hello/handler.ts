import type { APIGatewayEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
	const name: string | undefined = Reflect.get(event.queryStringParameters ?? { name: 'World' }, 'name');

	return Promise.resolve({
		statusCode: 200,
		body: `Hello ${name}!`,
		headers: {
			'Content-Type': 'text/plain',
		},
	});
};
