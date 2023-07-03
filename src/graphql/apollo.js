import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

import typePolicies from "./typePolicies";
import WebSocketLink from "./links/WebSocketLink";
import authErrorLink from "./links/authErrorLink";

const httpLink = new HttpLink({
	uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

const wsLink = new WebSocketLink({
	url: import.meta.env.VITE_SUBSCRIPTIONS_ENDPOINT,
});

const link = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	authErrorLink.concat(httpLink)
);

const client = new ApolloClient({
	cache: new InMemoryCache({ typePolicies }),
	connectToDevTools: import.meta.env.DEV,
	link
})

export default client;
