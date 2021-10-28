#!/usr/bin/env node
import type { App } from '@serverless-stack/resources';
import { config } from 'dotenv-cra';
import { HelloStack } from '#stacks';

config();

export default function main(app: App): void {
	// Local Development Stack (should only include lambda stacks)
	new HelloStack(app, 'HelloStack');
}
