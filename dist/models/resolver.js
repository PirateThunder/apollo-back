import User from "./User.js";
const resolvers = {
    //   Query: {
    //     hello: () => "GraphQL is Awesome",
    //     welcome: (, params) => `Hello ${params.name}`,
    //   },
    Query: {
        users: async () => await User.find({}),
        user: async (parent, args) => await User.findById(args.id),
    },
    Mutation: {
        create: async (parent, args) => {
            const { firstName, lastName, age } = args;
            const newUser = new User({
                firstName,
                lastName,
                age,
            });
            await newUser.save();
            return newUser;
        },
        update: async (parent, args) => {
            const { id } = args;
            const updatedStudent = await User.findByIdAndUpdate(id, args);
            if (!updatedStudent) {
                throw new Error(`Student with ID ${id} not found`);
            }
            return updatedStudent;
        },
        delete: async (parent, args) => {
            const { id } = args;
            const deletedStudent = await User.findByIdAndDelete(id);
            if (!deletedStudent) {
                throw new Error(`Student with ID ${id} not found`);
            }
            return deletedStudent;
        },
    },
};
// module.exports = { resolvers };
export default resolvers;
