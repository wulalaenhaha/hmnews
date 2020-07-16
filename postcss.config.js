// module.exports = {
//     plugins: {
//         autoprefixer: {
//             browsers: ['Android >= 4.0', 'iOS >= 8'],
//         },
//         'postcss-pxtorem': {
//             rootValue:75,
//             propList: ['*'],
//         },
//     },
// };
const {sep} = require('path')

module.exports=({file})=>{
    let rootValue=
    file.dirname.indexOf(`node_modules${sep}vant`) !== -1 ? 37.5 : 75

    return {
        plugins: {
            autoprefixer: {},
            'postcss-pxtorem': {
                rootValue,
                propList: ['*'],
            },
        }
    }
}