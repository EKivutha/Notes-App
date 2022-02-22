import noteSchema from "./notes";

cpnst linkSchema = gql`
type Query{
_: Boolean}

type Mutation{
_: Boolean}

type Subscription{
_:Boolean}
`;

export default [linkSchema, noteSchema];
