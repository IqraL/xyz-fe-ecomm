/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cart = {
  __typename?: 'Cart';
  items: Array<Maybe<CartItem>>;
  userId: Scalars['String']['output'];
};

export type CartItem = {
  __typename?: 'CartItem';
  productId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type Dimensions = {
  __typename?: 'Dimensions';
  depth: Scalars['Float']['output'];
  height: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
};

export type Meta = {
  __typename?: 'Meta';
  barcode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  qrCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProductToCart?: Maybe<Scalars['Boolean']['output']>;
  emptyCart?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAddProductToCartArgs = {
  id: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  availabilityStatus?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  dimensions?: Maybe<Dimensions>;
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  meta?: Maybe<Meta>;
  minimumOrderQuantity?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  returnPolicy?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  shippingInformation?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
  warrantyInformation?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  getAllProducts: Array<Maybe<Product>>;
  getCart?: Maybe<Cart>;
  productById?: Maybe<Product>;
  productsByCategory: Array<Maybe<Product>>;
  productsByTags: Array<Maybe<Product>>;
};


export type QueryGetCartArgs = {
  userId: Scalars['String']['input'];
};


export type QueryProductByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductsByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QueryProductsByTagsArgs = {
  tags: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Review = {
  __typename?: 'Review';
  comment: Scalars['String']['output'];
  date: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  reviewerEmail: Scalars['String']['output'];
  reviewerName: Scalars['String']['output'];
};

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts: Array<{ __typename?: 'Product', id: number, title: string, price: number, thumbnail: string } | null> };


export const GetAllProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}}]}}]} as unknown as DocumentNode<GetAllProductsQuery, GetAllProductsQueryVariables>;